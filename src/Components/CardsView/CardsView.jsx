import './CardsView.css';
import ShopCard from './ShopCard/ShopCard';

function CardsView({ cards }) {
    let indexCard = 0;

    return (
        <div className='cardsView'>
            {cards.map((card) => (
                <ShopCard card={card} key={indexCard++} />
            ))}
        </div>
    )
}

export default CardsView;