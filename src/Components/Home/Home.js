import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryItems from '../CategoryItems/CategoryItems';
import Advertisement from '../Advertisement/Advertisement';
import { UserContext } from '../AuthContext/AuthContext';

// const category=[
//     {
//         name:'Samsung',
//         picture:'https://ibb.co/5KY05TK'
//     },
//     {
//         name:'Sony',
//         picture:'https://ibb.co/bz8kTys' 
//     },
//     {
//         name:'LG',
//         picture:'https://ibb.co/w4V0RBF'  
//     }
// ];

const Home = () => {
const {user}=useContext(UserContext);
    const info={
        email:user?.email
       };
//Category data here...
const {data:categories=[],refetch}=useQuery({
    queryKey:['options'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/category')
        const data=await res.json()
        return data;

    }
})


const {data:adds=[]}=useQuery({
    queryKey:['adds'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/advertisement')
        const data=await res.json()
        return data;

    }
})
// console.log(adds);
const varifiedSellerProduct=(email)=>{
    fetch('http://localhost:5000/varifiedSellerProduct', {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        authorization:`bearer ${localStorage.getItem('user-token')}`,
      },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        if(data.acknowledged){
          refetch();
     

        }
       
      
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });



  }

  varifiedSellerProduct(info);

    return (
   <div >
         <div>
             <h1 className='text-center'>All used Tv products category</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
                {
                    categories.map(cat=><CategoryItems key={cat._id} cat={cat}></CategoryItems>)
                }
                </div> 
            </div>
            <div >
            {
                !adds.length?
                <>
                </>
                :
                <div>
                       <div>
                <h2 className='text-center text-red-500 text-4xl my-10'>Advertisemnet</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2  '>
                {
                    adds.map(add=><Advertisement key={add._id} add={add}></Advertisement>)
                }
            </div>
                </div>
             

            }
            </div>
            
            
        </div>
   
    );
};

export default Home;