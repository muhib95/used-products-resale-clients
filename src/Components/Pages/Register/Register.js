import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const Register = () => {
    const {userRegister,updateUser}=useContext(UserContext);
    
    const { register, handleSubmit } = useForm();
    const imageHostKey=process.env.REACT_APP_imgbb_key;
 


    const onSubmit=(data)=>{
        // const name=data.name;
        const email=data.email;
        const password=data.password;
        const role=data.role;
        // console.log(data.email,data.password);
        const image=data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
  method: 'POST',
  body: formData
})
  .then((response) => response.json())
  .then((result) => {
    if(result.success){
        // const imageUrl=result.data.url;
        // console.log(result.data.url);
        userRegister(email,password)
        // console.log(name,imageUrl)
        
        .then((userCredential) => {
          const userInfo={
            displayName:data.name,
            photoURL:result.data.url
        }
        updateUser(userInfo)
            .then(() => {
              addUsers(data.name,data.email,result.data.url,role)
                
            
              }).catch((error) => {
               
              });
        
          
            console.log(userCredential);
          })
          .catch((error) => {
          console.error(error);
          });
        
        
    }

  })

    
   
    }

    const addUsers=(userName,userEmail,userPhoto,userRoles)=>{
     const user={
      userName,
      userEmail,
      userPhoto,
      userRoles};
     fetch('http://localhost:5000/users', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
       
      //   getUserToken(email);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });

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
<input type="file" className="input input-bordered w-full max-w-xs" {...register("image")} placeholder="Your photo"/>

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Password</span>
</label>
<input type="password" className="input input-bordered w-full max-w-xs" {...register("password",{ required: "Password is required" },{ minLength: { value: 6, message: "Password must br six" } })} placeholder="Type here"/>
{/* {errors.password && <p role="alert">{errors.password?.message}</p>} */}
</div>

<select typeof='role' {...register("role")} className="select select-bordered w-full max-w-xs mt-3">
  
  
    <option defaultValue={'user'}>user</option>
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