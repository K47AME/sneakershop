import React from "react";

export default function Drawer({onCloseCart, items=[]}) {
    return (
        <div className="cart-drawer-overlay">
            <div className="drawer">
                <h2 className="d-flex align-center justify-between">
                    Корзина
                    <svg
                        onClick={onCloseCart}
                        className="removeCartButton"
                        width="26"
                        height="26"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.0799 10.6155L9.6311 8.16673L12.0798 5.71801C13.0241 4.77376 11.5596 3.30934 10.6154 4.25359L8.16668 6.70231L5.71787 4.2535C4.77384 3.30947 3.30947 4.77384 4.2535 5.71787L6.70231 8.16668L4.25359 10.6154C3.30934 11.5596 4.77376 13.0241 5.71801 12.0798L8.16673 9.6311L10.6155 12.0799C11.5597 13.0241 13.0241 11.5597 12.0799 10.6155Z"
                            fill="#B5B5B5"
                        />
                    </svg>
                </h2>
                <div className="cartItems">
                    {
                        items.map((obj) => (
                            <div className="cartItem d-flex align-center justify-around">
                                <img
                                    width={70}
                                    src={obj.imgURL}
                                    alt=""
                                />
                                <div className="cartItem__desc">
                                    <p>{obj.title}</p>
                                    <span>{obj.price} тг.</span>
                                </div>
                                <div className="cartItem__btn">
                                    <img
                                        src="/sneakershop/img/icons/x.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итог:</span>
                            <div></div>
                            <b>26 200 тг.</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1 200 тг.</b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}
