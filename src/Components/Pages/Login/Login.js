import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const Login = () => {
    let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

    const {userSignIn,googleLogIn}=useContext(UserContext);
    const provider=new GoogleAuthProvider();
    const { register, handleSubmit } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
        userSignIn(data.email,data.password)
        .then((userCredential) => {
           
                const email=userCredential.user.email
               

               loginVarification(email);
            // navigate(from, { replace: true });

            console.log(email);
          })
          .catch((error) => {
           console.error(error);
          });
   
    }


    const loginVarification=(email)=>{
        fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/jwt?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.token){
                localStorage.setItem('user-token',data.token);
                navigate(from, { replace: true }); 
            }
        })
    }

    const handleGoogle=()=>{
        googleLogIn(provider)
        .then((result) => {
        //     navigate(from, { replace: true });
         console.log(result.user.displayName,result.user.email,result.user.photoURL);
         const userInfo={
          userName:result.user.displayName,
          userEmail:result.user.email,
          userPhoto:result.user.photoURL,
          userRoles:'user',
          varified:false
         }
        //  const currentUser={
        //     email:result.user.email
        //    };
           googleIdUser(userInfo);
          //  googleVarificationJwt(currentUser);
          })
        //   .catch((error) => {
        //   console.error(error);
        //   });

    }

    const googleIdUser=(userInfo)=>{
      fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/users', {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          if(data.acknowledged){
            const currentUser={
                  email:userInfo.userEmail
                 };
            googleVarificationJwt(currentUser);
  
          }
         
        //   getUserToken(email);
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }

    const googleVarificationJwt=(currentUser)=>{
        fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/jwt',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(currentUser)
           })
           .then(res=>res.json())
           .then(data=>{
            localStorage.setItem('user-token',data.token)
            navigate(from, { replace: true });
            
             
          })
          .catch((error) => {
            console.error(error);
            });

    }




    return (
        <div>
              <div className='h-[800px]  flex justify-center items-center'>
         <div className='w-85'>
         <h2 className='text-3xl'>Log in</h2>
         <form onSubmit={handleSubmit(onSubmit)}>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Email</span>
</label>
<input type="email" className="input input-bordered w-full max-w-xs" {...register("email",{ required: "Email Address is required" })} placeholder="Type here"/>

{/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Your Password</span>
</label>
<input type="password" className="input input-bordered w-full max-w-xs" {...register("password",{ required: "Password is required" },{ minLength: { value: 6, message: "Password must br six" } })} placeholder="Type here"/>
{/* {errors.password && <p role="alert">{errors.password?.message}</p>} */}
</div>
<label className="label"><span className="label-text">Forget Password?</span></label>
<p >New user <span className="label-text"><Link to='/register'>Register</Link></span></p>


<input className="btn btn-active w-full" type="submit" />
</form>
<div className='divider'>OR</div>
<button className="btn btn-outline w-full " onClick={handleGoogle}>Google</button>
         </div>
         
       
        </div>
        </div>
    );
};

export default Login;