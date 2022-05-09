export const setAdapterProductFromFirestore = (doc) => {
    const data = doc.data();

    const formatingProducts = {
        id: doc.id,
        name: data.name,
        category: data.category,
        img: data.img,
        price: data.price,
        description: data.description
    }

    return formatingProducts;
}