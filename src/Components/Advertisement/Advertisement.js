import React from 'react';

const Advertisement = ({add}) => {
    const {name,picture,mobile}=add;
    console.log(add);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If you want discount? Call {mobile}</p>
    
  </div>
</div>
        </div>
    );
};

export default Advertisement;