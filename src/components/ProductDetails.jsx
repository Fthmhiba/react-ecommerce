import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../Contexts/ProductContext';
import { CartContext } from '../Contexts/CartContext';
import { AuthContext } from '../Contexts/AuthContext';

const ProductDetails = () => {
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const { productId } = useParams();
    const navigate = useNavigate();


    const product = products.find(p => p.id === parseInt(productId));

    if (!product) return <p className="text-center text-amber-600">Product not found</p>;

    const handleAddToCart = () => {
        if (user) {
          addToCart({ ...product, quantity: 1 });
        } else {
          navigate('/login', { state: { from: `/product/${productId}` } });
        }
      };
    return (
        <>
            <Link to={"/"}> <p className=' hover:shadow transition w-10 p-1 rounded text-amber-700'>Back </p> </Link>

            <div className="max-w-4xl mx-auto p-6">
                <div className="flex flex-col md:flex-row items-center  bg-amber-200 md:items-start rounded shadow hover:shadow-lg transition p-2  ">
                    <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mb-4 md:mb-0 md:mr-8" />
                    <div>
                        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <p className="text-2xl font-semibold text-green-600 mb-4">${product.price}</p>
                        <button
                            onClick={handleAddToCart}
                            className="bg-amber-800 hover:bg-amber-700 text-white px-6 p-2 rounded shadow hover:shadow-lg transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
