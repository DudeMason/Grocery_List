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
<ul
  style= {completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
  style= {{padding:'10px 60px 1px 10px'}}
>
  {itemName.capitalize()}
</ul>
)


export default Item
