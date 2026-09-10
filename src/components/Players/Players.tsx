import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { Iplayer } from "../../type/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayerPorps {
    playerPromise : Promise<Iplayer[]>,
    coin : number,
    setCoin: Dispatch<SetStateAction<number>>
}

function Players({playerPromise, coin,  setCoin}: PlayerPorps) {

const [buttonType, setButtonType] = useState<"available" | "selected">('available');
const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

    console.log(buttonType)

    const handleUpdateBtnType = (type: "available" | "selected") =>{
        setButtonType(type)
    }

    const players = use(playerPromise);
    console.log(players)
    return (
        <div className="container mx-auto mt-9 max-w-5xl">
            <div className="flex justify-between">
                <h2 className="font-bold text-xl"> {buttonType === "available" ? "Available Players" : "Selected Players"} </h2>
            <div >
                <button 
                onClick={() => handleUpdateBtnType("available")}
                className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
                <button
                onClick={() => handleUpdateBtnType("selected")}
                 className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
            </div>
            </div>

            {buttonType === "available" ? <AvailablePlayers players ={players} coin={coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}/> : <SelectedPlayers selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers} coin={coin} setCoin={setCoin}/>}
            
        </div>
    );
}

export default Players;