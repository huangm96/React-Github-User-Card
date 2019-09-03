import React from "react"
import { Card, Icon, Image } from "semantic-ui-react";

const MyGithubCard = (props) => {
    console.log(props)
    const { avatar_url, name, bio, login,location, html_url,followers, following } = props.myGithubInfo;
    return (
      <div className="myCardContainer">
        <Card className="myCard">
          <Image
            className="myCard-image"
            src={avatar_url}
            wrapped
            ui={false}
          />

          <Card.Content>
            <Card.Header>
              <h3>{name}</h3>
            </Card.Header>

            <Card.Description>
              <span>Username:{login} </span>
              <br />
              <span>Location:{location || "none"} </span> <br />
              <span>
                Profile: <a href={html_url}>{`${html_url}`}</a>
              </span>
              <br />
              <span>Followers: {followers}</span> <br />
              <span>Following: {following}</span> <br />
              <span>Bio: {bio || "none"}</span> <br />
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
}

export default MyGithubCard;