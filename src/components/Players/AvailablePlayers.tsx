import { FaUser } from "react-icons/fa";
import type { Iplayer } from "../../type/PlayerType";
import PlayerCard from "./PlayerCard";
import type { Dispatch, SetStateAction } from "react";

interface IAvailableProps {
    players: Iplayer[],
    coin : number,
    setCoin: Dispatch<SetStateAction<number>>,
    selectedPlayers: Iplayer[],
    setSelecctedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

function AvailablePlayers({players, coin, setCoin, selectedPlayers, setSelectedPlayers} : IAvailableProps) {
    // console.log(players);
    

    return (
        <div className="grid grid-cols-3 gap-10 mt-9">
            {
                players.map((player:Iplayer, ind:number) =>{
                    
                      return <PlayerCard key={ind} player = {player} coin = {coin} setCoin = {setCoin} selectedPlayers = {selectedPlayers} setSelectedPlayers = {setSelectedPlayers}></PlayerCard>
                           
                    })
            }
        </div>
    );
}

export default AvailablePlayers;