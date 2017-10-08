export default {
  props: {
    id: {},
    value: {},
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localChecked: this.checked
    }
  }
}
