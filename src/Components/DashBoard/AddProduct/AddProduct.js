import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const AddProduct = () => {
    const {user}=useContext(UserContext);
    let navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const sellerName=user.displayName || 'No name';
    const sellerEmail=user.email || 'no email';
    let date = new Date();
	let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    let time = new Date();
	let current_time = time.getHours()+":"+time.getMinutes()+":"+ time.getSeconds();
    const imageHostKey=process.env.REACT_APP_imgbb_key;
const  onSubmit=(data)=>{
    console.log(data);
    // const productInfo={
    // }
    const image=data.picture[0];
    // console.log(image)
    const formData = new FormData();
    formData.append('image', image);
    const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
    fetch(url, {
method: 'POST',
body: formData
})
.then((response) => response.json())
.then((result) => {
    const productInfo={
        OriginalPrice:data.OriginalPrice,
        mobile:data.Phone,
        brand:data.brand,
        category:data.catagory,
        condition:data.condition,
        location:data.location,
        name:data.name,
        resalePrice:data.resalePrice,
        yearsOfUse:data.useYear,
        picture:result.data.url,
        postTime:current_time,
        postDate:current_date,
        sellerName,
      sellerEmail,
        verified:false,
        discription:data.description,
        purchaseYear:data.pursesYear,
        add:false
        }
        if(result.success){
            addProduct(productInfo)
        }
    // console.log(result);
})

}


const addProduct=(pInfo)=>{
    fetch('http://localhost:5000/addProduct', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          if(data.acknowledged){
           
  alert('Product added');
  navigate('/dashboard/myproducts');
          }
         
        
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}
// console.log(brandId,OriginalPrice,yearsOfUse,verified,sellerName,resalePrice,purchaseYear,postTime,picture,name,mobile,location,discription,condition,brandId,brand);
    return (
        <div className='overflow-hidden'>
           <h2>Add product</h2>
           <div >
           <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Your Product Name</span>
                </label>
                <input type="productName" className="input input-bordered w-full max-w-xs" {...register("name",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>

                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Original Price</span>
                </label>
                <input type="OriginalPrice" className="input input-bordered w-full max-w-xs" {...register("OriginalPrice",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Discription</span>
                </label>
               
                <textarea type="description" className="textarea textarea-bordered" {...register("description",{ required: "Email Address is required" })} placeholder="Bio"></textarea>
                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>
               

                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Resale Price</span>
                </label>
                <input type="resalePrice" className="input input-bordered w-full max-w-xs" {...register("resalePrice",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Purses Year</span>
                </label>
                <input type="pursesYear" className="input input-bordered w-full max-w-xs" {...register("pursesYear",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>


                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Location</span>
                </label>
                <input type="location" className="input input-bordered w-full max-w-xs" {...register("location",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>

                <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Year of use</span>
                </label>
                <input type="useYear" className="input input-bordered w-full max-w-xs" {...register("useYear",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>




                <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your photo</span>
</label>
<input type="file" className="input input-bordered w-full max-w-xs" {...register("picture")} placeholder="Your photo"/>

</div>



            <div>
            <label className="label">
            <span className="label-text">Catagory</span>
            </label>
            <select typeof='brand' {...register("catagory",{ required: "Password is required" })} className="select select-bordered w-full max-w-xs mt-3">
            <option defaultValue={'Catagory'} disabled>Catagory</option>
            <option value="1">Samsung</option>
            <option value="2">Sony</option>
            <option value="3">Lg</option>


            </select>

            </div>

            <div>
            <label className="label">
            <span className="label-text">Brand Name</span>
            </label>
            <select typeof='brand' {...register("brand",{ required: "Password is required" })} className="select select-bordered w-full max-w-xs mt-3">
            <option defaultValue={'Brand Catagory'} disabled>Brand Catagory</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Lg">Lg</option>


            </select>

            </div>

            <div>
            <label className="label">
            <span className="label-text">Condition</span>
            </label>
            <select typeof='condition' {...register("condition",{ required: "Password is required" })} className="select select-bordered w-full max-w-xs mt-3">
            <option defaultValue={'Condition'} disabled>Condition</option>
            <option value="Excilent">Excilent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>


            </select>

            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Phone number</span>
                </label>
                <input type="Phone" className="input input-bordered w-full max-w-xs" {...register("Phone",{ required: "Email Address is required" })} placeholder="Type here"/>

                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                </div>





<input className="btn btn-active w-full mt-3 max-w-xs block" type="submit" />
</form>
           </div>
        </div>
    );
};

export default AddProduct;