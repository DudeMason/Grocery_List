import React, {Component} from 'react';
import List from './components/List';
import GroceryForm from './components/GroceryForm';
import './App.css';

class App extends Component {

  state = { edit: false, items: [
    {id: 1, itemName: "Milk", price: '2', completed: false},
    {id: 2, itemName: "Cereal", price: '3', completed: false},
    {id: 3, itemName: "Apples", price: '.50', completed: false}
      ]
    }

    toggleEdit = () => {
      this.setState({ edit: !this.state.edit })
    }

    removeItem = (id) => {
      const newItems = this.state.items.filter(item => {
        if (item.id !== id)
        {return item}
          return null
      })
      this.setState({ items: [...newItems] })
    }

    completeItems = (id) => {
        const {items} = this.state

        this.setState({
          items: items.map( item => {
            if (item.id === id) {
              return {
                ...item,
                completed: !item.completed,
                deletable: !item.deletable
              }
            }
            return item
          })
        })
      }

    updateItem = (id, formState) => {
      const freshItems = this.state.items.map( i => {
        if (i.id === id)
        return{formState}
        return i
      })
      this.setState({ items: [...freshItems]})
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
          <List
            items={this.state.items}
            completeItems={this.completeItems}
            removeItem={this.removeItem}
            toggleEdit={this.toggleEdit}
            edit={this.state.edit}
            updateItem={this.updateItem}/>
          <GroceryForm addItem={this.addItem}/>
        </div>
      )
    }
  }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  export default App;
