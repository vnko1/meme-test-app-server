export default {
  beforeCreate(event) {
    const { data } = event.params;

    if (!data.likes) data.likes = Math.floor(Math.random() * 100);
  },
};
