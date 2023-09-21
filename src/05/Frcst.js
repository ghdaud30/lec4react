import Hh1 from "../comm/Hh1";
import data from "./dataFrcst.json";
import style from "./Frcst.module.css"
import { useState,useEffect } from "react";


const Frcst = () => {
    //console.log(data)
    const dtkey = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"];
    const ctkey = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"];
    //state 변수
    const [cnTag,setCnTag] = useState();




    let dtcn = [];
    let temp = dtkey.map((item,idx) => {
        //console.log(data[item])
        //console.log(ctkey[idx])
        return dtcn[data[item]] = data[ctkey[idx]]
    });
    //console.log(dtcn)
    
    let dtTag =  Object.keys(dtcn).map((item,idx) =>
        <div key ={`dtcn${idx}`} className={style.dtcnkey} onClick={() => {handClick(item)}}>{item}</div>
    )

    //날짜가 클릭되었을때 실행 함수
    const handClick = (k) => {
        //console.log("k" , dtcn[k]);
        let temp = dtcn[k].split(',');  //배열이 됨
        console.log(temp);
        temp = temp.map((item,idx) => {
            let spitem = item.split(':');
            return (
                <div key={'cn'+ idx} className="div1">
                    <span className={style.sp1}>{spitem[0]}</span>
                    {
                        spitem[1].trim() === "낮음"
                            ? <span className={style.sp21}>{spitem[1]}</span>
                            : spitem[1].trim() === "보통"
                                    ? <span className={style.sp22}>{spitem[1]}</span>
                                    : <span className={style.sp23}>{spitem[1]}</span>
                    }
                </div>
            )
        });

        setCnTag(temp);
    }

    useEffect(() => {
        console.log(cnTag);
    },[cnTag])

    return (
    <main className='container'>
        <article>
            <Hh1 title = "초미세먼지 주의 경보"/>
            <div className="grid">
                {dtTag}
            </div>
            <div className="grid">
                {cnTag}
            </div>
        </article>
        
    </main>
    )
}
export default Frcst
