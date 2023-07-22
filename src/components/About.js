import User from './User'
import UserClass from './UserClass'
import { Component } from 'react';
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
        <UserClass name="Nikita" location="Mumbai" />
        <p>This is namaste react web series</p>
      </div>
    )
  }
}

export default About;

