import React from "react"
import './instructions.css'

export default function InstructionsModal( {isOpen, onClose}) {
    if(!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" role="dialog" aria-labelledby="instructions-title" aria-modal='true' aria-describedby="instructions-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <h2>Game Instructions</h2>
                    <div className="instructions-content">
                        <p>Welcome to the Memory Card game!</p>
                        <p>Start the game by clicking on a Pokemon.</p>
                        <p>Continue to click on different Pokemon until you have clicked all 12.</p>
                        <p>If you click on the same Pokemon twice in one round, your score resets and the game starts over.</p>
                    </div>
                    <button onClick={onClose} aria-label="Close instructions">Close</button>
                </div>
            </div>
        </div>
    )
}