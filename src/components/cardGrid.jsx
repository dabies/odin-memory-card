import Card from "./card"

export default function CardGrid ({ cardArray, handleClick}) {
    return (
        <>
            {cardArray.map(card => (
                <Card
                    key={card.id}
                    image={card.image}
                    handleClick={() => handleClick(card.id)}
                    name={card.name}
                    number = {card.id}
                ></Card>
            ))}
        </>
    )
}