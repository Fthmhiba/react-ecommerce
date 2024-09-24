import React, { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, updateCart, removeFromCart } = useContext(CartContext);

    if (cart.length === 0) return <p className="text-center text-xl mt-10">Your cart is empty</p>;

    return (
        <>

            <Link to={"/"}> <p className='text-amber-700 hover:shadow transition w-10 p-1 rounded'>Back </p> </Link>
            <div className="max-w-4xl mx-auto p-6">

                {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between rounded p-4 border-b bg-amber-200">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                        <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
                            min="1"
                            className="w-16 p-1 border rounded"
                        />
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-amber-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                            Remove
                        </button>
                    </div>
                ))}
                <div className="text-right mt-6 ">
                    <h2 className="text-2xl border-b-2 border-amber-600  font-bold">
                        Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Cart;
