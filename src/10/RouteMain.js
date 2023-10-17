import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RouteHome from './RouteHome'
import RoutePage1 from './RoutePage1'
import RoutePage2 from './RoutePage2'
import RouteNav
from './RouteNav'
const Routemain = () => {
    return (
        <BrowserRouter>
            <main className='container'>
                    <h1 className='text-2xl font-bold text-pink-700mx-5 my-10 text-center'>react-router-dom으로 라우팅</h1>
            <RouteNav/>
                <Routes>
                    <Route path='/' element = {<RouteHome />}/>
                    <Route path='/page1/:item' element = {<RoutePage1 />}/>
                    <Route path='/page2' element = {<RoutePage2 />}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default Routemain
