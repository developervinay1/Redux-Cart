import {addToCart, getCartTotal, removeItem} from "../store/features/cartSlice.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Cart() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.cart);
    const { totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );

    useEffect(() => {
        dispatch(getCartTotal())
    }, [products])

    if(products.length === 0) {
        return (
            <div className={"container mt-5"}>
                <h5 className={"text-center"}>No items in the cart <span> <Link to={"/"}>Shop Now</Link> </span> </h5>
            </div>
        )
    }

    return(
            <div className={"container mt-5"} >
                <h1 className={"text-center"}>Your Cart</h1>
                <div className={"row mt-5"}>
                    {products?.map((data) => {
                        return (
                            <div className={"col-12 col-sm-6 col-md-3"} key={data.id}>
                                <div className="card">
                                    <img src={data.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">Price: ₹{data.price}</p>
                                        <button className="btn btn-danger" onClick={() => dispatch(removeItem(data.id))}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className={"col-12 col-sm-6 col-md-3 mt-5"}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Total</h5>
                            <p className="card-text">Price: ₹{totalPrice}</p>
                            <button className="btn btn-dark">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}