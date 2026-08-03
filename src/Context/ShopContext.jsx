import { createContext, useContext, useEffect, useState } from "react";
import products from "../Data/Products";

const ShopContext = createContext(null);

export const parsePrice = (price) => {
  if (typeof price === "number") return price;
  return Number(String(price).replace(/[^0-9.]/g, "")) || 0;
};

const loadFromStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => loadFromStorage("aura-cart", []));
  const [wishlist, setWishlist] = useState(() =>
    loadFromStorage("aura-wishlist", [])
  );
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("aura-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("aura-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId) =>
    wishlist.some((item) => item.id === productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const getProductById = (id) =>
    products.find((item) => item.id === Number(id));

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartTotal,
        getProductById,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }
  return context;
};
