import React from 'react';

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Data",
        avatar_url: ""
      }
    }
  }
  async componentDidMount() {
    const response = await fetch('https://api.github.com/users/nikinsaw')
    const userInfo = await response.json()
    this.setState({ userInfo })
  }

  async componentDidUpdate() {
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    console.log("Component Will Unmount")
  }

  render() { // render method returns a piece of JSX
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="user" style={{ height: 150, width: 150, borderRadius: 100 }} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact No: @nikinsaw</h4>
      </div>
    )
  }
}

export default UserClass;

