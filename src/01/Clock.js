import ClockImage from "./ClockImage";
import ClockTime from "./ClockTime";
const Clock = () => {

    return (
        <div className="App">
            <header className="App-header">
                <ClockImage />
                <p>
                    HEllo React
                </p>
                <ClockTime />
            </header>
        </div>
    );
}

export default Clock