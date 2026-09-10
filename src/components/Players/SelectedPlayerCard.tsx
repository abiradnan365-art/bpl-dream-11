import React, { type Dispatch, type SetStateAction } from 'react';
import { TbTrash } from 'react-icons/tb';
import type { Iplayer } from '../../type/PlayerType';

interface ISelectedPlayerCard{
    player: Iplayer
        coin : number,
      setCoin: Dispatch<SetStateAction<number>>,
         selectedPlayers: Iplayer[],
        setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

function SelectedPlayerCard({player,coin,setCoin,selectedPlayers,setSelectedPlayers}:ISelectedPlayerCard) {

       const handleRemovePlayer = (player:Iplayer) => {
        const restPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName)
        setSelectedPlayers(restPlayer);
        const newCoinPrice = coin + player.price;
        setCoin(newCoinPrice);
    }

    return (
        <div className='flex justify-between gap-2 items-center p-2 border-2 border-gray-200 '>
                        <div className='flex gap-2  '>
                            <img className='h-15 w-15 p-1 rounded-2xl' src={player.playerImg} alt="" />
                            <div>
                                <h2 className='font-bold text-xl'>{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>
                        <span className='text-red-500 cursor-pointer text-xl'
                        onClick={()=> handleRemovePlayer(player)}>
                            <TbTrash/>
                        </span>
                    </div>
    );
}

export default SelectedPlayerCard;