<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </slot>
        <slot name="modal-body">
          <div class="modal-body"></div>
        </slot>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      const el = this.$el;

      el.style.display = 'block';
      el.classList.add('show');
      console.log('show');
    },
    close() {
      const el = this.$el;

      el.style.display = null;
      el.classList.remove('show');
    }
  }
};
</script>
