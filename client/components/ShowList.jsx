import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  getDefaultProps: function(){
    return {
      names: []
    }
  },

  render() {
    const listItems = this.props.names.map(friend =>
      {return <li key={friend}>{friend}</li>
    })
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
})
