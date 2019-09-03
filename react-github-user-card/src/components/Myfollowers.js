import React, { useState} from "react"
import MyFollowerCard from './MyFollowerCard'

const MyFollowers = (props) => {
  
  console.log(props)
  
    return (
      <div>
        <section className="followers-list ">
        {props.myFollowers.map((follower) => {
          return <MyFollowerCard follower={follower} />;
        
        })}
        </section>
      </div>
    );
}

export default MyFollowers;