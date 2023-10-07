import React from "react";
import styles from './Button.css'

export function Button({onClick, label}){

  const styleButton = styles.add;

  return(
    <>
    <button style={styleButton} onClick={onClick}>{label}</button>
    </>
  )
}