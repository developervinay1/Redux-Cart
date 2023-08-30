import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../store/features/cartSlice.jsx";

export default function ProductCard() {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    return (
        <div className={"container mt-5"} >
            <div className={"row"}>
            {products.map((data) => {
                return (
                    <div className={"col-12 col-sm-6 col-md-3"} key={data.id}>
                        <div className="card">
                            <img src={data.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">Price: ₹{data.price}</p>
                                <button className="btn btn-primary" onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}