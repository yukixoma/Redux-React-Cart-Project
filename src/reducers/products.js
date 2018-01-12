

let initialState = [
    {
        id: 1,
        name: "Iphone X",
        img: "https://cellphones.com.vn/media/catalog/product/cache/7/image/500x500/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray.png",
        description: "Sản phẩm do Apple sản xuất",
        price: 1500,
        rating: 1,
        inventory: 10
    },
    {
        id: 2,
        name: "Samsung Galaxy S9",
        img: "http://www.phonedokan.com/wp-content/uploads/Samsung-Galaxy-S9.png",
        description: "Sản phẩm do Samsung sản xuất",
        price: 1000,
        rating: 4,
        inventory: 15
    },
    {
        id: 3,
        name: "LG V30",
        img: "https://support.t-mobile.com/___sbsstatic___/sftp-sync/images/devices/lg/v30/lg-v30-00-600x600-hero.png",
        description: "Sản phẩm do LG sản xuất",
        price: 800,
        rating: 3,
        inventory: 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;