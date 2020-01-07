import React, { Component } from 'react';

class Name extends Component {

state = {
    value: "Grocery List",
    isInEditMode: false
}

changeEditMode = () => {
    this.setState({
        isInEditMode: !this.state.isInEditMode
    })
}

updateTitleValue = () => {
    this.setState({
        isInEditMode: false,
        value: this.refs.theTextInput.value
    })
}

renderEditView = () => {
    return <div>
    <input
    type="text"
    defaultValue={this.state.value}
    ref="theTextInput"
    />
    <button onClick={this.changeEditMode}>X</button>
    <button onClick={this.updateTitleValue}>✓</button>
    </div>
}

renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>
    {this.state.value}
    </div>
}

render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()
}

}

export default Name;
