import React from 'react'
import { Prompt } from 'react-router-dom'

class ManageTeams extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  onChange() {
    this.setState({ inputValue: this.teamInput.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const teamName = this.state.inputValue
    this.props.addTeam(teamName)
    this.setState({ inputValue: '' })
  }

  render() {
    const { teams, removeTeam } = this.props
    const { inputValue } = this.state

    return (
      <div className="manage-teams">

        <Prompt
          when={inputValue !== ''}
          message="You have unsaved changes. Are you sure you want to leave?"
        />

        <h2>Manage Teams</h2>
        <ul>
          {teams.map((team, index) => (
            <li key={team}>
              {team}
              <button onClick={() => removeTeam(index)}>x</button>
            </li>
          ))}
        </ul>
        <form onSubmit={e=> this.onSubmit(e)}>
          <input ref={r => this.teamInput = r} onChange={() => this.onChange()} value={inputValue} type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default ManageTeams
