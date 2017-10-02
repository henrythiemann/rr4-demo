import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const Teams = ({ teams }) => (
  <div className="teams">
    <Switch>

      <Route
        exact
        path="/teams"
        render={() => <TeamsList teams={teams} />}
      />

      <Route
        exact
        path={`/teams/:teamName(${teams.join('|')})`}
        component={TeamDetail}
      />

      <Route component={TeamNotFound} />

    </Switch>
  </div>
)

const TeamsList = ({ teams }) => (
  <div className="teams-list">
    <h2>Teams:</h2>
    <ul>
      { teams.map(team => (
        <li key={team}>
          <Link to={`/teams/${team}`}>{team}</Link>
        </li>
      ))}
    </ul>
  </div>
)

const TeamDetail = ({ match }) => (
  <div className="team-detail">
    <Link to="/teams">Back</Link>
    <h2>Looking at the {match.params.teamName}</h2>
  </div>
)

const TeamNotFound = () => (
  <div className="team-not-found">
    <Link to="/teams">Back</Link>
    <h2>Team Not Found</h2>
  </div>
)

export default Teams