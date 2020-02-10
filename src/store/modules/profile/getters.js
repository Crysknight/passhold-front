export default {
  isLoggedIn({ id }) {
    return id !== null;
  },
  name({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
};
