import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryItems from '../CategoryItems/CategoryItems';
import Advertisement from '../Advertisement/Advertisement';


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


const {data:adds=[]}=useQuery({
    queryKey:['adds'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/advertisement')
        const data=await res.json()
        return data;

    }
})
// console.log(adds);

 

 

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