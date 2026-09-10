import React, { useState, type Dispatch, type SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';
import type { Iplayer } from '../../type/PlayerType';
import { toast } from 'react-toastify';

interface IplayerCardProps{
     player: Iplayer,
     coin : number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: Iplayer[],
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

function PlayerCard({ player, coin, setCoin, selectedPlayers, setSelectedPlayers}: IplayerCardProps) {

    console.log(coin, setCoin)

    const isSelected = selectedPlayers.some(
    selectedPlayer => selectedPlayer.playerName === player.playerName
);
    // console.log(isSelected, setIsSelected)

    const handleSelectPlayer = () => {

    const newCoinPrice = coin - player.price;

    if (newCoinPrice >= 0) {

        setCoin(newCoinPrice);

        setSelectedPlayers([...selectedPlayers, player]);

        toast.success(`${player.playerName} is purchased successfully`);

    } else {

        toast.error(`Coin is not enough to purchase`);

    }
};

    return (
        <div className="group">
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

                {/* Player Image */}
                <figure className="relative overflow-hidden">
                    <img
                        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                        src={player.playerImg}
                        alt={player.playerName}
                    />

                    {/* Player Type */}
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full shadow">
                        {player.playerType}
                    </span>
                </figure>

                {/* Card Content */}
                <div className="card-body p-5">

                    {/* Name & Origin */}
                    <div>
                        <h2 className="card-title text-xl font-bold flex items-center gap-2">
                            <FaUser className="text-primary" />
                            {player.playerName}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {player.origin}
                        </p>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Playing Style */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">
                                Batting Style
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                {player.battingStyle}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">
                                Bowling Style
                            </p>
                            <p className="font-semibold text-sm mt-1">
                                {player.bowlingStyle}
                            </p>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="mt-3">
                        <p className="text-sm text-gray-500">
                            Rating
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                            <div className="rating rating-sm">
                                <input
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="1 star"
                                />
                                <input
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="2 stars"
                                />
                                <input
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="3 stars"
                                />
                                <input
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="4 stars"
                                />
                                <input
                                    type="radio"
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label="5 stars"
                                    defaultChecked
                                />
                            </div>
                        </div>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between mt-4">
                        <div>
                            <p className="text-xs text-gray-500">
                                Player Price
                            </p>
                            <h2 className="text-2xl font-bold text-primary">
                                ${player.price}
                            </h2>
                        </div>
                            <button
                                onClick={handleSelectPlayer}
                                className="btn btn-primary rounded-lg"
                                disabled={isSelected}
>
                                {isSelected ? "Selected Player" : "Choose Player"}
                            </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PlayerCard;