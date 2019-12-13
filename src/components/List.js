import React from 'react';
import Item from './Item'

const List = ({items, completeItems}) => (
  <div>
  <h1 style={{padding: '2px 2px 10px 2px', textDecorationLine: 'underline'}}>Grocery List</h1>
  <ul>
    { items.map (item => <Item key={item.id} {...item} completeItems={completeItems}/> )}
  </ul>
  </div>
)

export default List;
