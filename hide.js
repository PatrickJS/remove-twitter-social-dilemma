let done4 = false
let done3 = false

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
      const node3 = !done3 && mutation.target.querySelector('[aria-label="Who to follow"]')
      const node4 = !done4 && mutation.target.querySelector('[aria-label="Timeline: Trending now"]')

      if (node4 && node4.parentNode && node4.parentNode.parentNode) {
        node4.parentNode.parentNode.removeChild(node4.parentNode);
        done4 = true
      }

      if (node3 && node3.parentNode && node3.parentNode.parentNode) {
        node3.parentNode.parentNode.removeChild(node3.parentNode);
        done3 = true
      }

      if (done3 && done4) {
        observer.disconnect();
      }

    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true
});