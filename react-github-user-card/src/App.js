import React from "react";
import axios from "axios";
import "./App.css";
import MyGithubcard from "./components/MyGithubCard";
import Myfollowers from "./components/Myfollowers";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myGithubInfo: {},
      myFollowers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/huangm96")

      .then(response => {
        console.log(response);
        this.setState({ myGithubInfo: response.data });
        console.log(this.state.myGithubInfo);
      })

      .catch(function(error) {
        console.log(error);
      });

    axios
      .get("https://api.github.com/users/huangm96/followers")

      .then(response => {
        console.log(response);
        const followersArray = response.data;

        followersArray.forEach(follower => {
          axios
            .get(follower.url)
            .then(response => {
              this.setState({ myFollowers: [...this.state.myFollowers, response.data] });
              console.log(this.state.myFollowers);
            })
            .catch(function(error) {
              console.log(error);
            });
        });
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <MyGithubcard myGithubInfo={this.state.myGithubInfo} />
        <h2>Min's Followers:</h2>
        <Myfollowers myFollowers={this.state.myFollowers} />
      </div>
    );
  }
}

export default App;
