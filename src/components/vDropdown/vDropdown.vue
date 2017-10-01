<template>
  <div :class="[btnGroupClassName, show, upClassName]">

    <button v-if="split" :class="['btn', className, sizeClassName]" type="button" :id="id" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="expanded">
      {{title}}
    </button>
    <button v-if="split" :class="['btn', className, sizeClassName, 'dropdown-toggle', 'dropdown-toggle-split']" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      @click="onClick">
      <span class="sr-only">Toggle Dropdown</span>
    </button>

    <button v-else :class="['btn', className, sizeClassName, 'dropdown-toggle']" type="button" :id="id" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="expanded" @click="onClick">
      {{title}}
    </button>

    <div :class="['dropdown-menu', show, rightAlignClassName]">
      <slot></slot>
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
      size: {
        type: String,
        default: null
      },
      id: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      items: {
        type: Array,
        default: null
      },
      split: {
        type: Boolean,
        default: false
      },
      up: {
        type: Boolean,
        default: false
      },
      rightAlign: {
        type: Boolean,
        default: false
      },
      inputBtnGroup: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        expanded: false
      };
    },
    computed: {
      show() {
        if (this.expanded) {
          return 'show';
        }
      },
      className: function() {
        const classlist = [];
        // classlist.push('dropdown-toggle');
        console.log(this.vStyle);

        switch (this.vStyle) {
          case 'primary':
            classlist.push('btn-primary');
            break;
          case 'secondary':
            classlist.push('btn-secondary');
            break;
          case 'success':
            classlist.push('btn-success');
            break;
          case 'info':
            classlist.push('btn-info');
            break;
          case 'warning':
            classlist.push('btn-warning');
            break;
          case 'danger':
            classlist.push('btn-danger');
            break;
        }
        return classlist;
      },
      sizeClassName: function() {
        if (this.size === 'sm') {
          return 'btn-sm';
        }
        if (this.size === 'md') {
          return 'btn-md';
        }
        if (this.size === 'lg') {
          return 'btn-lg';
        }
      },
      upClassName: function() {
        if (this.up) {
          return 'dropup';
        }
      },
      rightAlignClassName: function() {
        if (this.rightAlign) {
          return 'dropdown-menu-right';
        }
      },
      btnGroupClassName: function() {
        if (this.inputBtnGroup) {
          return 'input-group-btn';
        }
        return 'btn-group';
      }
    },
    methods: {
      onClick() {
        this.expanded = !this.expanded;
      }
    }
  };
</script>
