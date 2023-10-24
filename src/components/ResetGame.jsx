import GameState from "./GameState";
function ResetGame({onResetClick, gameState, tiles}) {
    if(gameState===GameState.inProgress){
        return;
    }

    return (  
        <button className="reset-button" onClick={onResetClick}>Reset</button>
    );
}

export default ResetGame;