import { Link } from "react-router-dom";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useShop } from "../../Context/ShopContext";

const CartDrawer = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
  } = useShop();

  if (!cartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={() => setCartOpen(false)}
      />

      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-[#181715] border-l border-zinc-800 z-[70] flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
          <h2 className="text-xl font-bold">
            Your Cart
            {cart.length > 0 && (
              <span className="ml-2 text-sm font-normal text-zinc-400">
                ({cart.length} {cart.length === 1 ? "item" : "items"})
              </span>
            )}
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 rounded-full hover:bg-zinc-800 transition text-zinc-400 hover:text-white"
            aria-label="Close cart"
          >
            <FiX size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                <span className="text-3xl">☕</span>
              </div>
              <p className="text-zinc-400 text-lg">Your cart is empty</p>
              <p className="text-zinc-500 text-sm mt-2">
                Add some delicious coffee to get started
              </p>
              <Link
                to="/shop"
                onClick={() => setCartOpen(false)}
                className="mt-8 px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition"
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl bg-[#22201E] border border-zinc-800"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setCartOpen(false)}
                      className="font-semibold hover:text-amber-500 transition truncate block"
                    >
                      {item.title}
                    </Link>
                    <p className="text-amber-500 font-bold mt-1">
                      {item.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="w-6 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateCartQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black flex items-center justify-center transition"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-zinc-500 hover:text-red-400 transition p-1"
                        aria-label="Remove item"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Subtotal</span>
              <span className="text-2xl font-bold text-amber-500">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-zinc-500">
              Shipping calculated at checkout
            </p>
            <button className="w-full py-4 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition">
              Checkout — ${cartTotal.toFixed(2)}
            </button>
            <Link
              to="/shop"
              onClick={() => setCartOpen(false)}
              className="block text-center text-sm text-zinc-400 hover:text-amber-500 transition"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
