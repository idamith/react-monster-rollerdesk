import Card from "../card/card.component";
import './card-list.style.css'

const CardList = (props) => {
    const {monsters, category} = props; 

    return (
        <div className='card-list'>
            {monsters.map(monster => <Card key={monster.id} monster={monster} category={category}/>)}
        </div>
    );
}

export default CardList;