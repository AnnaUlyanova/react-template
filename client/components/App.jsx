import React from 'react'
import CreateReactClass from 'create-react-class'

import Friends from './Friends'

export default CreateReactClass({
  getInitialState() {
    return {
      username: '@Mannix'
    }
  },

  handleChange(e) {
    this.setState({
        username: e.target.value
    })
  },

  render() {
    return (
      <div>
      <h1>Hi {this.state.username}</h1><br/>
      Change Name: <input type='text' value={this.state.username} onChange={this.handleChange} />
      <Friends />
      </div>
    )
  }
})
