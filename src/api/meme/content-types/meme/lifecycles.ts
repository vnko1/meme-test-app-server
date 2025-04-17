export default {
  beforeCreate(event) {
    const { data } = event.params;

    data.likes = Math.floor(Math.random() * 100);
  },
};
