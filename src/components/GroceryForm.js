import React, {Component} from 'react'

class GroceryForm extends Component {

  state = {itemName: '', complete: false}

handleChange = (e) => {
  // this.setState({[e.target.name]: e.target.value})
  const { name, value } = e.target
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault() //stops page reloading
//   console.log(this.state.todoValue) // <-- DIDN'T WORK?
  this.props.addItem(this.state)
  this.setState({ itemName: '' })
}

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.itemName}
          name='itemName'
          onChange={this.handleChange}

          required
          placeholder='Add an item'
        />
      </form>

    )
  }
}

export default GroceryForm
