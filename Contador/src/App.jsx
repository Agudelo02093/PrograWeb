import React, {useState} from "react";
import {Header, Button, Counter, Footer} from "./components";

export function App(){
    const [counterValue, setValue] = useState(0);

    function counterNewValue(algo){
        const newValue = counterValue + algo;
        if (newValue >= 0) {
            setValue(newValue)
        }
    }
    return(
        <>
            <Header />
            <Counter value={counterValue}/>
            <Button type='substract' label='-' onClick={() => counterNewValue(-1)}/>
            <Button type='add' label='+' onClick={() => counterNewValue(+1)}/>
            <Footer />
        </>
    )
}