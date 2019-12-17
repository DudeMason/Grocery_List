import React from 'react';
import Item from './Item';
import Name from './Name';

<<<<<<< HEAD
const List = ({ items, completeItems}) => (
  <div>
  <h1 style={{textDecorationLine: 'underline'}}><Name /></h1>
=======
const List = ({ items, completeItems, removeItem, toggleEdit, edit }) => (
  <div>
  <h1 style={{textDecorationLine: 'underline'}}>
    Grocery List
    <button onClick={toggleEdit} style={{}}>Edit</button>
  </h1>
>>>>>>> 87785f9d7a00d080aae2eec6f8eadbf3a82eb5d9
  <ul style={{ padding: '10px 60px 1px 10px', fontSize: '15pt'}}>
    { items.map (item =>
      <Item
        key={item.id}
        {...item}
        completeItems={completeItems}
        removeItem={removeItem}
        toggleEdit={toggleEdit}
        edit={edit}
      />)
    }
  </ul>
  </div>
)

export default List;
