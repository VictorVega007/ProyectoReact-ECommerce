/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
import './Form.css'
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore';
import { getProductsDB } from '../../services/firebase';
import swal from 'sweetalert'; 
import Cart from '../Cart/Cart';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [ input, setInput ] = useState({name: '', lastname: '', email: '', phone: '', address: ''});
    const [ loading, setLoading ] = useState(false);
    let { cart, total, clearCart } = useContext(CartContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (input) => {
        setInput(input);
        console.log(input)
    }

    const orderDetail = () => {
        setLoading(true);

        const user = {
            items: cart,
            buyer: {...input},
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
                clearCart()
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
                <div className='SpinnerContainer'><p className='Spinner'></p></div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Cart/>
    }

    return (
        <>
        <form id='Form' onSubmit={handleSubmit(onSubmit)} className = 'Form'>
            <h1>Realiza tu orden</h1>
            <label htmlFor='name' className='LabelBlock'>
                <h3>Nombre</h3>
                <input {...register('name', { required: true , pattern:(/^[A-Za-z]+$/i ) })} className = 'Inputs' placeholder = 'Nombre'/>
                    {errors.name?.type === 'required' && <p className='ErrorMessage'>Se requiere su nombre</p>}
                    {errors.name?.type === 'pattern' && <p className='ErrorMessage'>Sólo letras son válidas</p>}
            </label>
            <label htmlFor='lastname' className='LabelBlock'>
                <h3>Apellido</h3>
                <input {...register('lastname', { required: true , pattern:(/^[A-Za-z]+$/i ) })} className = 'Inputs' placeholder = 'Apellido'/>
                    {errors.lastname?.type === 'required' && <p className='ErrorMessage'>Se requiere su Apellido</p>}
                    {errors.lastname?.type === 'pattern' && <p className='ErrorMessage'>Sólo letras son válidas</p>}
            </label>
            <label htmlFor='email' className='LabelBlock'>
                <h3>Email</h3>
                <input id='email' {...register('email', { required: true, pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} className = 'Inputs' placeholder = 'Ej. nombre@gmail.com'/>
                    {errors.email?.type === 'required' && <p className='ErrorMessage'>Ingresar un correo</p> }
                    {errors.email?.type ===  'pattern' && <p className='ErrorMessage'>Ingresar un correo válido</p>}
            </label>
            <label htmlFor='emailConfirm' className='LabelBlock'>
                <h3>Confirme correo</h3>
                <input id='emailConfirm' {...register('emailConfirm', { 
                        required: true, 
                        pattern: (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) })} className = 'Inputs' placeholder = 'Ej. nombre@gmail.com'/>
                    {errors.emailConfirm?.type === 'required' && <p className='ErrorMessage'>Ingrese nuevamente su correo</p>}
                    {errors.emailConfirm?.type === 'pattern' && <p className='ErrorMessage'>Su correo no coincide</p>}
            </label>
            <label htmlFor='phone' className='LabelBlock'>
                <h3>Teléfono</h3>
                <input {...register('phone', { required: true, pattern: (/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/) })} className = 'Inputs' placeholder = 'Telefono'/> 
                    {errors.phone?.type === 'required' && <p className='ErrorMessage'>Ingrese un teléfono de contacto</p>}
                    {errors.phone?.type === 'pattern' && <p className='ErrorMessage'>Ingrese solo números</p>}
            </label>
            <label htmlFor='address' className='Address LabelBlock'>
                <h3>Dirección</h3>
                <input {...register('address', { required: true })} className = 'Inputs AddressMargin' placeholder = 'Número de casa / departamento'/>
                    {errors.address?.type === 'required' && <p className='ErrorMessage'>Ingrese una dirección válida</p>}
            </label>
            <div className = 'ButtonAlign'>
                <button  className={(input.emailConfirm == input.email)?'hidden': 'visible ButtonOrder'}> Confirmar datos </button>
            </div>
            <div className={(input.emailConfirm == null || input.emailConfirm == input.email)?'hidden': 'visible'}>
                <h4 className='ErrorMessage'>La dirección de correo no coincide, intete nuevamente.</h4> 
            </div>
            <div className = 'ButtonAlign'>
                <button className={(input.emailConfirm == input.email)?'ButtonOrder': 'hidden'} type = 'button' onClick={()=> orderDetail()} >Realizar orden</button>
            </div>
        </form>
        </>
    )
};

export default Form;