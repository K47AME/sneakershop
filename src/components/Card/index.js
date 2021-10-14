import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imgURL, price, onLike, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imgURL, price})
        setIsAdded(!isAdded)
    }


    return (
        <div className={styles.card}>
            <img
                className={styles.card__like}
                src="/sneakershop/img/icons/dislike.png"
                alt="unliked"
                onClick={onLike}
            />
            <img width={133} height={112} src={imgURL} alt=""/>
            <h5>{title}</h5>
            <div className={styles.card__bottom}>
                <div className={styles.card__bottom__price}>
                    <span className={styles.card__bottom__price__text}>Цена:</span>
                    <b className={styles.card__bottom__price__value}>{price} тг</b>
                </div>
                <img onClick={onClickPlus}
                     src={isAdded ? "/sneakershop/img/icons/added.svg" : "/sneakershop/img/icons/add.svg"}
                     alt="Add to cart icon"/>
            </div>
        </div>
    );
}

export default Card;
