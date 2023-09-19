import style from "./MyCom.module.css";
import MyDiv1 from "./MyDiv1";
import { useState } from "react";

const MyDiv = () => {
    //let n = 10;

    const [n,setN] = useState(0);

    // const handleClick = () => {
    //     //n+=1;
    //     setN(n+1);
    //     console.log(n);
    // };

    // const handleClick2 = () => {
    //     //n+=1;
    //     if(n > 0){
    //         setN(n-1);
    //         console.log(n);
    //     }
    // };

    const handleClick3 = (check) => {
        
        if(check){
            setN(n+1);
            console.log(n);
        }
        else{
            if(n > 0){
                setN(n-1);
                console.log(n);
            }
        }
    }
    return (
        <>
            <main className="container">
                <article>
                    <header>
                        <h1>
                            probs
                        </h1>
                        <MyDiv1 n={n} />
                    </header>
                    <footer>
                        <span onClick={() => handleClick3(true)}>★</span>
                        <span>{n}</span>
                        <span onClick={() => handleClick3(false)}>☆</span>
                    </footer>
                </article>
            </main>
        </>
    );
};
export default MyDiv