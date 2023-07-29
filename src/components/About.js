import { Component } from 'react';
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';
class About extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>User:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </h2>
        <UserClass name="Nikita" location="Mumbai" />
        <p>This is namaste react web series</p>
      </div>
    )
  }
}

export default About;

