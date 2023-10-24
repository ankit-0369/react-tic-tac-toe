
import Tile from "./Tile";
import Strike from "./strike";
function Board({ playerTurn,tiles, onTileClick,strikeClass }) {
    // console.log(tiles);
    // console.log(strikeClass);
    return (
        <div className="board">
            <Tile
                playerTurn= {playerTurn}
                onClick={() => onTileClick(0)}
                value={tiles[0]}
                className='br-right br-bottom' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(1)}
                value={tiles[1]}
                className='br-right br-bottom' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(2)}
                value={tiles[2]}
                className=' br-bottom' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(3)}
                value={tiles[3]}
                className='br-right br-bottom ' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(4)}
                value={tiles[4]}
                className='br-right br-bottom' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(5)}
                value={tiles[5]}
                className=' br-bottom' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(6)}
                value={tiles[6]}
                className='br-right' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(7)}
                value={tiles[7]}
                className='br-right ' />
            <Tile
                playerTurn= {playerTurn}
            onClick={() => onTileClick(8)}
                value={tiles[8]}
            />
            <Strike strikeClass= {strikeClass} />
        </div>
    );
}

export default Board;