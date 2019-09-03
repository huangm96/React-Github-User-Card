import React, { useState} from "react"
import MyFollowerCard from './MyFollowerCard'

const MyFollowers = (props) => {
  
  console.log(props)
  
    return (
      <div>
        {props.myFollowers.map((follower) => {
         return <MyFollowerCard  follower={follower} />;
        })}
        
      </div>
    );
}

export default MyFollowers;