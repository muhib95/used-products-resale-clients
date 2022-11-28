import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';

const MyProducts = () => {
    const {user}=useContext(UserContext);
console.log(user.email);
const {data:myProducts=[],refetch}=useQuery({
    queryKey:['orders',user?.email],
    queryFn:async()=>{
        const res=await fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/myproducts?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('user-token')}`
                
            }
        })
        const data=res.json()
        return data;
    }
})
console.log(myProducts);

const deleteMyProduct=(id)=>{
console.log(id);
fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/myproducts/${id}`, {
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
        alert('Delete your product')
       

    }
  })
 
}


const productAdvertise=(id)=>{
    const info={
        id:id
       };
    fetch('https://b612-used-products-resale-server-side-muhib95.vercel.app/advertise', {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          if(data.modifiedCount>0){
            refetch();
          
  
          }
         
        
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });


}
    return (
        <div>
            <h1>My products</h1>
            <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>Product Name</th>
        <th>Available</th>
        <th>Price</th>
        <th>Delete</th>
        <th>Advertise</th>
      </tr>
    </thead>
    <tbody>
        {
          
            myProducts.map(order=>  <tr key={order._id}>
        
              
                <td>
                {order.name}
                  <br/>
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>
                    Available
                </td>
                <td>{order.resalePrice}</td>
                <th>
                  <button onClick={()=>deleteMyProduct(order._id)} className="btn btn-warning">Delete</button>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
                <th>
                    {
                        order.add?
                        <>
                        </>
                        :
                        <button onClick={()=>productAdvertise(order._id)} className="btn btn-warning">Advertise</button>

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

export default MyProducts;