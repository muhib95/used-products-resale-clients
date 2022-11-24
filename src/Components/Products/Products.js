import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModals from './Booking/BookingModals';
import ProductItem from './ProductItem';
// const products=[
//     {
//        "picture":"https://ibb.co/bz8kTys",
//        "name":"Sony Bravia 55 inch",
//        "Brand":"Sony",
//        "location":"Dhaka",
//        "ResatePrice":15000,
//        "OriginalPrice":50000,
//        "yearsOfUse":5,
//        "postTime":"125265656",
//        "sellerName":"Muhib",
//        "verified":false,
//        "condition":"good",
//        "mobile":"01749958965",
//        "discription":"My name is Muhibbvvbvbc",
//        "purchaseYear":"2017",
//        "brandId":"637f2419c20a3c656069cec8"

//     },
//     {
//         "picture":"https://ibb.co/bz8kTys",
//         "name":"Sony Bravia 55 inch",
//         "Brand":"Sony",
//         "location":"Dhaka",
//         "ResatePrice":15000,
//         "OriginalPrice":50000,
//         "yearsOfUse":5,
//         "postTime":"125265656",
//         "sellerName":"Muhib",
//         "verified":false,
//         "condition":"good",
//         "mobile":"01749958965",
//         "discription":"My name is Muhibbvvbvbc",
//         "purchaseYear":"2017",
//         "brandId":"637f2419c20a3c656069cec8"
 
//      },
//      {
//         "picture":"https://ibb.co/bz8kTys",
//         "name":"LG 55 inch",
//         "Brand":"Lg",
//         "location":"Dhaka",
//         "ResatePrice":15000,
//         "OriginalPrice":50000,
//         "yearsOfUse":5,
//         "postTime":"125265656",
//         "sellerName":"Muhib",
//         "verified":false,
//         "condition":"good",
//         "mobile":"01749958965",
//         "discription":"My name is Muhibbvvbvbc",
//         "purchaseYear":"2017",
//         "brandId":"637f2419c20a3c656069cec9"
 
//      },
//      {
//         "picture":"https://ibb.co/bz8kTys",
//         "name":"Lg 32 inch",
//         "Brand":"LG",
//         "location":"Dhaka",
//         "ResatePrice":15000,
//         "OriginalPrice":50000,
//         "yearsOfUse":5,
//         "postTime":"125265656",
//         "sellerName":"Muhib",
//         "verified":false,
//         "condition":"good",
//         "mobile":"01749958965",
//         "discription":"My name is Muhibbvvbvbc",
//         "purchaseYear":"2017",
//         "brandId":"637f2419c20a3c656069cec9"
 
//      },
//      {
//         "picture":"https://ibb.co/bz8kTys",
//         "name":"Samsung32 inch",
//         "Brand":"Samsung",
//         "location":"Dhaka",
//         "ResatePrice":15000,
//         "OriginalPrice":50000,
//         "yearsOfUse":5,
//         "postTime":"125265656",
//         "sellerName":"Muhib",
//         "verified":false,
//         "condition":"good",
//         "mobile":"01749958965",
//         "discription":"My name is Muhibbvvbvbc",
//         "purchaseYear":"2017",
//         "brandId":"637f2419c20a3c656069cec7"
 
//      },
//      {
//         "picture":"https://ibb.co/bz8kTys",
//         "name":"Samsung 50 inch",
//         "Brand":"Samsung",
//         "location":"Dhaka",
//         "ResatePrice":15000,
//         "OriginalPrice":50000,
//         "yearsOfUse":5,
//         "postTime":"125265656",
//         "sellerName":"Muhib",
//         "verified":false,
//         "condition":"good",
//         "mobile":"01749958965",
//         "discription":"My name is Muhibbvvbvbc",
//         "purchaseYear":"2017",
//         "brandId":"637f2419c20a3c656069cec7"
 
//      },
//     {
//         name:'Sony',
//         picture:'https://ibb.co/bz8kTys' 
//     },
//     {
//         name:'LG',
//         picture:'https://ibb.co/w4V0RBF'  
//     }
// ];

const Products = () => {
    // const {user}=useContext(UserContext);
    // console.log(user);
const [productData,setProductdata]=useState({});
const [user,setUser]=useState([]);

    const products=useLoaderData();
    const handleBookProduct=(productInfo,userInfo)=>{
        setProductdata(productInfo);
        setUser(userInfo);
        // console.log(userInfo);

    }
  
    return (
        <div>
           <h2 className='text-center'>All product of {products? products[0].brand :'No name'}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
{
    products.map(product=><ProductItem key={product._id} product={product} handleBookProduct={handleBookProduct}></ProductItem>)
}
            </div>

<BookingModals productData={productData} user={user}></BookingModals>






        </div>
    );
};

export default Products;