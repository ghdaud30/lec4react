import React from 'react'
import Hh1 from '../comm/Hh1'
import data from './dataTaccident.json'

const Taccident_copy = () => {
    console.log(data);
    console.log(data.data);

    let tdata = data.data;
    let c1 = [];

    c1 = tdata.map((item) => item["사고유형_대분류"]);
    console.log(c1);
    c1 = new Set(c1);   // 중복 제거
    console.log(c1);
    c1 = [...c1];       //다시 배열로 만듬   // c1 = [...new Set(c1)]
    console.log(c1);

    let c1Tag = c1.map((item,idx) => {
        return <li key={`li${idx}`}><button>{item}</button></li>
    });

    return (
        <main className=''>
            <article>
                <Hh1 title="도료교통공단_사고유형별 교통사고 통계" />
                <nav>
                    <ul>
                        <li><strong>교통사고 대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
            </article>
        </main>
    )
};

export default Taccident_copy
