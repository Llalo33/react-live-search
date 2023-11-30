import React, {useState} from "react";
import styles from "./SneakerBas.module.css"

const SneakerBas = ({img, name, price}) => {

    const [detal, setDetal] = useState(false);
    const [cart, setCart] = useState(false)

    const handleClickOpen1 = () => {
      setDetal(true)
    }
  
    const handleClickClose = () => {
      setDetal(false)
    }

    const handleClickOpen = () => {
        setCart(true)
    }

    const handleClickRemove = () => {
        setCart(false)
    }

    return (
        <div className={styles.vertical_cards}>
            <div className={styles.header}>
               <img className={styles.logo} src={img}></img>
            </div>
        <div className={styles.cartBody}>
      <div className={styles.name}>
        <div className={styles.descrip}>
            <p>{name}</p>
            <p>{price}</p>
        </div>
      </div>
      <div className={styles.button}>
        <button className={styles.openInfo} onClick={handleClickOpen1}>Детали</button>
        {detal && (
          <div className={styles.info}>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              vel numquam deleniti quis eaque culpa totam nobis doloribus dolor.
            </h5>
            <button className={styles.closeBtn} onClick={handleClickClose}>X</button>
          </div>
          
        )}
      </div>
    </div>
    <div className={styles.footer}>
            <hr />
            <div className={styles.name}>
                <div className={styles.loremName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloremque dolores sit, necessitatibus sunt maiores soluta excepturi molestiae u</div>
            </div>
            <div className={styles.cart}>
                <button className={cart ? styles.cartRemoveButton : styles.cartButton} onClick={handleClickOpen}>{cart ? 'Уже добавлен' : 'Добавить в корзину'}</button>
                {cart && (
                    <div className={styles.cartRemove}>
                        <p onClick={() => handleClickRemove(detal.id)}>Удалить из корзины</p>
                    </div>   
                )}
            </div>
        </div>
        </div>
    )
}

export default SneakerBas