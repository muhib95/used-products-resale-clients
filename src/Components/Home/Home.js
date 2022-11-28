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
    <section className="py-6 bg-violet-400 text-gray-900">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Welcome to Our shop!!</h1>
		<p className="pt-2 pb-8 text-xl font-medium text-center">Choose from over 4,500 items that can be delivered to your doorstep. Order online and enjoy our Buyer Protection program, which means that we’ll replace the item for FREE if it’s not as described in the ad!</p>
		<button className="px-8 py-3 text-lg font-semibold rounded bg-gray-800 text-gray-50">Learn more</button>
	</div>
</section>
    </div>
         <div className='my-4'>
             <h1 className='text-center text-cyan-400 text-2xl'>All used Tv products category</h1>
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
                <div className='my-3'>
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
            <div>
            <section className="p-6 text-gray-100">
	<form  className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">Send</button>
		</div>
	</form>
</section>
            </div>
            
            
        </div>
   
    );
};

export default Home;