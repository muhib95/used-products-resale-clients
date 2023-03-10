import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const MyOrders = () => {

const {user}=useContext(UserContext);
console.log(user.email);
const {data:orders=[]}=useQuery({
    queryKey:['orders',user?.email],
    queryFn:async()=>{
        const res=await fetch(`https://b612-used-products-resale-server-side-muhib95.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('user-token')}`
                
            }
        })
        const data=res.json()
        return data;
    }
})

console.log(orders);
    return (
        <div>
            <h2>My orders</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
          
            orders.map(order=>  <tr key={order._id}>
        
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={order.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      {/* <div className="font-bold">{order.product}</div> */}
                     
                    </div>
                  </div>
                </td>
                <td>
                {order.product}
                  <br/>
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
                <td>{order.price}</td>
                <th>
                  <Link to={`/dashboard/payment/${order.productId}`} className="btn btn-warning">Pay</Link>
                  {/* <button className="btn btn-success">Paid</button> */}
                </th>
              </tr>)
        }
     
    
      
  
      
      
      

    </tbody>
    

    
  </table>
</div>
        </div>
    );
};

export default MyOrders;