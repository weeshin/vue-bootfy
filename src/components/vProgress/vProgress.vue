<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar"
      :style="styleClass"
      :aria-valuenow="now"
      :aria-valuemin="min"
      :aria-valuemax="max">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      max: {
        type: Number,
        default: 100
      },
      min: {
        type: Number,
        default: 0
      },
      now: {
        type: Number,
        default: 0
      }
    },
    computed: {
      styleClass: function() {
        return 'width: ' + this.now + '%';
      }
    }
  };
</script>
