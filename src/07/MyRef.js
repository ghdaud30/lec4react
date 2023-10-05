import React from 'react';
import Hh1 from '../comm/Hh1';
import { useEffect, useState , useRef} from 'react';

const MyRef = () => {
    const title = "Useref Hook: 변수제어";
    const [cnt1, setCnt1] = useState();
    

    //Ref 변수
    const cnt2 = useRef(0);
    const txt1 = useRef();

    const handClick = () =>{
      setCnt1(cnt1 + 1);
      console.log("handClick",cnt1);
    }

    const handClickRef = () =>{
      cnt2.current = cnt2.current + 1;
      console.log("handClickRef",cnt2.current);
    }

    const handleChange = () =>{
      console.log("handleChange",txt1.current.value);
      setCnt1(txt1.current.value);
    }

    //컴포넌트 생성시 1번 호출
    useEffect(() => {
      setCnt1(100);
      txt1.current.focus(); // <input ref = {txt1} 마우스 초점 맞추기
    },[])

    //컴포넌트 업데이트시 계속 호출: cnt1 state 변수가 업데이트될때
    useEffect(() => {
      console.log("useEffect",cnt1);
    }, [cnt1])

  return (
    <main className='container'>
        <article>
          <Hh1 title='Form 제어: useRef'></Hh1>
          <form>
            <input ref = {txt1} type="number" id='txt1' name='txt1' 
            placeholder='숫자입력' onChange={handleChange}/>
          </form>
        </article>
        <article>
            <Hh1 title = {title}></Hh1>
            <div className='grid'>
              <div>state변수 : {cnt1}</div>
              <div>Ref변수 : {cnt2.current}</div>
            </div>
            <footer>
              <div className='grid'>
                <button onClick={handClick}>state 변수 증가</button>
                <button onClick={handClickRef}>Ref 변수 증가</button>
              </div>
            </footer>
        </article>
    </main>
  )
}

export default MyRef

