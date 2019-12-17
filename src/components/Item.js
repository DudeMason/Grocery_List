import React, {Component} from 'react'

// edit = () => {}

class Item extends Component {


  render() {
    const styles ={
      complete: {
        color: 'grey',
        textDecoration: 'line-through',
      }
    }
    const {itemName, price, edit, removeItem, completeItems, completed, id} = this.props
    return(
      <>
      <ul style={completed ? {...styles.complete} : {}} onClick= {() => completeItems(id)}>
        <p>
          {itemName.capitalize()}
          ${price}
        </p>
      </ul>
      <ul>
      {edit && <button onClick>Edit</button>}
      {edit && <button onClick={() => removeItem(id)}>Delete</button>}
      </ul>
      </>
    )
  }

}

export default Item
