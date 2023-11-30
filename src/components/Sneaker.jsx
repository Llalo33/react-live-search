import React, { useState } from "react";
import styles from "./Sneaker.module.css"
import { fakeCardsInfo } from "../fakeCardsInfo";
import SneakerBas from "./SneakerBas";

const Sneaker = () => {

   const [sneaker, setSneaker] = useState(fakeCardsInfo)
   const [value, setValue] = useState('')

   const handleSearch = (event) => {
   setValue(event.target.value);
    setSneaker(fakeCardsInfo.filter((item)=> item.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

   return (
    <div className={styles.container}>
        <div className={styles.input}>
            <input placeholder="Введите название..." onChange={(e)=> handleSearch(e)}></input>
        </div>
        <div className={styles.mapCart}>
            {sneaker.map((item, index) => <SneakerBas key={index} img={item.image} price={item.price} name={item.name}/>)}
        </div>
    </div> 
    )
}

export default Sneaker





