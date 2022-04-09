
const products = [
    {
        id: 1, 
        name: 'PRS Guitar / SE STANDARD 24-08', 
        price: 2500, 
        category: 'Guitarras', 
        img: 'https://d159anurvk4929.cloudfront.net/blog-legacy/2BestSellers2018.png',
        stock: 20,
        description: 'Guitarra signature marca PRS Guitar, elaborada con madera Mahogany en toda su estructura corporal. Cuenta de 24 trastes en su estructura de cuello. Pastillas modelo TCI “S” y tres módulos de control de volumen, brillo y bajos.'
    },
    {
        id: 2, 
        name: 'Ibanez Bass', 
        price: 1500, 
        category: 'Bajos Eléctricos', 
        img: 'https://www.ibanez.com/common/product_artist_file/file/p_region_SRF706_BBF_1P_05.png',
        stock: 20
    },
    {
        id: 3, 
        name: 'Tama Battery', 
        price: 5500, 
        category: 'Baterías', 
        img: 'https://www.tama.com/common/product_artist_file/file/pen_starclassic_wb2022.png',
        stock: 20
    }
]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getItemDetail = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}