import { useEffect, useState } from 'react';
import LottoNums from './LottoNums';

const Lotto = () => {            //return 에는 태그가 하나만 반환됨 , 자식노드는 제한없음
    // <>    </>프래그먼트 태그를 쓰면 가능함               
    const [nums,setNums] = useState();

    //버튼 클릭
    const handleClick = () => {
        let temp = [];

        while(temp.length < 7){
            let n = Math.floor(Math.random() * 45) + 1
            if(temp.indexOf(n) < 0) temp.push(n);
        }
        setNums(temp);
    }

    //nums 변수 변경시 수행
    useEffect(() => {
        console.log("nums ",nums);
    },[nums]);
    
    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또 생성기</h1>
                </header>
                {nums ? <LottoNums ns={nums}/> : "숫자가 없습니다"}
                <footer>
                    <button onClick={handleClick}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;