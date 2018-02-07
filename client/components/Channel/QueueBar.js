import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Breadcrumb } from 'react-bootstrap';

const QueueBar = (props) => {
  const { queueList, isLoggedIn, toggleQueue, toggleDisable, enqueue, dequeue } = props;
  return (
    <div className="queue-bar-container">
      <h1 className="queue-bar-headline">Queue:</h1>
      <Breadcrumb className="queue-bar">
        {
          queueList.slice(0,7).map(queue => {
            return (
              <Breadcrumb.Item key={queue.userId}>
                <NavLink to={`/users/${queue.userId}`}>
                  {queue.userName},
                </NavLink>
              </Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
      {
        isLoggedIn && 
        <div className="queue-buttons">
          <Button
            className="queue-up"
            bsStyle="primary"
            disabled={toggleQueue}
            onClick={() => {
              enqueue();
              toggleDisable();
            }}
          >
            Join
          </Button>
          <Button
            className="queue-up"
            bsStyle="danger"
            onClick={() => {
              if (toggleQueue) {
                dequeue();
                toggleDisable();
              }
            }}
          >
            Leave
          </Button>
        </div>
      }
    </div>
  )
}

export default QueueBar;