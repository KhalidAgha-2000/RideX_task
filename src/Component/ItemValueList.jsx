import { useState } from 'react';
import '../App.css'
import StarRating from './StarRating'


const ItemValueList = ({ itemList, setItemList }) => {
    const [ratings, setRatings] = useState({});

    const handleRatingChange = (rating, itemId) => {
        setRatings({ ...ratings, [itemId]: rating });
    }; return (
        <div>
            {itemList.map((item, index) => (
                <div className="items" key={index}>
                    <StarRating
                        rating={ratings[item.id] || 0}
                        onRatingChange={(rating) => handleRatingChange(rating, item.id)}
                    />
                    <h1>{item.name}</h1>
                    <p>$ {item.value}</p>
                    <span
                        onClick={() => {
                            setItemList(itemList.filter((a) => a.id !== item.id));
                            setRatings({ ...ratings, [item.id]: undefined });
                        }}
                    >
                        X
                    </span>
                </div>
            ))}
        </div>
    )
}

export default ItemValueList
