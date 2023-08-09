import './ShopCard.css'

function ShopCard({card, key}) {
    return (
        <div className="container">
            <h4 className="title">{card.name}</h4>
            <span className="color">{card.color}</span>
            <img className='img' src={card.img} alt="" />
            <div className="add-block">
                <span className="price">${card.price}</span>
                <button className="btn">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;