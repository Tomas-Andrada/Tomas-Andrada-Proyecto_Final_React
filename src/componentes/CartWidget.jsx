  import { useContext } from "react";
  import { CartContext } from "./CartContext";
  import { Link } from "react-router-dom";

  export const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    
    return (
      <div className="CartContainer">
      <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <i>🛒</i>
        {totalQuantity} 
      </Link>
    </div>
    );
  }