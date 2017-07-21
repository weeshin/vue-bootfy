
<script>
export default {
  name: 'v-input-group',
  props: {

  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
    var children = this.$slots.left;

    children.forEach((vNode) => {
      if (vNode && vNode.child) {
        console.log(vNode.child.tag);
      }
    });
  },
  render: function(h) {

    var left = this.$slots.left;
    var center = this.$slots.default;
    var right = this.$slots.right;

    const nodes = [];

    if (left) {
      nodes.push(h('div', {class: 'input-group-addon'}, left));
    }
    if (center) {
      nodes.push(center);
    }
    if (right) {
      console.log(right);
      nodes.push(h('div', {class: 'input-group-addon'}, right));
    }

    return h('div', {
      class: 'input-group'
    }, nodes);
  }
};
</script>
