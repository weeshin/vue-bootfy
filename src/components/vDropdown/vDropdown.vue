<template>
  <div :class="[type, show]">

    <button :class="['btn', className, sizeClassName]" type="button" :id="id" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="expanded"
      @click="onClick">
      {{title}}
    </button>
    <button type="button" :class="['btn', className, sizeClassName, 'dropdown-toggle', 'dropdown-toggle-split']" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      @click="onClick">
      <span class="sr-only">Toggle Dropdown</span>
    </button>


    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
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
      type() {
        if (this.split) {
          return 'btn-group';
        }
        return 'dropdown';
      }
    },
    methods: {
      onClick() {
        this.expanded = !this.expanded;
      }
    }
  };
</script>
