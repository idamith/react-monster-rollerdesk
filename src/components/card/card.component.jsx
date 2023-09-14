import './card.style.css'

const Card = (props) => {
    const {monster, category} = props;

    return (
        <div className='card-container'>
            <img 
                alt={`monster ${monster.name}`}
                src={`https://robohash.org/${monster.id}?set=set${category}`}
            />
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
        </div>
    );
}

export default Card;