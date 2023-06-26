(function () {
  // revenue chart js
  var options_revenue = {
    series: [{
        name: 'Sales',
        data: [5, 25, 3, 20, 15]
      },
      {
        name: 'Revenue',
        data: [5, 15, 3, 14, 15]
      }
    ],
    chart: {
      height: 140,
      type: 'line',
      toolbar: {
        show: false
      },
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed'],
      tickAmount: 6,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 6,
      position: "back",
    },
    colors: ['#80be70', '#c8e7e5'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#029eb4'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    legend: {
        show: false,
    },
    yaxis: {
      min: 0,
      max: 30,
      tickAmount: 3,
    }
  };

  var chart_revenue = new ApexCharts(document.querySelector("#revenue-chart"), options_revenue);
  chart_revenue.render();

  // pipeline chart
  var options_pipeline = {
    series: [10, 60, 30],
    labels: ['Store', 'Ad', 'Search'],
    chart: {
      width: 270,
      height: 270,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#f99b0d", "#009DB5", "#7fbe71"],
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex]
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {  
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var chart_pipeline = new ApexCharts(document.querySelector("#pipeline-chart"), options_pipeline);
  chart_pipeline.render();

})();