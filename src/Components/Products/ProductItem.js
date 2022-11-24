import React from 'react';








const ProductItem = ({product}) => {
    const {_id,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brandId,brand}=product;
    // console.log(_id,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brandId,brand);
    return (
        <div className='mt-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{discription}</p>
    <div className='grid grid-cols-1 md:grid-cols-2'>
    <p>Original Price: {OriginalPrice}</p>
    <p>ResalePrice Price: {resalePrice}</p>
    <p>yearsOfUse: {yearsOfUse}</p>
    <p>SellerName: {sellerName}</p>
    <p>PurchaseYear: {purchaseYear}</p>
    <p>PostTime: {postTime}</p>
    <p>PostTime: {postTime}</p>
    <p>Location: {location}</p>
    <p>Condition: {condition}</p>
    <p>Brand: {brand}</p>
    <p>verified: {verified}</p>
    <p>mobile: {mobile}</p>
    </div>

    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductItem;