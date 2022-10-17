import React, {useState} from 'react';
import { LayoutComponents } from '../LayoutComponents';
import './styles.css'



const PopUpCard = () => {

    const [email, setEmail] = useState("");
    return (
        <div className='popup-card'>
            <div>
                <h2 className="popup-title"> Crie um novo Cartão </h2>
            </div>
            

            <div className="wrap-popup-input">
                <input          
                className={email !== "" ? "has-val popup-input" : "popup-input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Digite o título"></span>
            </div>
        </div>
    );
};

export default PopUpCard;