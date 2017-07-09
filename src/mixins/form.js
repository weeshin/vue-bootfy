export default {
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    feedback: {
      type: Object,
      default: null
    }
  },
  computed: {
    controlGroupSizeClass: function() {
      switch (this.size) {
        case 'large':
          return 'form-control-lg';
        case 'small':
          return 'form-control-sm';
        default:
      }
    },
    feedbackStatusClass: function() {
      if (this.feedback !== null) {
        switch (this.feedback.status) {
          case 'success':
            return 'has-success';
          case 'warning':
            return 'has-warning';
          case 'danger':
            return 'has-danger';
          default:
        }
      }
    },
    feedbackControlClass: function() {
      if (this.feedback !== null) {
        switch (this.feedback.status) {
          case 'success':
            return 'form-control-success';
          case 'warning':
            return 'form-control-warning';
          case 'danger':
            return 'form-control-danger';
          default:
        }
      }
    }
  }
};