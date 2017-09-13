var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

export default {
  bind(el, binding) {
    let text = marked(binding.value.content);
    el.innerHTML = text;
    var elements = el.getElementsByTagName("table");
    for(var i=0; i<elements.length; i++) {
      elements[i].classList.add('table', 'table-striped', 'table-bordered', 'table-sm');
    }
  }
}
