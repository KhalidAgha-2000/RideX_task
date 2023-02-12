import { useState } from 'react';
import './App.css';
import ItemValueList from './Component/ItemValueList';

function App() {
  const INITIAL_LIST = [
    { id: 0, name: "Tomatoes", value: 5.0, rating: 1 },
    { id: 1, name: "Basil", value: 2.5, rating: 2 },
    { id: 2, name: "Mozzarella", value: 9.99, rating: 1 },
  ];
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [itemList, setItemList] = useState(INITIAL_LIST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, value, id: itemList.length + 2, rating: 1 };
    setItemList([...itemList, newItem]);
  };

  const checkIfEmpty = (obj) => {
    let status = false
    for (let key in obj) {
      if (obj[key] === "") {
        status = true
      }
    }
    return status;
  }
  return (
    <div className="App">
      {/* Form */}
      <form>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="name"
          required
        />
        <input
          id="yourinput"
          onChange={(e) => {
            const inputValue = e.target.value;
            const [whole, decimal = ''] = inputValue.split('.');
            if (decimal.length > 2) {
              const roundedDecimal = decimal.substring(0, 2);
              setValue(`${whole}.${roundedDecimal}`);
            } else {
              setValue(inputValue);
            }
          }}
          min={1}
          value={value}
          type="number"
          placeholder="value"
          required
        />
        <button
          disabled={checkIfEmpty({ name, value })}
          onClick={handleSubmit} type="button">
          Submit
        </button>
      </form>

      <ItemValueList setItemList={setItemList} itemList={itemList} />

    </div>
  );
}

export default App;