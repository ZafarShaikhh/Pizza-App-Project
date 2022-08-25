import { useState } from "react";
import Cart from "./component/cart/Cart";
import Header from "./component/Header";
import Pizza from "./component/pizza/Pizza";
import { CartProvider } from "./store/Cart-Context";

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  };

  const hideCartHandler=()=>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Pizza />
      </main>
      </CartProvider>
  );
}

export default App;
