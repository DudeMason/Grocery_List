import React, {Component} from 'react'

class GroceryForm extends Component {

  state = {name: '', price: '', complete: false, deletable: false}

  handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addItem(this.state)
    this.setState({ name: '', price: '' })

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.itemName}
          name='name'
          onChange={this.handleChange}

          required
          placeholder='Add an item'
        />
        <input
          value={this.state.price}
          name='price'
          onChange={this.handleChange}

          required
          placeholder="Item price">
        </input>
        <button>Submit</button>
      </form>

    )
  }
}

export default GroceryForm
