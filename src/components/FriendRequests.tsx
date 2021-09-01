import { useQuery, useQueryClient } from 'react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Profile from './Profile';
import UserService from '../api/UserService';
import { ReactComponent as EmptyRequestsIcon } from '../assets/svgs/requests.svg';

function ReceivedRequestsEmpty() {
  return (
    <div className='requests-empty'>
      <EmptyRequestsIcon />
      <p className='requests-title'>No New Requests</p>
      <p className='requests-text'>
        No friend requests yet. Your friend requests will appear here <br />{' '}
        once you have one, or two.
      </p>
    </div>
  );
}

function SentRequestsEmpty() {
  return (
    <div className='requests-empty'>
      <EmptyRequestsIcon />
      <p className='requests-text'>
        When you send someone a friend request, it will appear here.
      </p>
    </div>
  );
}

export default function FriendRequests() {
  const queryClient = useQueryClient();
  const receivedRequests = useQuery<FriendRequest[], Error>(
    'receivedRequests',
    () =>
      UserService.fetchFriendRequests({
        type: 'received',
        status: 'pending',
      })
  );

  const sentRequests = useQuery<FriendRequest[], Error>('sentRequests', () =>
    UserService.fetchFriendRequests({
      type: 'sent',
      status: 'pending',
    })
  );

  function updateRequest(requestId: string, update: 'accept' | 'reject') {
    return async function () {
      await UserService.updateFriendRequest(requestId, update);
      queryClient.invalidateQueries('sentRequests');
    };
  }

  function cancelRequest(requestId: string) {
    return async function () {
      await UserService.cancelFriendRequest(requestId);
      queryClient.invalidateQueries('receivedRequests');
    };
  }

  return (
    <div className='community__friend-requests'>
      <div className='community__friend-requests-header'>
        <p className='title'>Friend Requests</p>
      </div>
      <div className='community__friend-requests-content'>
        <Tabs>
          <TabList>
            <Tab>
              Friend Requests
              {receivedRequests.data?.length ? (
                <span> ({receivedRequests.data.length})</span>
              ) : null}
            </Tab>

            <Tab>
              Sent Requests
              {sentRequests.data?.length ? (
                <span> ({sentRequests.data.length})</span>
              ) : null}
            </Tab>
          </TabList>

          <TabPanel>
            {receivedRequests.isLoading ? (
              <span>Loading...</span>
            ) : receivedRequests.isError ? (
              <span>{receivedRequests.error.message}</span>
            ) : !receivedRequests.data?.length ? (
              <ReceivedRequestsEmpty />
            ) : (
              <ul>
                {receivedRequests.data.map(({ _id, user1: sender }) => (
                  <li
                    key={sender._id}
                    className='community__friend-requests-item'
                  >
                    <Profile user={sender}></Profile>
                    <div className='community__friend-requests-item-actions'>
                      <button
                        type='button'
                        className='primary'
                        onClick={updateRequest(_id, 'accept')}
                      >
                        Accept
                      </button>
                      <button
                        type='button'
                        className='tertiary'
                        onClick={updateRequest(_id, 'reject')}
                      >
                        Decline
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>
          <TabPanel>
            {sentRequests.isLoading ? (
              <span>Loading...</span>
            ) : sentRequests.isError ? (
              <span>{sentRequests.error.message}</span>
            ) : !sentRequests.data?.length ? (
              <SentRequestsEmpty />
            ) : (
              <ul className='community__friend-requests-list'>
                {sentRequests.data.map(({ _id, user2: recipient }) => (
                  <li
                    key={recipient._id}
                    className='community__friend-requests-item'
                  >
                    <Profile user={recipient} />
                    <div className='community__friend-requests-item-actions'>
                      <button className='tertiary' onClick={cancelRequest(_id)}>
                        Cancel Request
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
