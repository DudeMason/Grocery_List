import React, {Component} from 'react';
import List from './components/List';
import axios from 'axios';
import GroceryForm from './components/GroceryForm';
import './App.css';

class App extends Component {

  state = { items: [], edit: false }

    toggleEdit = () => {
      this.setState({ edit: !this.state.edit })
    }

    componentDidMount() {
      axios.get('/api/items')
      .then( res => {
        this.setState({ items: res.data })
      })
      .catch( err => {
        console.log(err)
      })
    }

    removeItem = (id) => {
      const newItems = this.state.items.filter(item => {
        if (item.id !== id) {
          return item
        }
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

    getUniqId = () => {
       //NOTE We are just using this as a helper function for id's since we aren't using a db yet
       return Math.floor((1 + Math.random()) * 0x10000)
         .toString(16)
         .substring(1);
      }

    addItem = (item) => {
      // const {items} = this.state

      // const newItem = {id: this.getUniqId(), ...itemAdded}
      // this.setState({ items: [newItem, ...items] })
      axios.post(`/api/items`, item)
        .then( res => {
          const { items } = this.state
          this.setState({ items: [...items, res.data]})
        })
        .catch( err => {
          console.log(err)
        })
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
            edit={this.state.edit}/>
          <GroceryForm addItem={this.addItem}/>
        </div>
      )
    }
  }

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

  export default App;
