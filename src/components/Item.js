import React from 'react'

const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

// edit = () => {}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const Item = ({ id, itemName, completed, completeItems}) => (
<li
  style= { completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
>
  {itemName.capitalize()} <button onClick={this}>Edit</button>
</li>
)


export default Item
