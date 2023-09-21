import { useState, useEffect } from "react";


const Boxoffice = () => {

    const [boxlist, setBoxlist] = useState();
    const [listTag, setListTag] = useState();
    const [detailTag, setDatailTag] = useState();

    const handClick = (item) => {
        console.log(item)
        setDatailTag(
            <table border="1">
                <tr>{item.movieCd}</tr>
                <tr><td>영화제목: {item.movieNm} {item.rankOldAndNew}</td></tr><br/>
                <tr><td>개봉일: {item.openDt}</td></tr><br/>
                <tr><td>누적관객수: {item.audiAcc}</td></tr><br/>
                <tr><td>누적매출액: {parseInt(item.salesAcc).toLocaleString('ko-KR')}</td></tr><br/>
            </table>
        );
    }

    //컴포넌트 생성시 한번 실행
    useEffect(() => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230901';
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err));

    }, []);

    // //state 변수가 변경될때 마다 실행
    // useEffect(() => {
    //     console.log(boxlist);
    //     if(boxlist){
    //         setListTag(boxlist.map((item,idx) => 
    //             <div key={'mv'+idx}>{item.movieNm}</div>
    //         )); // map에 결과는 배열
    //     }
    // }, [boxlist]);

    //state 변수가 변경될때 마다 실행
    useEffect(() => {
        console.log(boxlist);
        if (boxlist) {
            setListTag(boxlist.map((item, idx) =>
                <tr key={'mv' + idx} onClick={() => handClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        parseInt(item.rankInten) === 0
                            ? "-"
                            : item.rankInten > 0
                                ? "▲ " + Math.abs(item.rankInten)
                                : "▼ " + Math.abs(item.rankInten)
                    }</td>
                </tr>
            )); // map에 결과는 배열
        }
    }, [boxlist]);

    //console.log(boxlist);

    return (
        <main className="container">
            <article>
                <header><h1>일일 박스 오피스</h1></header>
                <table border={1}>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>
            </article>
            <footer>
                {detailTag}
            </footer>
        </main>
    );
};

export default Boxoffice;