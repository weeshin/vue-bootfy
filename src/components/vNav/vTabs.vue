<template>
  <div class="tabs">
    <v-nav  justified tabs>
      <v-nav-item v-for="(tab, index) in tabs" :key="index" @click="setTab(index)" href="#" :active="tab.active">
        {{ tab.title }}
      </v-nav-item>
    </v-nav>

    <div :class="['tab-content']" ref="tabsContainer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import {observe} from '../../util';

export default {
  props: {
    value: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      currentTab: this.value,
      tabs: []
    };
  },
  watch: {
    currentTab(val, old) {
      if (val === old) {
        return;
      }

      // this.$root.$emit('changed::tab', this, val, this.tabs[val]);
      // this.$emit('input', val);
      // this.tabs[val].$emit('click');
    },
    value(val, old) {
      if (val === old) {
        return;
      }
    }
  },
  methods: {
    updateTabs() {
      if (this.$slots.default) {
        this.tabs = this.$slots.default.filter((tab) => tab.componentInstance || false)
              .map((tab) => tab.componentInstance);
      } else {
        this.tabs = [];
      }

      console.log('updateTabs');
    },
    setTab(index) {
      this.tabs.forEach((t) => {
        this.$set(t, 'show', false);
        this.$set(t, 'active', false);
      });
      this.$set(this.tabs[index], 'show', true);
      this.$set(this.tabs[index], 'active', true);
      console.log('set tab');
    }
  },
  mounted() {
    this.updateTabs();

    // this.tabs.forEach((t) => {
    //   this.$set(t, 'show', true);
    // });

    this.setTab(0);

    observe(this.$refs.tabsContainer, this.updateTabs.bind(this));

  }
};
</script>
