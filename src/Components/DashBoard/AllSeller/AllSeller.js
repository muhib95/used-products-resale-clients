import { useQuery } from '@tanstack/react-query';
import React from 'react';


const AllSeller = () => {

    const {data:allseller=[],refetch}=useQuery({
        queryKey:['allseller'],
        queryFn:async()=>{
            const res=await fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/dashboard/allseller',{
                headers:{
                    authorization:`bearer ${localStorage.getItem('user-token')}`
                    
                }
            })
            const data=res.json()
            return data;
        }
    })



    const verifiedSeller=(sellerInfo)=>{
        console.log(sellerInfo.userEmail);
        const info={
            email:sellerInfo.userEmail
           };
        fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/seller', {
            method: 'PUT', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
              authorization:`bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(info),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              if(data.modifiedCount>0){
                varifiedSellerProduct(info);
             
      
              }
             
            
              
            })
            .catch((error) => {
              console.error('Error:', error);
            });


    }
    const varifiedSellerProduct=(email)=>{
      fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/varifiedSellerProduct', {
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
            alert('Seller Varified');
  
          }
         
        
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  
  
  
    }
   
    const deleteSeller=(id)=>{
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
      refetch();
      if(data.deletedCount>0){
          alert('Delete your reported product');
          refetch();
         
  
      }
    })
    }

   
    // const productUserVarified=()=>{

    // }

    // console.log(allseller);
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
                  <button onClick={()=>deleteSeller(seller._id)} className="btn btn-warning">Delete</button>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
                <th>
                    {
                        
                    seller.varified?
<button  className="btn btn-success">Verified</button>
:
<button onClick={()=>verifiedSeller(seller)}  className="btn btn-warning">Verify</button>

                    }
                  
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