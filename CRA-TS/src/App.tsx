import React, { useState } from 'react';

import './App.css';
import Todolist from './components/todolist';

const list = [
  {
    id: '1',
    name: 'Jan'
  },
  {
    id: '2',
    name: 'Bill'
  },
  {
    id: '3',
    name: 'Amy'
  }
]

interface StateType {
  id: string,
  name: string
}

const App: React.FC = () => {
  const [itemList, setItemList] = useState<StateType[]>(list)

  const handleInputCreate = (createText: string) =>{
    setItemList(prev => [
      ...prev,
      { id: String(Math.random()), name: createText }
    ])
  }

  const handleInputDelete = (deleteItem: string): void =>{
    const filterItem = itemList.filter((item) => item.id !== deleteItem)

    setItemList(filterItem)
  }
  return (
    <div>
      <Todolist 
        items={itemList}
        handleInputDelete={handleInputDelete}
        handleInputCreate={handleInputCreate}
      />
    </div>
  );
}

export default App;
