import '../styles/instructions.css'

export default function LoserModal({ playerHasLost, onClose, highScore }) {
    if(!playerHasLost) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" role="dialog" aria-labelledby="instructions-title" aria-modal='true' aria-describedby="instructions-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <h2>You lost.</h2>
                    <div className="instructions-content">
                        <p>You clicked the same pokemon twice.</p>
                        <p>Your current high score is {highScore}</p>
                    </div>
                    <button onClick={onClose} aria-label="Close instructions">Play Again</button>
                </div>
            </div>
        </div>
    )
}