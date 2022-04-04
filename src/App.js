import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './Components/List';



function App() {

  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) =>{
    setCurrentItem(e.target.value);
  }
  const addItem =()=>{
    updateItemList([...itemList,{item: currentItem, key:Date.now()}]);
    setCurrentItem("")
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list using React</h1>
        <div className='wrapper'>
          <div className='input-Wrapper'>
            <input placeholder='Add items' value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItem} >+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
        </header>
    </div>
  );
}

export default App;
