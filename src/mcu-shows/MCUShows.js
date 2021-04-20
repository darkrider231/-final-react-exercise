// FiNAL REACT EXERCISE
// 1a
import './MCUShows.css';


// 1b & 5b
const MCUShows = ({dates}) => {
    // 1c
    return (
        // 4a
        <div className= "MCUShows">
            {/* 3a * & 5c*/}
            <h1 style={{fontFamily: "Georgia", textDecoration: "underline"}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            <p>WandaVision:  {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter} </p>
            <p>Loki: {dates.loki} </p>
            <p>Hawkeye: {dates.hawkeye} </p>
        </div>
    );
}



// 1d
export default MCUShows;