import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";


function App() {
    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://6166e27d13aa1d00170a685b.mockapi.io/items').then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content">
                <div className="content__header d-flex align-center justify-between">
                    <h1 className="content__title">Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img
                            src="/sneakershop/img/icons/search.svg"
                            alt="search-icon"
                        />
                        <input placeholder="Поиск" type="text"/>
                    </div>
                </div>
                <div className="content__cards d-flex justify-between flex-wrap">
                    {items.map((item) => (
                        <Card
                            title={item.title}
                            price={item.price}
                            imgURL={item.imgUrl}
                            onLike={() => console.log('liked')}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
