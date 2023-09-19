import style from './Lotto.module.css';
import { useState } from 'react';

const Lotto = () => {            //return 에는 태그가 하나만 반환됨 , 자식노드는 제한없음
    // <>    </>프래그먼트 태그를 쓰면 가능함               
    let numArr = [];
    //let lottoTag = [];
    const [lottoTag, setLottoTag] = useState([]); //변수명 바꿀값 useState(초기값)

    const getNum = () => {
        numArr = [];
        while (numArr.length < 6) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (numArr.indexOf(n) < 0) {
                numArr.push(n)
            }
        }
        console.log(numArr);
        //  lottoTag = numArr.map((item) => {
        //      <div className={style.lottonum}>1</div>
        //  });

        setLottoTag(numArr.map((item) => 
            <div className={style.lottonum}>{item}</div>));
        console.log(lottoTag);
    }

    // for (var i = 0; i < 6; i++) {
    //     let n = Math.floor(Math.random() * 45) + 1;
    //     numArr.push(n);
    // }


    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또 생성기</h1>
                </header>
                <div className= {style.lottobox}>
                    {lottoTag}
                </div>
                <footer>
                    <button onClick={() => getNum()}>생성하기</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;