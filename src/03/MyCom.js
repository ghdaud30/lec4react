import MyComN from "./MyComN";
const MyCom = () => {
  let n = 10;
  let comTag;

  if(n === undefined){
    comTag = <div>값이 없습니다</div>
  }else{
    comTag = <MyComN n={n} n1={n * 2}/>
  }

  return (
    <main className="container">
      <article>
        <header>MyCom</header>
        {
        //n === undefined ? (<div>값이 없습니다</div> )
        //: ( <MyComN n={n} n1={n * 2} />)
        {comTag}
        }
      </article>
    </main>
  );
};

export default MyCom;
