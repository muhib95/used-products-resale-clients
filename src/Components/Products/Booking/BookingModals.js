import React from 'react';

const BookingModals = ({productData,user}) => {
    // const {displayName,email}=user;

    const handleForm=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const product=form.product.value;
        const price=form.price.value;
        const phone=form.phone.value;
        const location=form.location.value;
        // console.log(name,email,product,price,phone,location);
        // window.location.reload(false);
        const bookinInfo={
            name,
            email,
            product,
            price,
            phone,
            location,
            productId:productData._id,
            image:productData.picture
        };
      
        fetch('http://localhost:5000/booking', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookinInfo),
          })
            .then((response) => response.json())
            .then((data) => {
          
              console.log('Success:', data);
              if(data.acknowledged){
                alert('Booking success')
                window.location.reload(false);
              }
              else{
                alert(data.message);
                window.location.reload(false);
              }
              
            })


    }
    return (
        <div>
            
           <input type="checkbox" id="booking" className="modal-toggle" />
           
<div className="modal">
  <div className="modal-box">
  <form onSubmit={handleForm}>
  

    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Type name" className="input input-bordered w-full max-w-xs" />
    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Type email" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='product' type="text" defaultValue={productData?.name} disabled placeholder="Type price" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='price' type="text" defaultValue={productData?.resalePrice} disabled placeholder="Type price" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='phone' type="text" placeholder="Type phone" className="input input-bordered w-full max-w-xs mt-3" />
    <input name='location' type="text" placeholder="Type location" className="input input-bordered w-full max-w-xs mt-3" />
    <button htmlFor="booking" className="btn btn-primary block mt-4">Submit</button>

    </form>
   
    <div className="modal-action">
      <label htmlFor="booking" className="btn">Cancel</label>
    </div>
  </div>
</div> 
        </div>

    );
};

export default BookingModals;