import React from 'react'
import Hh1 from '../comm/Hh1'
import style from './Boxoffice.module.css'
import { useRef, useState, useEffect } from 'react';

const Boxoffice = () => {
    const title = '영화 박스오피스';

    //선택된 날짜
    const [cdt, setCdt] = useState();

    const [boxlist, setBoxlist] = useState();

    //날짜선택
    const dt = useRef();

    //컴포넌트 생성시 포커스
    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let y = `${yesterday.getFullYear()}`;
        let m = yesterday.getMonth() + 1 < 10 ? `0${yesterday.getMonth() + 1}`
            : `${yesterday.getMonth() + 1}`;
        let d = yesterday.getDay() < 10 ? `0${yesterday.getDay()}`
            : `${yesterday.getDay()}`;

        console.log("y + m + d",y + m + d);
        dt.current.value = `${y}-${m}-${d}`;
        setCdt(y + m + d);
        
    }, [])

    useEffect(() => {
        console.log("cdt",cdt);
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + `${cdt}`;
        console.log("url", url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err)); 
    }, [cdt])

    //날짜가 변경되었을때
    const handleChange = () => {
        let temp = dt.current.value;
        temp = temp.replaceAll('-', '');
        setCdt(temp);

    };

    return (
        <main className='container'>
            <Hh1 title={title}></Hh1>
            <article>
                <header>
                    <div className={style.dt}>날짜선택: {cdt}</div>
                    <form>
                        <input ref={dt} type='date' id='dt' name='dt' onChange={handleChange} />
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Boxoffice
