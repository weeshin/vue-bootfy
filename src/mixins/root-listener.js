
const RL = '_ROOT_LISTENER_';

export default {
  methods: {
    addRootListener(event, callback) {
      if(!this[RL]) {
        this[RL] = [];
      }
      this[RL].push({event, callback});
      this.$root.$on(event, callback);
      return this;
    }
  },
  destroyed() {
    if(!this[RL]) {
      this[RL].forEach( {event, callback} => this.$root.$off(event, callback));
      this[RL] = [];
    }
  }
}
