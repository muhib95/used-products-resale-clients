import React, { useContext } from 'react';
import { UserContext } from '../AuthContext/AuthContext';
import very from '../../acc/vary.png'







const ProductItem = ({product,handleBookProduct}) => {
const {user}=useContext(UserContext);
// console.log(user);
    const {_id,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brand,postDate,sellerEmail}=product;
    // console.log(_id,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brandId,brand);
    const reportProduct={
      itemId:_id,
      itemName:name,
      sellerName:sellerName,
      sellerEmail:sellerEmail

    }

const handleReportedItem=(reportProduct)=>{
  fetch('http://localhost:5000/reporttoadmin', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
    authorization:`bearer ${localStorage.getItem('user-token')}`
  },
  body: JSON.stringify(reportProduct),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })


}



    return (
        <div className='mt-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60' src={picture?picture:'no pic'} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name?name:'no name'}</h2>
    <p>{discription?discription:'no disc'}</p>
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <p>Original Price: {OriginalPrice?OriginalPrice:'no price'}</p>
    <p>ResalePrice Price: {resalePrice?resalePrice:'no reselPrice'}</p>
    <p>yearsOfUse: {yearsOfUse?yearsOfUse:'no info'}</p>
    <p>SellerName: {sellerName?sellerName:'no name'}</p>
    {
      verified?
      <img src={very} alt="" />
      :
      <>
      </>

    }
    
    <p>PurchaseYear: {purchaseYear?purchaseYear:'na'}</p>
    <p>PostTime: {postTime?postTime:'Na'}</p>
    <p>PostDate: {postDate?postDate:'Na'}</p>
    <p>Location: {location?location:'no location'}</p>
    <p>Condition: {condition?condition:'na'}</p>
    <p>Brand: {brand?brand:'na'}</p>
    <p>verified: {verified?'verified':'Not varified'}</p>
    <p>mobile: {mobile?mobile:'not found'}</p>
    </div>

    
    <div className="card-actions justify-around">
      <label onClick={()=>handleBookProduct(product,user?user:'no user')} htmlFor="booking" className="btn btn-primary">Buy Now</label>
      <button onClick={()=>handleReportedItem(reportProduct)} className='btn btn-warning'>Report</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductItem;