import * as mermaid from 'mermaid'
import * as $ from 'jquery'
import * as Highcharts from 'highcharts'
import ChartFactory from './highcharts-config'
require('highcharts/modules/timeline')(Highcharts);

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
    keyboard: {
      39: 'next',
      37: 'prev',
    },

    dependencies: [
      { src: '/assets/js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
      { src: '/assets/js/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: '/assets/js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      { src: '/assets/js/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
      { src: '/assets/js/plugin/zoom-js/zoom.js', async: true }
    ]
  });

  Reveal.addEventListener( 'fragmentshown', event => {
    // event.fragment = the fragment DOM element
    let element = event.fragment;
    if (element.classList.contains('animated-fragment')) {
      let classList = element.getAttribute('data-animated-classes').split(" ");
      console.log("Found this classes: " + classList);
      classList.forEach(clazz => { 
        //I wish there was a way to insert multiples :/
        //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
        element.classList.add(clazz);
      });
    }
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
        $(element.children[0]).css('height', '400px');
      });
    });

    event.currentSlide.querySelectorAll('.highchart').forEach(element => {
      let id = element.getAttribute('id');
      let config = ChartFactory.build(id);
      if (config) {
        Highcharts.chart(id, config);
      } else {
        console.log('Could not find a config for ' + id);
      }
    });

    event.currentSlide.querySelectorAll('.typed-fragment').forEach(element => {
      let definition = element.textContent;
      let id = element.getAttribute('id');
      if(id){
      let typed = new Typed(id, {
        strings: [definition],
        typeSpeed: 30
      });
    } else {
      console.error("For an object to use typed it MUST have a id!");
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