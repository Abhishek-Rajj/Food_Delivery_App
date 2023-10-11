import {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
/* initial state is false*,curly bracket is used to show or express dynamic expressions*/
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
    /* the down line cartIsSHown and on close is like a conditionals statement like cartis hown is false  earlier so it  is true amd onclose will execute*/ 
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose= {hideCartHandler}/>}  
      <Header onShowCart= {showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
