import { useState } from "react";

import './Store.css'

import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView"

function Store({ products }) {
    let [state, setState] = useState('view_list');

    const handler = () => {
        setState(state === 'view_list' ? 'view_module' : 'view_list');
    }



    return (
        <>
            <IconSwitch icon={state} onSwitch={handler} />
            <div className="main">
                {state === 'view_module' ? <ListView items={products} /> : <CardsView cards={products} />}
            </div>
        </>
    )
}

export default Store;