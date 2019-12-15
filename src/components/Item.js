import React from 'react'

// edit = () => {}

const Item = ({ id, itemName, price, completed, completeItems }) => (
<ul
  style= {completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
>
  {itemName.capitalize()} {price}
</ul>
)

const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Item
