import React, {Component} from 'react'

class GroceryForm extends Component {

  state = {id: 0, itemName: '', price: '', complete: false}

  handleChange = (e) => {
  const { name, value } = e.target
  this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateItem(this.props.id, this.state)
      this.props.toggleEditItem()
      this.setState({id: this.props.id, ...this.state})

    }
    else{
      this.props.addItem(this.state)
    }
      this.setState({ itemName: '', price: '' })
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
