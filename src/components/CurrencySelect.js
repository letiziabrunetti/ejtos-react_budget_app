import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {

    const { dispatch, currency } = useContext(AppContext);

    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (value) => {
        setNewCurrency(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });


    }

    return (
        <div className="form-floating mb-3" style={{ marginLeft: '2rem' }}>
        <select className="form-control" id="inputGroupSelect03" onChange={(event) => handleCurrencyChange(event.target.value)} style={{ background: '#66ff66', color: 'white' }}>
            <option defaultValue>Choose...</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="£">£ Ruppee</option>
        </select>
        <label for="inputGroupSelect03">Currency ({newCurrency})</label>
        </div>
    );
};
export default CurrencySelect;