<template>
  <nav :aria-label="title">
    <ul :class="['pagination', sizeClass]">
      <li class="page-item"
          :class="[{disabled: currentPage === 1}]">
        <a class="page-link" href="#" aria-label="Previous" @click.stop.prevent="btnClick(currentPage-1)">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li v-for="n in buildRange()" class="page-item" :class="[{ active: currentPage === n}]" >
        <a class="page-link" @click.stop.prevent="btnClick(n)">{{n}}</a>
      </li>
      <li class="page-item"
          :class="[{disabled: currentPage === totalPages}]">
        <a class="page-link" href="#" aria-label="Next" @click.stop.prevent="btnClick(currentPage+1)">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 7
    }
  },
  computed: {
    sizeClass() {
      switch (this.size) {
        case 'large':
          return 'pagination-lg';
        case 'small':
          return 'pagination-sm';
        default:
      }
    }
  },
  methods: {
    buildRange() {
      var max = this.max;

      if (this.totalPages < max) {
        max = this.totalPages;
      }

      const m = Math.floor(max / 2);
      const last = Math.max(Math.min(this.currentPage + m, this.totalPages), max);

      console.log('Current Page: ' + this.currentPage + ', m ' + m + ', last ' + last);
      const list = [];

      for (var i = last; i > last - max; i--) {
        list.push(i);
      }
      return list.reverse();
    },
    btnClick(page) {
      this.$emit('click', page);
    }
  }
};

</script>
