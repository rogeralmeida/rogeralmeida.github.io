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
            text: 'Roger Almeida'
        },
        subtitle: {
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
                name: '2002',
                label: '<b>Developer</b> Delphi, Java, Ruby, Python, Javascript'
            }, {
                name: '2015',
                label: '<b>Delivery Lead @ Tyro<b> Lead the delivery of Tyro Business Loan'
            }, {
                name: '2017',
                label: '<b>2017: Delivery Lead @ Tyro</b> Delivery Lead for the firt "You build it, you run it" team inside Tyro®. Cloud adoption journey.'
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