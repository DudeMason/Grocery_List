import React from 'react'

// edit = () => {}

const Item = ({ id, itemName, price, completed, deletable, completeItems }) => (
<ul
  style= {completed ? {...styles.complete} : {}}
  onClick= {() => completeItems(id)}
>
  <p>{itemName.capitalize()} ${price}</p>
</ul>
)

// function removeItem(id) {
//     if (props.completed == true)
//       return <button onClick={this.removeItem(id)}>Delete</button>};
//     }
//     return ;
//   }

const styles ={
  complete: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

export default Item
