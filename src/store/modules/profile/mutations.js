import { MUTATIONS } from '@/constants';

export default {
  [MUTATIONS.SET_PROFILE](state, { id, firstName, lastName, email, avatar }) {
    state.id = id;
    state.firstName = firstName;
    state.lastName = lastName;
    state.email = email;
    state.avatar = avatar;
  }
};
