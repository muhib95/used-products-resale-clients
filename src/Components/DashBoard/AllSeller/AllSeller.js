import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const {data:allseller=[]}=useQuery({
        queryKey:['allseller'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/dashboard/allseller',{
                headers:{
                    authorization:`bearer ${localStorage.getItem('user-token')}`
                    
                }
            })
            const data=res.json()
            return data;
        }
    })

    console.log(allseller);
    return (
        <div>
            <div>
            <h2>All Sellers</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>Name</th>
        <th>Email</th>
        <th></th>
        <th>Delete</th>
        <th>Varified</th>
       
      </tr>
    </thead>
    <tbody>
        {
          
          allseller.map(seller=>  <tr key={seller._id}>
        
                <td>
                  
                      {seller.userName}
                        {/* <img src={seller.userName} alt="Avatar Tailwind CSS Component" /> */}
                     
                      {/* <div className="font-bold">{order.product}</div> */}
                     
                  
                </td>
                <td>
                {seller.userEmail}
                  <br/>
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td></td>
                <th>
                  <button className="btn btn-warning">Delete</button>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
                <th>
                  <button className="btn btn-warning">Varified</button>
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

export default AllSeller;