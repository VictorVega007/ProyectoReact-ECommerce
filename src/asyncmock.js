
const products = [
    {
        id: 1, 
        name: 'PRS Guitar', 
        price: 2500, 
        category: 'Guitarras', 
        img: 'https://d159anurvk4929.cloudfront.net/blog-legacy/2BestSellers2018.png',
        stock: 20
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