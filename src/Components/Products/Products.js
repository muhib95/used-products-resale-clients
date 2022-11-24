import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
    const products=useLoaderData();
    console.log(products);
    return (
        <div>
            products
        </div>
    );
};

export default Products;