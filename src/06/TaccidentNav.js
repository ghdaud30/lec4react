import dataTaccident from './dataTaccident.json'
import { useEffect, useState } from 'react';


const TaccidentNav = ({ title, c, setSel }) => {

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

    const handleClick = (k) => {
        setSel(k);
        setSelectedButtonIndex(k);
    }


    const liTag = c.map((item, idx) =>
        <li key={`li${idx}`}><button onClick={() => handleClick(item)}
            style={{
                backgroundColor: selectedButtonIndex === idx ? 'red' : 'transparent'
            }}>
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
