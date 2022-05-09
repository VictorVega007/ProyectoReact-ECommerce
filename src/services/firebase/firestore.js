import { getProductsDB } from './index';
import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';
import { setAdapterProductFromFirestore } from '../../adapters/adaptersOfProducts';

export const getProducts = (categoryId) => {

    return new Promise((resolve, reject) => {
        const collectionRef = categoryId 
            ? query(collection(getProductsDB, 'products'), where('category', '==', categoryId)) 
            : query(collection(getProductsDB, 'products'), orderBy('name', 'asc'));

        getDocs(collectionRef).then(response => {
            
            const products = response.docs.map(doc => {
                return setAdapterProductFromFirestore(doc);
            })
            resolve(products);
        })
        .catch(error =>{
            reject(error);
        })
    })
}