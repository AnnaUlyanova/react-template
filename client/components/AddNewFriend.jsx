import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  getInitialState() {
    return {
      newFriend: ''
    }
  },

  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  },
  
  handleAddNew() {
    this.props.addNew(this.state.newFriend)
    this.setState( {
      newFriend:''
    })
  },

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
          />
        <button onClick={this.handleAddNew}>Add Friend</button>
      </div>
    )
  }
})
