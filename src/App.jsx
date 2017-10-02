import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Teams from './Teams'
import ManageTeams from './ManageTeams'
import AuthRoute from './AuthRoute'

class App extends React.Component {

  constructor(props) {
    super(props)

    const savedTeams = window.localStorage.getItem('teams')
    const teams = savedTeams ? savedTeams.split(',') : ['Bears', 'Warriors', 'Padres']
    window.localStorage.setItem('teams', teams)

    this.state = {
      auth: true,
      teams,
    }

    this.setAuth = this.setAuth.bind(this)
    this.removeTeam = this.removeTeam.bind(this)
    this.addTeam = this.addTeam.bind(this)
  }

  setAuth(newAuth) {
    this.setState({ auth: newAuth })
  }

  addTeam(team) {
    const newTeams = [...this.state.teams]
    if (!newTeams.includes(team)) {
      newTeams.push(team)
      this.setState({ teams: newTeams })
    }
    window.localStorage.setItem('teams', newTeams)
  }

  removeTeam(index) {
    const newTeams = [...this.state.teams]
    newTeams.splice(index, 1)
    this.setState({ teams: newTeams })
    window.localStorage.setItem('teams', newTeams)
  }

  render() {
    const { auth, teams } = this.state

    return (
      <div className="app">

        <NavBar auth={auth} setAuth={this.setAuth} />

        <h1>Sports Teams!</h1>

        <Switch>

          <Route
            exact
            path="/"
            component={Home}
          />

          <Route
            path="/teams"
            render={() => <Teams teams={teams} />}
          />

          <AuthRoute
            exact
            path="/manage"
            auth={auth}
            component={ManageTeams}
            teams={teams}
            addTeam={this.addTeam}
            removeTeam={this.removeTeam}
          />

          <Route component={NotFound} />

        </Switch>
      </div>
    )
  }
}

const Home = () => <h2>Home</h2>

const NotFound = () => <h2>Page Not Found</h2>

export default App
