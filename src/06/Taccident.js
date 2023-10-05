import dataTaccident from './dataTaccident.json'
import TaccidentNav from './TaccidentNav';
import Hh1 from "../comm/Hh1"
import { useEffect, useState } from 'react';

const Taccident = () => {
    //오브젝트 값 가져오기
    const tdata = dataTaccident.data; // data['data']
    //console.log(tdata);

    //대분류
    //배열 순회
    let c1 = tdata.map((item) => {  // item is (k , v)
        //console.log(item.사고유형_대분류);
        return item.사고유형_대분류;
    });

    c1 = [...new Set(c1)];
    //console.log("c1", c1);

    //대분류 선택
    const [sel1, setSel1] = useState();

    //중분류
    const [c2, setC2] = useState();

    //중분류 선택
    const [sel2, setSel2] = useState();

    //선택항목
    const [divTag, setDivTag] = useState();

    //중분류 선택
    useEffect(() => {

        if (!sel1) {
            return
        }

        console.log("대분류선택", sel1);

        let temp = tdata.filter((item) =>  // object
            item.사고유형_대분류 === sel1
        );
        temp = temp.map((item) => item.사고유형_중분류)
        
        console.log("중뷴류", temp);
        setC2(temp);
        setSel2(); // 돌아갈시 초기화
        setDivTag();  // 돌아갈시 초기화

    }, [sel1]);

    //선택항목
    useEffect(() => {

        if (!sel2) {
            return
        }

        console.log("중분류선택", sel2);
        let temp = tdata.filter((item) =>  // object
            item.사고유형_대분류 === sel1 && item.사고유형_중분류 === sel2
        );
        console.log("선택항목", temp[0]);

        temp = temp[0];


        // temp = Object.keys(temp).map((item, idx) => 
        //         <div key={`d${idx}`}>{item} : {temp[item]}</div>
        // );

        let k = Object.keys(temp).filter((item) =>
            (item != '사고유형_대분류' && item != '사고유형_중분류'));

        console.log('k', k);

        temp = k.map((item, idx) =>
            <div key={`d${idx}`}>{item} : {temp[item]}</div>
        );

        // temp = temp.map((item, idx) =>
        //     <div className='grid'>
        //         <span key={`span${idx}`}> 경상자수 : {item.경상자수} </span>
        //         <span key={`span${idx}`}> 부상신고자수 : {item.부상신고자수} </span>
        //         <span key={`span${idx}`}> 사고건수 : {item.사고건수} </span>
        //         <span key={`span${idx}`}> 사망자수 : {item.사망자수} </span>
        //         <span key={`span${idx}`}> 중상자수 : {item.중상자수} </span>
        //     </div>

        // )

        setDivTag(temp);

    }, [sel2]);




    return (
        <main className='container'>
            <article>
                <Hh1 title='유형별 교통사고' />
                <TaccidentNav title="교통사고 대분류" c={c1} sel={sel1} setSel={setSel1} />
                {c2 && <TaccidentNav title="교통사고 중분류" c={c2}  sel={sel2} setSel={setSel2} />}
                <div className='grid'>
                    {divTag}
                </div>
            </article>
        </main>
    );
};

export default Taccident
