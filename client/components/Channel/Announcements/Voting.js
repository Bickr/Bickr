import React from 'react';

const Voting = (props) => {
  const { votingStatus } = props;
  return (
    <div>
      {
       votingStatus === true && 
        <div id="announcement-voting-container">
          <h1 id="announcement-voting-headline">Start Voting!</h1>
        </div>
      }
      {
       votingStatus === false && 
        <div id="announcement-voting-container">
          <h1 id="announcement-voting-headline">Voting disabled</h1>
        </div>
      }
    </div>
  )
}

export default Voting;