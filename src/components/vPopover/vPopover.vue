<template>
  <span>
    <span ref="trigger">
      <slot></slot>
    </span>

    <div ref="popover" class="popover" :class="[classname]" role="tooltip">
      <div class="popover-arrow"></div>
      <h3 class="popover-title">{{title}}</h3>
      <div class="popover-content">{{content}}</div>
    </div>
  </span>
</template>
<script>
import Tether from 'tether';

const AttachmentMap = {
  top: 'bottom center',
  bottom: 'top center',
  left: 'middle right',
  right: 'middle left'
};

const ClassName = {
  FADE: 'fade',
  SHOW: 'show'
};

const TetherClass = {
  element: false,
  enabled: false
};

const CLASS_PREFIX = 'bs-tether';


export default {
  props: {
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      default: 'right'
    },
    animation: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 1000
    },
    offset: {
      type: String,
      default: '0 0',
      validator(value) {
            // Regex test for a pair of units, either 0 exactly, px, or percentage
        return (/^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/).test(value);
      }
    },
    targetOffset: {
      type: String,
      default: '0 0',
        // Regex test for a pair of units, either 0 exactly, px, or percentage
      validator: (value) => (/^((0\s?)|([+-]?[0-9]+(px|%)\s?)){2}$/).test(value)
    },
    toggle: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showStatus: this.show
    };
  },
  computed: {
    classname() {
      const allclassnames = [];

      allclassnames.push('popover-' + this.placement);
      if (this.animation) {
        allclassnames.push('fade');
      }

      return allclassnames;
    }
  },
  watch: {
    hover() {

    }
  },
  methods: {
    show() {
      this.$data._popover.style.display = 'block';
      this.$data._tether = new Tether(this.tetherOption());
      this.$data._timeout = 0;

      this.$data._tether.position();
      this.$data._popover.classList.add(ClassName.SHOW);

      if (!this.toggle) {
        this.$data._timeout = setTimeout(() => this.hide(), this.delay);
      }
    },
    hide() {
      this.$data._popover.classList.remove(ClassName.SHOW);
      this.$data._popover.style.display = 'none';
      this.cleanupTether();

      // if (callback) {
      //   callback();
      // }

      if (!this.toggle && this.$data._timeout) {
        clearTimeout(this.$data._timeout);
        // console.log('clearTimeout');
      }
    },
    cleanupTether() {
      if (this._tether) {
        this.$data._tether.destroy();
      }
    },
    click() {
      // console.log('click');
      if (this.showStatus) {
        this.show();
      } else {
        this.hide();
      }
      this.showStatus = !this.showStatus;
    },
    tetherOption() {
      return {
        element: this.$data._popover,
        target: this.$data._trigger,
        classes: TetherClass,
        classPrefix: CLASS_PREFIX,
        attachment: AttachmentMap[this.placement],
        offset: this.offset,
        targetOffset: this.targetOffset
      };
    },
    enableHover() {
      // console.log('hover ' + this.hover);
      if (this.hover === true) {
        this.$data._trigger.addEventListener('mouseenter', this.click);
        this.$data._trigger.addEventListener('mouseleave', this.click);
      }
    },
    enableToggle() {
      if (this.toggle) {
        this.$data._trigger.addEventListener('click', this.click);
      }
    },
    enableDismissible() {
      if (this.dismissible) {
        this.$data._trigger.addEventListener('focus', this.focus, true);
        this.$data._trigger.addEventListener('blur', this.blur, true);
      }
    },
    focus() {
      // console.log('focus');
      this.show();
    },
    blur() {
      // console.log('blur');
      this.hide();
    }
  },
  mounted() {
    this.$data._trigger = this.$refs.trigger;
    this.$data._popover = this.$refs.popover;
    this.$data._popover.style.display = 'none';


    this.enableToggle();
    this.enableHover();
    this.enableDismissible();
  }
};
</script>
