import * as types from './types';

const defaultState = [
  {
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    name: 'Kanye West',
    photo: '/img/photos/kanye-west.jpg',
    publishDatetime: '2019-09-15 12:35:00',
    votes: {
      down: 36,
      up: 64,
    },
  },
  {
    category: 'Business',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    name: 'Mark Zuckerberg',
    photo: '/img/photos/mark-zuckerberg.jpg',
    publishDatetime: '2019-09-15 12:35:00',
    votes: {
      down: 64,
      up: 36,
    },
  },
  {
    category: 'Politics',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    name: 'Cristina Fernández de Kirchner',
    photo: '/img/photos/cristina-kirchner.jpg',
    publishDatetime: '2019-09-15 12:35:00',
    votes: {
      down: 64,
      up: 36,
    },
  },
  {
    category: 'Entertainment',
    description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    name: 'Malala Yousafzai',
    photo: '/img/photos/malala-yousafzai.jpg',
    publishDatetime: '2019-09-15 12:35:00',
    votes: {
      down: 36,
      up: 64,
    },
  },
];

const votePerson = (state, { index, voteType }) => {
  if (state[index]) {
    return state.map((person, key) => {
      if (index === key) {
        person.votes[voteType] += 1;
      }
      return person;
    });
  }

  return state;
};

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.VOTE_PERSON:
      return votePerson(state, action);

    default: return state;
  }
};

// Reducer
export default reducer;
