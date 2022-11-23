import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit=(data)=>{
        console.log(data);

    
   
    }
    return (
        <div>
             <div className='h-[800px]  flex justify-center items-center'>
         <div className='w-85'>
         <h2 className='text-3xl'>Register</h2>
         <form onSubmit={handleSubmit(onSubmit)}>

         <div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Name</span>
</label>
<input type="name" className="input input-bordered w-full max-w-xs" {...register("name",{ required: "Email Address is required" })} placeholder="Type here"/>

{/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Email</span>
</label>
<input type="email" className="input input-bordered w-full max-w-xs" {...register("email",{ required: "Email Address is required" })} placeholder="Type here"/>

{/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your photo</span>
</label>
<input type="text" className="input input-bordered w-full max-w-xs" {...register("image")} placeholder="Your photo"/>

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Password</span>
</label>
<input type="password" className="input input-bordered w-full max-w-xs" {...register("password",{ required: "Password is required" },{ minLength: { value: 6, message: "Password must br six" } })} placeholder="Type here"/>
{/* {errors.password && <p role="alert">{errors.password?.message}</p>} */}
</div>
{/* <select  className="select select-bordered w-full max-w-xs">
  <option defaultValue={'chosees'}  disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select> */}
<select typeof='useType' {...register("useType")} className="select select-bordered w-full max-w-xs mt-3">
  {/* <option  disabled>Choses one</option> */}
  
    <option defaultValue={'useer'}>user</option>
    <option >Seller</option>
  
  
</select>

<p className='mt-3'>Already Have an Account go to <span className="label-text text-blue-600"><Link to='/login'>LogIn</Link></span></p>


<input className="btn btn-active w-full mt-3" type="submit" />
</form>

         </div>
         
       
        </div>
        </div>
    );
};

export default Register;