
const products = [
    {
        id: 1, 
        name: 'PRS Guitar / SE STANDARD 24-08', 
        price: 2500, 
        category: 'guitarras', 
        img: 'https://d159anurvk4929.cloudfront.net/blog-legacy/2BestSellers2018.png',
        stock: 20,
        description: 'Guitarra signature marca PRS Guitar, elaborada con madera Mahogany en toda su estructura corporal. Cuenta de 24 trastes en su estructura de cuello. Pastillas modelo TCI “S” y tres módulos de control de volumen, brillo y bajos.'
    },
    {
        id: 2, 
        name: 'Ibanez Bass / SR PORTAMENTO', 
        price: 1500, 
        category: 'bajos', 
        img: 'https://www.ibanez.com/common/product_artist_file/file/p_region_SRF706_BBF_1P_05.png',
        stock: 20,
        description: 'Bajo 6 cuerdas. El SR Portamento cuenta con un diapasón de palisandro extendido de 30 trastes para tocar notas de registro superior, generalmente solo accesibles en una posición vertical.'
    },
    {
        id: 3, 
        name: 'Tama Battery', 
        price: 5500, 
        category: 'baterias', 
        img: 'https://www.tama.com/common/product_artist_file/file/pen_starclassic_wb2022.png',
        stock: 20,
        description: 'Kit de batería de 5 piezas Rhythm Mate de TAMA. Encontrarás un kit de 5 piezas de aspecto absolutamente clásico con un full shell set de álamo ligero y expresivo de TAMA. Aún más genial, este kit súper económico viene completo con todo lo que ve aquí, incluido el hardware de la batería, los soportes y los pedales.'
    }
];

const categories = [
    { id: 'guitarras', description: 'Guitarras' },
    { id: 'bajos', description: 'Bajos' },
    { id: 'baterias', description: 'Baterías'}
];

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000);
    });
};

export const getProducts = (categoryId) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000);
    });
};

export const getItemDetail = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000);
    });
};