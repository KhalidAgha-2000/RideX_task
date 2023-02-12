import '../App.css'

const ItemValueList = ({ itemList, setItemList }) => {

    return (
        <div>
            {itemList.map((item, index) => (
                <div className='items' key={index}>
                    <h1>{item.name}</h1>
                    <p>$ {
                        item.value
                    }
                        {/* {item.value} */}
                    </p>
                    <span onClick={() => { setItemList(itemList.filter(a => a.id !== item.id)) }}>X</span>
                </div>
            ))}
        </div>
    )
}

export default ItemValueList
