import * as types from './types';

// Action Creators
export const votePerson = (index, voteType) => ({
  index,
  voteType,
  type: types.VOTE_PERSON,
});
