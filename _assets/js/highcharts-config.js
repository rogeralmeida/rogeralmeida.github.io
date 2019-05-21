let ChartFactory = (() => {
    let map = [];
    map['roger-timeline'] = {
        chart: {
            type: 'timeline'
        },
        xAxis: {
            visible: false
        },
        yAxis: {
            visible: false
        },
        title: {
            text: 'Timeline of Space Exploration'
        },
        subtitle: {
            text: 'Info source: <a href="https://en.wikipedia.org/wiki/Timeline_of_space_exploration">www.wikipedia.org</a>'
        },
        colors: [
            '#4185F3',
            '#427CDD',
            '#406AB2',
            '#3E5A8E',
            '#3B4A68',
            '#363C46'
        ],
        series: [{
            data: [{
                name: 'First dogs',
                label: '2002: Developer',
                description: 'Delphi'
            }, {
                name: 'Sputnik 1',
                label: '2006: Developer',
                description: 'Java'
            }, {
                name: 'First human spaceflight',
                label: '2008: eXtreme Programming',
                description: 'First contact with agile'
            }, {
                name: 'First human on the Moon',
                label: '2010: ',
                description: 'First human on the Moon, and first space launch from a celestial body other than the Earth. First sample return from the Moon'
            }]
        }]
    };

    function build(name)  {
        return map[name];
    };

    return {
        build: build
    }
})();
export default ChartFactory;