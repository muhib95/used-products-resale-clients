import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryItems from '../CategoryItems/CategoryItems';

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


//Category data here...
const {data:categories=[]}=useQuery({
    queryKey:['options'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/category')
        const data=await res.json()
        return data;

    }
})
console.log(categories);

    return (
   <div>
         <div>
             <h1 className='text-center'>All used Tv products category</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
                {
                    categories.map(cat=><CategoryItems key={cat._id} cat={cat}></CategoryItems>)
                }
              
               
           
                </div> 
              
             
               
            </div>
        </div>
   
    );
};

export default Home;