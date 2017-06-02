import React from 'react'
import CreateReactClass from 'create-react-class'

import ShowList from './ShowList'
import AddNewFriend from './AddNewFriend'

export default CreateReactClass({
  getInitialState() {
    return {
      name: 'Catherine',
      friends: ['George', 'Charlotte', 'Natalie']
    }
  },
    addFriend(friend) {
      this.setState({
        friends: this.state.friends.concat([friend])
      })
    },

  render() {
    return (
      <div>
       <h2>Friends</h2>
       <ShowList names={this.state.friends} />
      <AddNewFriend addNew={this.addFriend}/>
      </div>
    )
  }
})
