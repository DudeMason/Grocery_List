import React from 'react';
import Item from './Item'

const List = ({ items, completeItems, removeItem, toggleEdit, edit }) => (
  <div>
  <h1 style={{textDecorationLine: 'underline'}}>
    Grocery List
    <button onClick={toggleEdit} style={{}}>Edit</button>
  </h1>
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
