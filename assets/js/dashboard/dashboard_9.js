(function () {
  //1. Active users chart
  var options_active_users = {
    series: [
      {
        data: [20, 30, 40, 20, 50, 30, 20, 40, 25],
      },
    ],
    chart: {
      type: "line",
      height: 180,
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: "#7366ff",
        top: 5,
        left: 0,
        blur: 2,
        opacity: 0.2,
      },
    },
    colors: ["#7366FF"],
    fill: {
      type: ["solid"],
      opacity: 0.8,
      gradient: {
        shade: "light",
        type: "vertical",
      },
    },
    stroke: {
      show: true,
      curve: "stepline",
      width: 2,
    },
    grid: {
      show: true,
      borderColor: "var(--recent-border)",
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.2,
      },
      column: {
        colors: undefined,
        opacity: 0.2,
      },
      padding: {
        top: 2,
        right: 10,
        bottom: 0,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      tickAmount: undefined,
      tickPlacement: "between",

      labels: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: undefined,
      tickPlacement: "between",

      labels: {
        show: false,
      },
    },

    title: {
      show: false,
    },
    markers: {
      size: 3,
      fillColor: "var(--white)",
      strokeColor: "var(--theme-default)",

      hover: {
        size: 4,
        sizeOffset: 4,
      },
    },
  };

  var chart_active_users = new ApexCharts(
    document.querySelector("#chart-active-users"),
    options_active_users
  );
  chart_active_users.render();

  // 2. Order summary chart
  var options_summary_chart = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  var summary_chart = new ApexCharts(
    document.querySelector("#summary-chart"),
    options_summary_chart
  );
  summary_chart.render();
})();
