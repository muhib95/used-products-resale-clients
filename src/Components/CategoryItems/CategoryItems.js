import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItems = ({cat}) => {
    const {_id,name,picture}=cat;
    console.log(cat);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl h-56" />
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title">{name}</h1>
          <p>Buy Used Tv which brand you want!!</p>
          <div className="card-actions">
            <Link className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    );
};

export default CategoryItems;