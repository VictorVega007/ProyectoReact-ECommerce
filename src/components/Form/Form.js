import './Form.css'
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore';
import { getProductsDB } from '../../services/firebase';
import swal from 'sweetalert'; 

const Form = () => {
    // const [ input, setInput ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const { cart, total } = useContext(CartContext);
    
    const [ name, setName ] = useState('');
    const [ lastname, setLastname] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState ('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const orderDetail = () => {
        setLoading(true);

        const user = {
            items: cart,
            buyer: {
                name: name,
                lastname: lastname,
                email: email,
                phone: phone,
                address: address,
                city: city
            },
            total: total(),
            date: new Date()
        };

        const batch = writeBatch(getProductsDB);
        const referenceOfProductsCollection = collection(getProductsDB, 'products');
        const idOfDocuments = cart.map(product => product.id);
        const productsWithoutStock = [];

        getDocs(query(referenceOfProductsCollection, where(documentId(), 'in', idOfDocuments)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataOfDoc = doc.data();
                    const productQuantitySelectedByUser = cart.find(prod => prod.id === doc.id)?.quantity 

                    if(dataOfDoc.stock >= productQuantitySelectedByUser) {
                        batch.update(doc.ref, { stock: dataOfDoc.stock - productQuantitySelectedByUser})
                    } else {
                        productsWithoutStock.push({ id: doc.id, ...dataOfDoc });
                    }
                })
            })
            .then(() => {

                if (productsWithoutStock.length === 0) {
                    const referenceOfOrderCollection = collection(getProductsDB, 'orderDetailOfUser');
                    return addDoc(referenceOfOrderCollection, user);

                } else {
                    return Promise.reject({ name: 'outOfStock', products: productsWithoutStock});
                }
            })
            .then(({ id }) => {
                batch.commit();
                swal({
                    title: 'Felicidades!',
                    text: `1. El id de su orden es ${id} \n\n2. El total de su compra es ${total()}`,
                    icon: 'success',
                    button: true,
                    dangerMode: true
                });
            })
            .catch(error => {
                console.log(error)
                swal({
                    title: 'Lo sentimos!',
                    text: `El producto ${productsWithoutStock.map(p => p.name)} no tiene stock`,
                    icon: 'error',
                    button: true,
                    dangerMode: true
                });
            })
            .finally(() => {
                setLoading(false);
            })
    }

    if(loading) {
        return (
            <div className='TextOrder'>
                <h1>Se está generando su orden</h1>
            </div>
        )
    }

    return (
        <>
        <form id='Form' onSubmit={handleSubmit} className = 'Form'>
            <h1>Realiza tu orden</h1>
            <label>
                <h3>Nombre</h3>
                <input className = 'Inputs' type = 'text' placeholder = 'Nombre' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <h3>Apellido</h3>
                <input className = 'Inputs' type = 'text' placeholder = 'Apellido' value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            </label>
            <label>
                <h3>Email</h3>
                <input className = 'Inputs' type = 'text' placeholder = 'Ej. nombre@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <h3>Teléfono</h3>
                <input className = 'Inputs' type = 'text' placeholder = 'Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            </label>
            <label className='Address'>
                <h3>Dirección</h3>
                <input className = 'Inputs AddressMargin' type = 'text' placeholder = 'Número de casa / departamento' value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input className = 'Inputs AddressMargin' type = 'text' placeholder = 'Ciudad / País' value={city} onChange={(e) => setCity(e.target.value)}/>
            </label>
            <div className = 'ButtonAlign'>
                <button className = 'ButtonOrder' type = 'button' onClick={orderDetail}>Realizar orden</button>
            </div>
        </form>
        </>
    )
};

export default Form;