import React, {Component} from 'react';
import List from './components/List';
import GroceryForm from './components/GroceryForm';
import './App.css';

class App extends Component {

  state = { items: [
    {id: 1, itemName: "Milk", price: '2', completed: false},
    {id: 2, itemName: "Cereal", price: '3', completed: false},
    {id: 3, itemName: "Apples", price: '.50', completed: false}
      ]
    }


  // removeItem(e) {
  //   this.setState({items: this.state.items.filter(function(item) {
  //       return item !== e.target
  //   })});
  // }
  //
  // otherSubmit = (e) => {
  //   e.preventDefault()
  //   this.removeItem(this.state)
  // }
  // editItems = (id) => {
  //   const {items} = this.state
  //
  //   this.setState({
  //     items: items.map( item => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           itemName: newString
  //         }
  //       }
  //     })
  //   })
  // }
  //
  // newString = () => {
  //
  // }

  completeItems = (id) => {
      const {items} = this.state

      this.setState({
        items: items.map( item => {
          if (item.id === id) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item
        })
      })
    }

  getUniqId = () => {
     //NOTE We are just using this as a helper function for id's since we aren't using a db yet
     return Math.floor((1 + Math.random()) * 0x10000)
       .toString(16)
       .substring(1);
    }

  addItem = (itemAdded) => {
    const {items} = this.state

    const newItem = {id: this.getUniqId(), ...itemAdded}
    this.setState({ items: [newItem, ...items] })
  }

  render() {

    return(
      <div style={{
        backgroundColor: 'navy',
        padding: '10px 10px 100px',
        }}>
        <List items={this.state.items} completeItems={this.completeItems} />
        <GroceryForm addItem={this.addItem} removeItem={this.removeItem}/>
      </div>
    )
  }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

export default App;
