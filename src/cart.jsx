import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item, i) => (
            <div
              key={i}
            >
              <div>
                <p className="font-bold">{item.name}</p>
                <p>${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(i)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <p className="font-bold mt-2">Total: ${total}</p>

          <Link
            to="/checkout"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-fit"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}
