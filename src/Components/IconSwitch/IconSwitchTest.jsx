import { createRef, useRef, useState } from "react";
import React from "react";

function Store() {
    let [state, setState] = useState([]);
    const myRef = useRef();

    const f1 = () => {
        let value = myRef.current.value;

        // state.push(value)
        // setState(state);
        setState([...state, value])
        console.log('function')
    }

    console.log('text')

    return (
        <>
            <h1>{state}</h1>
            <input type="text" ref={myRef}/>
            <button onClick={f1}>Press</button>
        </>
    )
}

export default Store;

export default function App() {
    const [viewMode, setViewMode] = useState('cards')
  
    const toggleMode = () => {
      setViewMode(viewMode === 'cards' ? 'rows' : 'cards')
    }
  
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <button className={viewMode==='cards' ? 'list' : 'cards'} onClick={toggleMode}></button>
        <List viewMode={viewMode} />
      </div>
    );
  }