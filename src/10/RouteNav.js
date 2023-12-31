import React from 'react'
import { Link } from 'react-router-dom'

const RouteNav = () => {
    return (
        <nav>
            <ul>
                <li><strong>라우팅연습</strong></li>
            </ul>
            <ul>
                <li><Link to="/" role='button'>Home</Link></li>
                <li><Link to="./page1" role='button'>page1</Link></li>
                <li><Link to="./page2" role="button">Page2</Link></li>
            </ul>
        </nav>
    )
}

export default RouteNav
