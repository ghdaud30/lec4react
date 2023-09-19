import MyDiv11 from "./MyDiv11";
//const MyDiv1 = (probs) => 
const MyDiv1 = ({n}) => {
    return (
        <>
            <div>mydiv1 : n = {n}</div>
            {/*<MyDiv11 n={probs.n} />*/}
            <MyDiv11 n={n} />
        </>
    );
}

export default MyDiv1