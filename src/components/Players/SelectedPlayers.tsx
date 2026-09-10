import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../type/PlayerType';
import { TbTrash } from 'react-icons/tb';
import SelectedPlayerCard from './SelectedPlayerCard';

interface ISlelectedPlayersProps {
    coin : number,
  setCoin: Dispatch<SetStateAction<number>>,
     selectedPlayers: Iplayer[],
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

function SelectedPlayers({selectedPlayers, setSelectedPlayers, coin, setCoin}: ISlelectedPlayersProps) {
    console.log(selectedPlayers, setSelectedPlayers)

    if (selectedPlayers.length === 0){
        return(
            <h2 className=' flex justify-center font-bold text-2xl text-gray-400'>No selected player</h2>
        )
    }
 

    return (
        <div className='grid grid-cols-1 gap-4 my-5 '>
            {selectedPlayers.map((player:Iplayer ,ind: number) => {
                return (
                    <SelectedPlayerCard key={ind} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} player={player}></SelectedPlayerCard>
                )
            } )}
        </div>
    );
}

export default SelectedPlayers;