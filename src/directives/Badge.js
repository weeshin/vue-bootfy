export default {
  bind(el, binding) {
    el.classList.add('badge');
    let pill = binding.value.pill;
    (pill === true) ? el.classList.add('badge-pill') : null;

    let style = binding.value.vstyle;
    switch(style) {
      case 'primary':
        el.classList.add('badge-primary');
        break;
      case 'secondary':
        el.classList.add('badge-secondary');
        break;
      case 'success':
        el.classList.add('badge-success');
        break;
      case 'danger':
        el.classList.add('badge-danger');
        break;
      case 'warning':
        el.classList.add('badge-warning');
        break;
      case 'info':
        el.classList.add('badge-info');
        break;
      case 'light':
        el.classList.add('badge-light');
        break;
      case 'dark':
        el.classList.add('badge-dark');
        break;
    }

    console.log('bind', style);
  }
}
