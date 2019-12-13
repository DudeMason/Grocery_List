import React from 'react';
import Item from './Item'

const List = ({items, completeItems}) => (
  <div>
  <h1>Grocery List</h1>
  <ul>
    { items.map (item => <Item key={item.id} {...item} completeItems={completeItems}/> )}
  </ul>
  </div>
)

export default List;
