import { useSelector, useDispatch  } from "react-redux";
import { clearCart } from "../store/cartSlice";


const Cart = () => {
    const dispatch = useDispatch() ;
    const cartItem = useSelector((state) => state.cart.items)
    const handleClearCart = () => {
         
        dispatch(clearCart())
    }

    return (
        <div className=" text-xl text-center m-6">
            Cart
            <div className="w-6/12 m-auto">
            <button onClick={handleClearCart} className="text-white bg-black p-2 rounded-lg m-4 ">Clear Cart</button>
            
            </div>
        </div>
    )
    
}

export default Cart;