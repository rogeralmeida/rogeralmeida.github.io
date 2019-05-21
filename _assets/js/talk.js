import * as mermaid from 'mermaid'
import * as Reveal from 'reveal.js'
import * as head from 'reveal.js/lib/js/head.min.js'
import * as $ from 'jquery'
import * as Highcharts from 'highcharts'
import ChartFactory from './highcharts-config'
require('highcharts/modules/timeline')(Highcharts);

$(() => {
  // Full list of configuration options available at:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: false,
    progress: true,
    history: true,
    center: true,
    width: "100%",
    height: "100%",
    slideNumber: 'c/t',

    dependencies: [
      { src: '/assets/js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
      { src: '/assets/js/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: '/assets/js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: '/assets/js/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
      { src: '/assets/js/plugin/zoom-js/zoom.js', async: true },
      { src: '/assets/js/revealjs-animated.js', async: true }
    ]
  });

  Reveal.addEventListener('slidechanged', function (event) {
    event.currentSlide.querySelectorAll('.auto-fire').forEach(element => {
      Reveal.nextFragment();
    });

    event.currentSlide.querySelectorAll('.mermaid-lazy').forEach(element => {
      let definition = element.textContent;
      let id = element.getAttribute('id');
      mermaid.render(`generated-${id}`, definition, (svgGraph) => {
        element.innerHTML = svgGraph;
        $(element.children[0]).css('max-width', '70%');
      });
    });

    event.currentSlide.querySelectorAll('.highchart').forEach(element => {
      console.log('Changed slides and found a highchart');
      let id = element.getAttribute('id');
      console.log(`${id} - ID for the highchart component`);
      let config = ChartFactory.build(id);
      if (config) {
        console.log(`Config for ${id}:\n`);
        console.log(config);
        Highcharts.chart(id, config);
      } else {
        console.log('Could not find a config for ' + id);
      }
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

});