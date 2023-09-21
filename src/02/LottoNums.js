import style from "./Lotto.module.css";

const LottoNums = ({ns}) => {
  //console.log("LottoNums ",probs.ns)
  console.log("LottoNums ",ns)

  // const nsTag = ns.map(item => {
  //   if (0 < item && item < 10){
  //     return <div className={style.lottonum}>{item}</div>
  //   }
  //   else if(item < 20){
  //     return <div className={style.lottonum2}>{item}</div>
  //   }
  //   else if(item < 30){
  //     return <div className={style.lottonum3}>{item}</div>
  //   }
  //   else if(item < 40){
  //     return <div className={style.lottonum4}>{item}</div>
  //   }
  //   else{
  //     return <div className={style.lottonum5}>{item}</div>
  //   }
  // },idx);

  // const nsTag = ns.map((item,idx) => {
  //   let tmp;

  //   if(item < 10) tmp = <div key ={"ns"+ idx} className={style.lottonum}>{item}</div>
  //   else if(item < 20) tmp = <div key ={"ns"+ idx} className={style.lottonum2}>{item}</div>
  //   else if(item < 30) tmp = <div key ={"ns"+ idx} className={style.lottonum3}>{item}</div>
  //   else if(item < 40) tmp = <div key ={"ns"+ idx} className={style.lottonum4}>{item}</div>
  //   else tmp = <div key ={"ns"+ idx} className={style.lottonum5}>{item}</div>

  //   return tmp;
  // });

  // const nsTag = ns.map((item,idx) => {
  //   let tmp;
  //   let n = Math.floor(item / 10);
    // switch(n){
    //   case 0:
    //     tmp = <div key ={"ns"+ idx} className={style.lottonum}>{item}</div>;
    //     break;
    //   case 1:
    //     tmp = <div key ={"ns"+ idx} className={style.lottonum2}>{item}</div>;
    //     break;
    //   case 2:
    //     tmp = <div key ={"ns"+ idx} className={style.lottonum3}>{item}</div>;
    //     break;
    //   case 3:
    //     tmp = <div key ={"ns"+ idx} className={style.lottonum4}>{item}</div>;
    //     break;
    //   case 4:
    //     tmp = <div key ={"ns"+ idx} className={style.lottonum5}>{item}</div>;
    //     break; 
        
    // }
    // let ncss = style[`lottonum${n+1}`];
    // return <div key ={"ns"+ idx} className={ncss}>{item}</div>;
    //return tmp;
  // });

  let nsTag = ns.map((item,idx) => {
    let tmp;
    let n = Math.floor(item / 10);
    let ncss = style[`lottonum${n+1}`];
    return(
      idx === (ns.length - 1) ? <div> + </div>
      : <div key ={"ns"+ idx} className={ncss}>{item}</div> 
    )
  });
//보너스 숫자 만들기 배열 at으로 마지막 item을 가져옴
  let n = Math.floor(ns.at(-1) / 10);
  nsTag.push(
    <div key ={"ns"+ (ns.length - 1)} className={style[`lottonum${n+1}`]}>{ns.at(-1)}</div> 
  )

  return (
    <div className={style.lottobox}>
        {nsTag}
    </div>
  );
};

export default LottoNums;
