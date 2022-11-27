import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { UserContext } from '../../AuthContext/AuthContext';

const MyProducts = () => {
    const {user}=useContext(UserContext);
console.log(user.email);
const {data:myProducts=[]}=useQuery({
    queryKey:['orders',user?.email],
    queryFn:async()=>{
        const res=await fetch(`http://localhost:5000/myproducts?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('user-token')}`
                
            }
        })
        const data=res.json()
        return data;
    }
})
console.log(myProducts);
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
                  <button className="btn btn-warning">Delete</button>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
                <th>
                  <button className="btn btn-warning">Advertise</button>
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