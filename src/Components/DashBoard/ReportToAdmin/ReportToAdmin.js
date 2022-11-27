import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportToAdmin = () => {
  const {data:reportProducts=[],refetch}=useQuery({
    queryKey:['orders'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/dashboard/reporttoadmin',{
            headers:{
                authorization:`bearer ${localStorage.getItem('user-token')}`
                
            }
        })
        const data=res.json()
        return data;
    }
})

const deleteReportProduct=(id)=>{
  console.log(id);
  fetch(`http://localhost:5000/reporttoadminproduct/${id}`, {
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
          alert('Delete your reported product')
         
  
      }
    })
   
  }


    return (
  <div>
    <div>
            <h2>My orders</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
      
        
        <th>Title</th>
        
        <th>Delete product</th>
      </tr>
    </thead>
    <tbody>
        {
          
            reportProducts.map(reportProduct=>  <tr key={reportProduct._id}>
        
              
                <td>
                {reportProduct.itemName}
                  <br/>
                  {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                </td>
             
                <th>
                  <button onClick={()=>deleteReportProduct(reportProduct.itemId)} className="btn btn-warning">Delete</button>
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

export default ReportToAdmin;