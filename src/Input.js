import { useState } from "react";

const Input = () => {

    const [email, setEmail] = useState('');

    return(
        <div>
            <input
                type='text'
                // onChange делает связь из input в state
                // обязательно event
                onChange={(event) => { setEmail(event.target.value) }}
                // value делает связь из state в input
                value={email}
            />
            <button onClick={() => setEmail('')} style={{background: email}}>Clear</button>
        </div>
    )
}

export default Input;