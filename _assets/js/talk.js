import * as mermaid from 'mermaid'
import * as Reveal from 'reveal.js'
import * as head from 'reveal.js/lib/js/head.min.js'
import * as $ from 'jquery'

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  width: "100%",
  height: "100%",
  slideNumber: 'c/t',

  //transition: 'fade', //slide/none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    { src: '/assets/js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
    { src: '/assets/js/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
    { src: '/assets/js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
    { src: '/assets/js/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
    { src: '/assets/js/plugin/zoom-js/zoom.js', async: true },
    { src: '/assets/js/revealjs-animated.js', async: true }
    //{ src: '/assets/js/plugin/notes/notes.js', async: true }
  ]
});
Reveal.addEventListener('slidechanged', function (event) {
  event.currentSlide.querySelectorAll('.auto-fire').forEach(element => {
    Reveal.nextFragment();
  });

  event.currentSlide.querySelectorAll('.mermaid-lazy').forEach(element => {
    console.log('Changed slides and found mermaid diagrams');
    // let definition = element.getAttribute('data-chart-definition');
    let definition = element.textContent;
    let id = element.getAttribute('id');
    console.log(`About to render chart: '${definition}' on '${id}'`);
    mermaid.render(`generated-${id}`, definition, (svgGraph) => {
      console.log('Generated svg:');
      console.log(svgGraph);
      element.innerHTML = svgGraph;
      $(element.children[0]).css('max-width', '70%');
    });
  });
});

mermaid.initialize({
  startOnLoad: false,
  logLevel: 1,
  theme: 'dark',
  flowchart: {
    useMaxWidth: true,
    curve: 'basis',
    width: '100%',
    maxWidth: '100%'
  }
});

