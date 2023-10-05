import dataTaccident from './dataTaccident.json'
import { useEffect, useState } from 'react';
import './taccident.css'


const TaccidentNav = ({ title, c, sel, setSel }) => {

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleClick = (k) => {
        setSel(k);
        setSelectedButtonIndex(k);
    }


    const liTag = c.map((item, idx) =>
        <li key={`li${idx}`}><button onClick={() => handleClick(item)}
        className={item === sel ? "bt1" : "bt2"}>
            {item}</button></li>);

    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

export default TaccidentNav
