import React, {useState} from 'react'

const Clicker = () => {
    const [count, setCount] = useState(0);
    // const [checked, setChecked] = useState(false);

    const plus = (x) => {
        setCount(count + x)
        // setChecked(!checked)
    }

    return(
        <>
            <button onClick={()=> plus(1)}>+</button>
                {count}
            <button  onClick={()=> plus(-1)}>-</button>
        </>
    )

}
export default Clicker