import '../styles/instructions.css'

export default function WinnerModal({ gameOver, onClose }) {
    if(!gameOver) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" role="dialog" aria-labelledby="instructions-title" aria-modal='true' aria-describedby="instructions-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <h2>You won!</h2>
                    <div className="instructions-content">
                        <p>Congratulations, you're a memory pro!</p>
                    </div>
                    <button onClick={onClose} aria-label="Close instructions">Play Again</button>
                </div>
            </div>
        </div>
    )
}