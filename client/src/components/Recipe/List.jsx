import React, { useState } from 'react';
import ListComponent from './ListComponent';

export default function List(props) {
  const Input = () => {
    return <ListComponent />;
  };

  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (e) => {
    e.preventDefault();
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  // const onRemoveBtnClick = (e) => {
  //   e.preventDefault();
  //   const updatedInput = inputList.filter( )
  // }

  return (
    <div>
      {inputList}
      <button onClick={onAddBtnClick}>Add an ingredient</button>
    </div>
  );
}
