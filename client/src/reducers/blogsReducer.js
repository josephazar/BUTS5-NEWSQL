import mapKeys from 'lodash/mapKeys';
import omit from 'lodash/omit';

import { FETCH_BLOGS, FETCH_BLOG, DELETE_BLOG } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_BLOG:
      const blog = action.payload;
      return { ...state, [blog._id]: blog };
    case FETCH_BLOGS:
      return { ...state, ...mapKeys(action.payload, '_id') };
    case DELETE_BLOG:
      return omit(state, action.payload); // Here, action.payload should be the id of the deleted blog.
    default:
      return state;
  }
}
