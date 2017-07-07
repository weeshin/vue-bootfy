<template>
  <div :class="['btn-group', show, upClassName]">

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

    <div :class="['dropdown-menu', rightAlignClassName]">
      <button v-for="item in items" class="dropdown-item" type="button">{{item.name}}</button>
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
        default: 'Select Item'
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
        switch (this.vStyle) {
          case 'primary':
            return 'btn-primary';
          case 'secondary':
            return 'btn-secondary';
          case 'success':
            return 'btn-success';
          case 'info':
            return 'btn-info';
          case 'warning':
            return 'btn-warning';
          case 'danger':
            return 'btn-danger';
          default:
        }
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
      }
    },
    methods: {
      onClick() {
        this.expanded = !this.expanded;
      }
    }
  };
</script>
