import { useEffect, useState } from "react";
import Board from "./Board";
import Tile from "./Tile";
import GameOver from "./GameOver";
import GameState from "./GameState";
import ResetGame from "./ResetGame";

const player_x = 'X';
const player_o = 'O';

const winningCombs = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },

    { combo: [0, 3, 6], strikeClass: "strike-col-1" },
    { combo: [1, 4, 7], strikeClass: "strike-col-2" },
    { combo: [2, 5, 8], strikeClass: "strike-col-3" },

    { combo: [0, 4, 8], strikeClass: "strike-diag-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diag-2" },


]

const checkWinner = (tiles, setStrikeClass, setGameState) => {
    // console.log("checkWinner");
    for (let comb of winningCombs) {
        const { combo, strikeClass } = comb;
        const tileVal1 = tiles[combo[0]];
        const tileVal2 = tiles[combo[1]];
        const tileVal3 = tiles[combo[2]];

        if (tileVal1 != null && tileVal1 == tileVal2 && tileVal1 == tileVal3) {
            setStrikeClass(strikeClass);
            if(tileVal1== player_x){
                setGameState(GameState.playerXWins);
            }else if(tileVal1==player_o){
                setGameState(GameState.playerOWins);
            }
                return;
        }

    }

    const areAllFilled= tiles.every((tile)=> tile!== null);

    if(areAllFilled){
       
        setGameState(GameState.draw);
    }
}

function TicTacToe() {



    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(player_x);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress);


    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles])

    const handleTileClick = (index) => {
        // console.log(index);
        if (tiles[index] != null || gameState===GameState.playerOWins || gameState===GameState.playerXWins)
            return;
        const newtiles = [...tiles];
        newtiles[index] = playerTurn;
        setTiles(newtiles);
         
        if (playerTurn == player_x) {
            setPlayerTurn(player_o);
        } else {

            setPlayerTurn(player_x);
        }

    }

    const handleResetClick= ()=>{
        setGameState(GameState.inProgress);
        setPlayerTurn(player_x);
        setTiles(Array(9).fill(null));
        setStrikeClass();

    }

    return (
        <>
            <h1>TicTacToe</h1>
            <Board
                playerTurn={playerTurn}
                tiles={tiles}
                onTileClick={handleTileClick}
                strikeClass={strikeClass}
            />

            <GameOver  gameState={gameState} />
            <ResetGame onResetClick= {handleResetClick} gameState= {gameState} tiles= {tiles}/>
        </>
    );
}

export default TicTacToe;