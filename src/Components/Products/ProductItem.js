import React from 'react';








const ProductItem = ({product,handleBookProduct}) => {
    const {OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brand}=product;
    // console.log(_id,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brandId,brand);
    
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
    <p>PurchaseYear: {purchaseYear?purchaseYear:'na'}</p>
    <p>PostTime: {postTime?postTime:'Na'}</p>
    <p>Location: {location?location:'no location'}</p>
    <p>Condition: {condition?condition:'na'}</p>
    <p>Brand: {brand?brand:'na'}</p>
    <p>verified: {verified?'verified':'Not varified'}</p>
    <p>mobile: {mobile}</p>
    </div>

    
    <div className="card-actions justify-end">
      <label onClick={()=>handleBookProduct(product)} htmlFor="booking" className="btn btn-primary">Buy Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductItem;