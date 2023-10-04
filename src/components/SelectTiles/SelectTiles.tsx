import React, {useState, useEffect} from 'react'

import styles from "./SelectTiles.module.css"
import { SelectItem } from './SelectItem/SelectItem';


interface iSelectTiles {
    items : String[];
}

export const SelectTiles = ({items}:iSelectTiles) => {
    return (
        <div className={styles.wrapper}>
            {items.map((item, index) => {
                return <SelectItem index={index} item={item}/>
            })}
        </div>
    )
}