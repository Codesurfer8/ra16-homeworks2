import './ShopItem.css';

function ShopItem({ item, key }) {
    return (
        <div className="card-list">
            <div>
                <img className="img-card" src={item.img} alt="" />
            </div>
            <div className="name-block">
                <h4 className="name-card">{item.name}</h4>
            </div>
            <div className="color-block">
                <span className="color-card">{item.color}</span>
            </div>
            <div className="price-block">
                <span className="price-card">${item.price}</span>
            </div>
            <div className="btn-block">
                <button className="btn-card">ADD TO CART</button>
            </div>

        </div>
    )
}

export default ShopItem;