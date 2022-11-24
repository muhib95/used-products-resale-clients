import React from 'react';

const BookingModals = ({productData,user}) => {
    // const {displayName,email}=user;
    return (
        <div>
            
           <input type="checkbox" id="booking" className="modal-toggle" />
           
<div className="modal">
  <div className="modal-box">
  <form >
  

    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Type name" className="input input-bordered w-full max-w-xs" />
    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Type email" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='product' type="text" defaultValue={productData?.name} disabled placeholder="Type price" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='price' type="text" defaultValue={productData?.resalePrice} disabled placeholder="Type price" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='phone' type="text" placeholder="Type phone" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='location' type="text" placeholder="Type location" className="input input-bordered w-full max-w-xs mt-3" />
    <button className="btn btn-primary block mt-4">Submit</button>

    </form>
   
    <div className="modal-action">
      <label htmlFor="booking" className="btn">Yay!</label>
    </div>
  </div>
</div> 
        </div>

    );
};

export default BookingModals;