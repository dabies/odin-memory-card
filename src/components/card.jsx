import './card.css'

export default function Card({ image = '../public/vite.svg', name = 'Pokemon Name', handleClick }) {
    return (
        <div className="image-card" onClick={handleClick}>
            <img src={image}></img>
            <h3>{name}</h3>
        </div>
    )
    
}