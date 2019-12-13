import React from 'react'

const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

const Item = ({ id, itemName, completed, completeItems}) => (
<li
  style= { completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
  >
  {itemName}
</li>

)


export default Item
