export default function Header({ openInstructions, score, handleScore, highScore }) {

    return(
        <header>
            <button onClick={openInstructions}>Instructions</button>
            <h1>Memory Card Game!</h1>
            <div className="scores-div">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </header>   
    )
}