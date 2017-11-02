export default {
  bind(el, binding) {
    el.classList.add('btn');
    let style = el.getAttribute('vStyle');
    let outline = el.hasAttribute('outline');

    let btnStyle = "btn-"+style;
    if(outline) {
      btnStyle = "btn-outline-" + style;
    }
    el.classList.add(btnStyle);

    // button size
    let size = el.getAttribute('size');
    if(size === 'lg' || size === 'sm') {
      el.classList.add('btn-'+size);
    }

    // block level
    let block = el.hasAttribute('block');
    if(block) {
      el.classList.add('btn-block');
    }

    let active = el.hasAttribute('active');
    if(active) {
      el.classList.add('active');
    }
  }
}
