/*
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

username will always be a string, status will always be either 'online' or 'offline' and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}
*/

const whosOnline = (friends) => {
    const avability = {}
    const offline = friends.filter(friend => friend.status === 'offline').map(f => f.username)
    const away = friends.filter(friend => friend.status === 'online' && friend.lastActivity > 10).map(f => f.username)
    const online = friends.filter(friend => friend.status === 'online' && friend.lastActivity <= 10).map(f => f.username)

       if(online.length > 0) {avability.online = online};
       if(offline.length > 0) {avability.offline = offline};
       if(away.length > 0) {avability.away = away};

return avability
    }

    console.log(whosOnline([{
        username: 'David',
        status: 'online',
        lastActivity: 10
      }, {
        username: 'Lucy', 
        status: 'online',
        lastActivity: 22
      }, {
        username: 'Bob', 
        status: 'online',
        lastActivity: 104
      }]));
/* 
describe('Given examples', function () {
  var friends

  it('Example test one of each', function () {
    friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]
    Test.assertDeepEquals(whosOnline(friends), {
      online: ['David'],
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example one of each')
  })
  
  it('Example test no one online', function () {
    friends = [{
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

    Test.assertDeepEquals(whosOnline(friends), {
      offline: ['Lucy'],
      away: ['Bob']
    }, 'Wrong result for example no one online')
  })
})
*/