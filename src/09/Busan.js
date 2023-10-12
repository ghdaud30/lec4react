import React from 'react'
import pusandata from './pusandata.json'
import ButtonBlue from '../comm/ButtonBlue';
import { useEffect, useRef, useState } from 'react';

const Busan = () => {

    //select box
    const sel = useRef();

    console.log(pusandata);

    let code = [];

    code = pusandata.map((item, idx) =>
        [item.콘텐츠ID, item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
    );
    console.log(code)
    const opTag = code.map((item) =>
        <option key={item[0]} value={item[1]}>{item[1]}</option>
    );


    const handleOk = (e,msg) => {
        e.preventDefault();
        console.log(msg);
    }

    const handleCancel = (e, msg) => {
        e.preventDefault();
        console.log(msg);
    }

    const handleChange = () => {
        console.log(sel.current.value);
    }

    useEffect(() => {
        sel.current.focus();
    },[]);

    return (
        <main className='container'>
            <article className="flex justify-between items-center">
                <h2 className='text-2xl font-bold'>부산축제정보</h2>
            </article>
            <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-2'>
                    <select ref = {sel} id='sel' name='sel' onChange={() => handleChange()}>
                        <option value =''>축제명을 선택하세요</option>
                        {opTag}
                    </select>
                </div>
                <div>
                    <ButtonBlue caption= '축제확인' handleClick={(e) => handleOk(e,'ok')}></ButtonBlue>
                </div>
                <div>
                    <ButtonBlue caption= '축제취소' handleClick={(e) => handleCancel(e,'cancel')}></ButtonBlue>
                </div>
                
            </div>
        </main>
    )

}

export default Busan