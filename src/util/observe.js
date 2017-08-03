
export default function observe(el, callback) {
  const MutationObserver = window.MutationObserver || window.WebkitMutationObserver;
  const eventListenerSupported = window.addEventListener;

  if (MutationObserver) {
    const obs = new MutationObserver(function(mutations) {
      if (mutations[0].addedNodes.length > 0 || mutations[0].removedNodes.length > 0) {
        callback();
      }
    });

    var config = {
      attributes: true,
      childList: true,
      characterData: true
    };

    obs.observe(el, config);
  } else if (eventListenerSupported) {
    el.addEventListener('DOMNodeInserted', callback, false);
    el.addEventListener('DOMNodeRemoved', callback, false);
  }
}
