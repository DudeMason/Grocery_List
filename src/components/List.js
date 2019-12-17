import React from 'react';
import Item from './Item';
import Name from './Name';

const List = ({ items, completeItems}) => (
  <div>
  <h1 style={{textDecorationLine: 'underline'}}><Name /></h1>
  <ul style={{ padding: '10px 60px 1px 10px', fontSize: '15pt'}}>
    { items.map (item => <Item key={item.id} {...item} completeItems={completeItems}/> )}
  </ul>
  </div>
)

export default List;
