import React, { useState } from "react"
import styles from "./SelectItem.module.css"
import classNames from 'classnames'
const cx = classNames.bind(styles)

interface iSelectItem {
    item: String;
    index: number;
}

export const SelectItem = ({item, index}:iSelectItem) => {

    const [isSelected,setIsSelected] = useState<Boolean>(false);

    const itemClasses = cx({
        [styles.btn_default]: true,
        [styles.btn_selected]: isSelected
    })

    return <button key={index}
    onClick={()=>{setIsSelected(!isSelected)}} 
    className={itemClasses}
    >{item}</button>
}