import React, {Component} from 'react';
import List from './components/List'
import GroceryForm from './components/GroceryForm'

class App extends Component {

  state = { items: [
    {id: 1, itemName: "Milk", completed: false},
    {id: 2, itemName: "Cereal", completed: false},
    {id: 3, itemName: "Apples", completed: false}
      ]
    }

  getUniqId = () => {
     //NOTE We are just using this as a helper function for id's since we aren't using a db yet
     return Math.floor((1 + Math.random()) * 0x10000)
       .toString(16)
       .substring(1);
    }

  completeItems = (id) => {
      const {items} = this.state

      this.setState({
        items: items.map( item => {
          if (item.id === id) {
            return {
              ...item,
              complete: !item.complete
            }
          }
          return item
        })
      })
    }

  addItem = (itemAdded) => {
    const {items} = this.state
    const newItem = {id: this.getUniqId(), ...itemAdded}
    this.setState({ items: [newItem, ...items] })
  }

  render() {

    return(
      <div>
        <List items={this.state.items} completeItems={this.completeItems} />
        <GroceryForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
