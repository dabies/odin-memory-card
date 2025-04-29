import '../styles/card.css'

export default function Card({ image, name = 'Pokemon Name', number, handleClick }) {
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="image-card" onClick={handleClick}>
            <img src={image}></img>
            <h3>{capitalizedName}</h3>
        </div>
    )
}