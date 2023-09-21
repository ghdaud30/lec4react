import { useEffect, useState } from "react";

const ClockTime = () => {

    // 일반 변수로 처리 => 재 랜더링이 일어나지 않음
    // let dt = new Date().toLocaleTimeString();
    // setInterval(() => { //비동기 동작
    //     dt = new Date().toLocaleTimeString();
    //     console.log(dt);
    // }, 1000)

    //userState 변수 상태변수 (재 랜더링 가능함)
    const [dt,setDt] = useState(new Date().toLocaleTimeString());

    //userEffect : 맨 처음 한번만 실행
    useEffect(() => {
        const t = setInterval(() => {
            setDt(new Date().toLocaleTimeString());
        },1000);

        return () => clearInterval(t);
    },[])
    //userEffect : 특정변수가 바뀔때 실행
    useEffect(() => { 
        console.log(dt);
    },[dt])

    return (
        <>
            <p>
                HEllo React
            </p>
            <div>현재시간 : {dt} </div>
        </>
    );

}

export default ClockTime;