import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const MyFollowerCard = props => {
  console.log(props);
  const {
    avatar_url,
    name,
    bio,
    login,
    location,
    html_url,
    followers,
    following
  } = props.follower;
  return (
    <div>
      <Card>
        <Image src={avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <h2>{name}</h2>
          </Card.Header>

          <Card.Description>
            <span>Username:{login} </span>
            <br />
            <span>Location:{location || "none"} </span> <br />
            <span>
              Profile: <a href={html_url}>{`${html_url}`}</a>
            </span>{" "}
            <br />
            <span>Followers: {followers}</span> <br />
            <span>Following: {following}</span> <br />
            <span>Bio: {bio || "none"}</span> <br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {followers} Followers
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default MyFollowerCard;
