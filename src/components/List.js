import React from 'react';
import Item from './Item'

const List = ({ items, completeItems }) => (
  <div>
  <h1 style={{textDecorationLine: 'underline'}}>Grocery List</h1>
  <ul style={{ padding: '10px 60px 1px 10px', fontSize: '15pt'}}>
    { items.map (item => <Item key={item.id} {...item} completeItems={completeItems}/> )}
  </ul>
  </div>
)

export default List;
