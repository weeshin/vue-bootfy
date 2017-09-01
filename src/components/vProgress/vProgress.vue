<template>
  <div class="progress">
    <div :class="['progress-bar', classList]" role="progressbar"      
      :style="styleClass"
      :aria-valuenow="now"
      :aria-valuemin="min"
      :aria-valuemax="max">
      {{ progressText }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      vStyle: {
        type: String,
        default: null
      },
      stripe: {
        type: Boolean,
        default: false
      },
      animate: {
        type: Boolean,
        default: false
      },
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
      },
      showLabel: {
        type: Boolean,
        default: false
      },
      height: {
        type: Number,
        default: 20
      },
      interval: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        progressText: '',
        current: this.now
      };
    },
    computed: {
      classList: function() {
        const classList = [];

        switch (this.vStyle) {
          case 'success':
            classList.push('bg-success');
            break;
          case 'info':
            classList.push('bg-info');
            break;
          case 'warning':
            classList.push('bg-warning');
            break;
          case 'danger':
            classList.push('bg-danger');
            break;
          default:
        }

        if (this.stripe) {
          classList.push('progress-bar-striped');
        }

        if (this.animate) {
          classList.push('progress-bar-animated');
        }

        return classList;
      },
      styleClass: function() {
        return 'width: ' + this.current + '%; ' + 'height: ' + this.height + 'px;';
      }
    },
    watch: {
      current() {
        if (this.current >= this.max) {
          clearInterval(this.$data._process);
          console.log('clearInterval');
        }
        this.$data.progressText = this.current + '%';
      }
    },
    methods: {
      start() {
        this.$data._process = setInterval(() => {
          if (this.current >= this.max) {
            this.current = 0;
          }
          this.current += 1;
          console.log(this.current);
        }, this.interval);
      }
    },
    mounted() {
      if (this.$data._process) {
        clearInterval(this.$data._process);
      }
    }
  };
</script>
