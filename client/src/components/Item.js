import React, {Component} from 'react'

class Item extends Component {

  state = {editItem: false}

  toggleEditItem = () =>
    this.setState({editItem: !this.state.editItem})

  render() {
    const styles ={
      complete: {
        color: 'grey',
        textDecoration: 'line-through',
      }
    }
    const {name, price, edit, removeItem, completeItems, completed, id} = this.props
    return(
      <>
      <ul style={completed ? {...styles.complete} : {}} onClick= {() => completeItems(id)}>
        <p>
          {name} $ {price}
        </p>
      </ul>
      <ul>
        {edit && <button onClick={() => this.toggleEditItem}>Edit</button>}
        {edit && <button onClick={() => removeItem(id)}>Delete</button>}
      </ul>
      </>
    )
  }

}

export default Item
