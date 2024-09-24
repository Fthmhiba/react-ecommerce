import React, { useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products,"products");
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  p-6">
      {products.map(product => (
        <div key={product.id} className="border bg-amber-200 p-4 rounded shadow hover:shadow-lg transition">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} className="w-full h-48 rounded object-contain" />
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="mt-1 text-green-600 font-bold">${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
