const defaultBackgroundColor = '#86bbff';

// Initialize the annoying-background directive.
export default {
  bind(el, binding) {
    // Allow users to customise the color by passing an expression.
    const color = binding.expression || defaultBackgroundColor;

    console.log('color ' + color);
    // el might not be present for server-side rendering.
    if (el) {
      // Set the element's background color.
      el.style.backgroundColor = color;
    }
  }
};
