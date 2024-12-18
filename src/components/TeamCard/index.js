import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDeatils} = props
  const {name, id, teamImageURL} = teamDeatils
  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="teams-log" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
