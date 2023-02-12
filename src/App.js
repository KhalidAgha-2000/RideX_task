import { useState } from 'react';
import './App.css';
import ItemValueList from './Component/ItemValueList';

function App() {
  const INITIAL_LIST = [
    { id: 1, name: "Tomatoes", value: 5.0 },
    { id: 2, name: "Basil", value: 2.5 },
    { id: 3, name: "Mozzarella", value: 9.99 },
  ];
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  function ParseFloat(str, val) {
    str = str.toString();
    if (Number.isInteger(Number(str))) {
      return Number(str);
    } else {
      str = str.slice(0, str.indexOf(".") + val + 1);
    }
    return Number(str);
  }

  const [itemList, setItemList] = useState(INITIAL_LIST)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await INITIAL_LIST.push({ name: name, price: parseFloat(price).toFixed(2), id: INITIAL_LIST.length + 1 })
    await setItemList(INITIAL_LIST)
    console.log('tt', itemList);
  }


  return (
    <div className="App">

      {/* Form */}
      <form >
        <input onChange={(e) => { setName(e.target.value, console.log(name)) }} value={name} type="text" placeholder='name' required />
        <input id='yourinput' onChange={(e) => { setPrice(e.target.value, console.log(price)) }} min={1} value={price} type="number" placeholder='price' required />
        <button onClick={handleSubmit} type='button'>Submit</button>
      </form>

      <ItemValueList setItemList={setItemList} itemList={itemList} />
    </div>
  );
}

export default App;
