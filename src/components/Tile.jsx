import TicTacToe from "./TicTacToe";



function Tile({className, value, onClick, playerTurn}){
    // console.log(value);
    console.log(playerTurn);
    let hoverClass= null;
    if(value==null && playerTurn!= null){
        hoverClass= `${playerTurn.toLowerCase()}-hover`;
    }
    return (
        <div onClick={onClick} className={`tile ${className}  ${hoverClass}`}>
            {value}
           
        </div>
    )
}

export default Tile;