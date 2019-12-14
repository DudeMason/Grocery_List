import React from 'react'

// edit = () => {}

const Item = ({ id, itemName, completed, completeItems }) => (
<ul
  style= {completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
>
  {itemName.capitalize()}
</ul>
)

const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


export default Item
