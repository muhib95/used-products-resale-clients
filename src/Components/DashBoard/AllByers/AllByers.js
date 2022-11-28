import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllByers = () => {
    const {data:allBuyers=[],refetch}=useQuery({
        queryKey:['allBuyers'],
        queryFn:async()=>{
            const res=await fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/dashboard/allbuyers',{
                headers:{
                    authorization:`bearer ${localStorage.getItem('user-token')}`
                    
                }
            })
            const data=res.json()
            return data;
        }
    })
    const deleteBuyer=(id)=>{
      console.log(id);
  fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/sellerdelete/${id}`, {
    method: 'delete', // or 'PUT'
    headers: {
      authorization:`bearer ${localStorage.getItem('user-token')}`,
    },
   
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
     
      if(data.deletedCount>0){
          alert('Delete your reported product');
          refetch();
         
  
      }
    })
    }
    console.log(allBuyers);
    return (
        <div>
             <div>
            <h2>All Buyers</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Email</th>
        <th></th>
        <th>Delete</th>
        
       
      </tr>
    </thead>
    <tbody>
        {
          
          allBuyers.map(buyer=>  <tr key={buyer._id}>
        
                <td>
                  
                      {buyer.userName}
                        {/* <img src={seller.userName} alt="Avatar Tailwind CSS Component" /> */}
                     
                      {/* <div className="font-bold">{order.product}</div> */}
                     
                  
                </td>
                <td>
                {buyer.userEmail}
                  <br/>
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td></td>
                <th>
                  <button onClick={()=>deleteBuyer(buyer._id)} className="btn btn-warning">Delete</button>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
                
              </tr>)
        }
     
    
      
  
      
      
      

    </tbody>
    

    
  </table>
</div>
        </div> 
        </div>
    );
};

export default AllByers;