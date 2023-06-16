console.log("test");
const datatable = new simpleDatatables.DataTable("#project-status", {
  paging: false,
  tabIndex: 1,
});
(function () {

  // activity chart
  var options_earning = {
    series: [{
      name: "Earning",
      data: [4, 3, 3, 3, 4, 3, 3,4, 5,3.5, 2.5, 2.5],
    }, ],
    chart: {
      height: 100,
      type: "bar",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 3,
        color: "var(--theme-deafult)",
        opacity: 0.25,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'last',
        columnWidth: "25%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S", "s", "m", "t", "w", "t"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["var(--theme-deafult)"],
  };

  var chart_earning = new ApexCharts(
    document.querySelector("#earnings-chart"),
    options_earning
  );
  chart_earning.render();

  // total client chart
  var options_client = {
    series: [{
      data: [0,15, 15, 10, 10, 20,20, 25,25, 25]
    }],
    chart: {
      type: 'area',
      height: 145,
      toolbar: {
        show: false
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'category',
      categories: ["jan", "feb", "mar", "apr", "may", "jun", "july", "aug", "sep", "oct"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      }
    },
    grid: {
      show: false,
      padding: {
        left: -60
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      hover: {
        sizeOffset: 4
      }
    },
    colors: ["#F99B0D"],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100],
      }
    }
  };

  var chart_client = new ApexCharts(document.querySelector("#total-client"), options_client);
  chart_client.render();

  // project overview chart
  var options_overview = {
    series: [{
        name: "Earning",
        type: "line",
        data: [120, 250, 70, 330, 140, 230, 90, 280, 40, 150, 350, 150, 350],
      },
      {
        name: "Order",
        type: "line",
        data: [80, 200, 150, 200, 100, 150, 110, 200, 110, 200, 150,80, 30 ],
      },
    ],
    chart: {
      height: 240,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.08,
      },
    },
    stroke: {
      width: [2, 2, 2],
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#009DB5", "#83BF6E"],
    fill: {
      opacity: 1,
      type: 'solid',
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    xaxis: {
      type: "category",
      tickAmount: 4,
      tickPlacement: "between",
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        color: "var(--chart-border)",
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      tickPlacement: "between",
      labels: {
        formatter: function (val) {
          return val + "K";
        },
        offsetX: -5,
      }
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    responsive: [{
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    }, ],
  };

  var chart_overview = new ApexCharts(
    document.querySelector("#project-overview"),
    options_overview
  );
  chart_overview.render();

  // bar overview chart
  var options_bar = {
    series: [{
      name: "Revenue",
      data: [
        30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40,
        11, 28, 40, 11, 28, 40, 11, 28, 40, 11, 11, 28, 40, 11, 28, 40, 11, 28, 40, 11,
      ],
    }, ],
    chart: {
      type: "bar",
      height: 180,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    colors: ["var(--chart-dashed-border)"],
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    fill: {
      opacity: 0.7,
    },
    tooltip: {
      enabled: false,
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
    responsive: [{
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    }, ],
  };

  var chart_bar = new ApexCharts(
    document.querySelector("#project-bar"),
    options_bar
  );
  chart_bar.render();

  // learning chart
  var optionslearning = {
    series: [
      {
        name: "growth",
        type: "line",
        data: [25, 30, 43, 25, 38, 25, 33, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 30, 41, 25, 36, 25, 31, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 29, 37, 25, 34, 25, 29, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 28, 34, 25, 32, 25, 28, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 27, 30, 25, 28, 25, 27, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 26, 24, 25, 24, 25, 24, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 26, 20, 25, 21, 25, 23, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 24, 16, 25, 18, 25, 22, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 23, 12, 25, 15, 25, 21, 25],
      },
      {
        name: "growth",
        type: "line",
        data: [25, 23, 10, 25, 13, 25, 19, 25],
      },
      {
        name: "growth",
        type: "area",
        data: [25, 28, 37, 25, 33, 25, 27, 25],
      },
    ],
    chart: {
      height: 315,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: [
      "var(--theme-deafult)",
      "#F47DEA",
      "#FFA941",
      "#FFC200",
      "#54BA4A",
      "#3DA831",
      "#57B9F6",
      "#FF3377",
      "#773ACE",
      "#945CFF",
      "#7366ff",
    ],
    stroke: {
      width: 1.5,
      curve: "smooth",
    },
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          fillColor: "#7064F5",
          strokeColor: "var(--white)",
          size: 6,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#7064F5",
          strokeColor: "var(--white)",
          size: 6,
        },
        {
          seriesIndex: 2,
          dataPointIndex: 3,
          fillColor: "#7064F5",
          strokeColor: "var(--white)",
          size: 6,
        },
      ],
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep 5",
        "Sep 8",
        "Sep 12",
        "Sep 16",
        "Sep 18",
        "Sep 17",
        "Sep 23",
        "Sep 26",
      ],
      tickAmount: 12,
      labels: {
        style: {
          colors: "var(--chart-text-color)",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      type: [
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "solid",
        "gradient",
      ],
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 80, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        style: {
          colors: "var(--chart-text-color)",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 265,
          },
        },
      },
    ],
  };

  var learningchart = new ApexCharts(
    document.querySelector("#learning-chart"),
    optionslearning
  );
  learningchart.render();

  // activity chart
  var optionsactivity = {
    series: [
      {
        name: "Activity",
        data: [2, 4, 2.5, 1.5, 5.5, 1.5, 4],
      },
    ],
    chart: {
      height: 300,
      type: "bar",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 5,
        color: "#7064F5",
        opacity: 0.35,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "30%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S"],
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          colors: "var(--chart-text-color)",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val) {
          return val + " " + "Hr";
        },
        style: {
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          colors: "var(--chart-text-color)",
        },
      },
    },
    grid: {
      borderColor: "var(--chart-dashed-border)",
      strokeDashArray: 5,
    },
    colors: ["#7064F5", "#8D83FF"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#7064F5", "#8D83FF"],
        opacityFrom: 0.98,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  };

  var chartactivity = new ApexCharts(
    document.querySelector("#activity-chart"),
    optionsactivity
  );
  chartactivity.render();

  // upcoming event chart
  var upcomingoptions = {
    series: [
      {
        data: [
          {
            x: "Team Meetup",
            y: [
              new Date("2022-01-20").getTime(),
              new Date("2022-03-8").getTime(),
            ],
            strokeColor: "var(--theme-deafult)",
            fillColor: "var(--white)",
          },
          {
            x: "Theme Development",
            y: [
              new Date("2022-01-8").getTime(),
              new Date("2022-02-30").getTime(),
            ],
            strokeColor: "#54BA4A",
            fillColor: "var(--white)",
          },
          {
            x: "UI/UX Design",
            y: [
              new Date("2022-02-01").getTime(),
              new Date("2022-03-10").getTime(),
            ],
            strokeColor: "#FFAA05",
            fillColor: "var(--white)",
          },
          {
            x: "Logo Creater",
            y: [
              new Date("2022-02-10").getTime(),
              new Date("2022-03-15").getTime(),
            ],
            strokeColor: "#FF3364",
            fillColor: "var(--white)",
          },
        ],
      },
    ],
    chart: {
      height: 305,
      type: "rangeBar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "50%",
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        return label;
      },
      textAnchor: "middle",
      offsetX: 0,
      offsetY: 0,
      background: {
        enabled: true,
        foreColor: "var(--chart-text-color)",
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        opacity: 0.9,
      },
    },
    xaxis: {
      type: "datetime",
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["var(--light-background)", "var(--white)"],
        opacity: 1,
      },
    },
    stroke: {
      width: 2,
    },
    states: {
      normal: {
        filter: {
          type: "none",
        },
      },
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
        },
      },
    },
    responsive: [
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 295,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 370,
          },
        },
      },
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  var upcomingchart = new ApexCharts(
    document.querySelector("#upcomingchart"),
    upcomingoptions
  );
  upcomingchart.render();

  // lesson charts
  function lessonCommonOption(data) {
    return {
      series: data.lessonYseries,
      chart: {
        type: "donut",
        height: 80,
      },
      colors: data.color,
      legend: {
        show: false,
      },
      stroke: {
        width: 1,
        colors: "var(--white)",
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                fontSize: "11px",
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
                color: "var(--chart-text-color)",
                offsetY: -12,
                formatter: function (val) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: false,
                label: "Total",
                fontSize: "11px",
                fontFamily: "Rubik, sans-serif",
              },
            },
          },
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
          },
        },
      },
    };
  }

  const lesson1 = {
    color: [
      "var(--theme-deafult)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
    ],
    lessonYseries: [20, 5, 5, 5, 5, 5, 5],
  };

  const lessonactivechart1 = document.querySelector("#lessonChart1");
  if (lessonactivechart1) {
    var lessonChart1 = new ApexCharts(
      lessonactivechart1,
      lessonCommonOption(lesson1)
    );
    lessonChart1.render();
  }

  // lesson vue data
  const lesson2 = {
    color: [
      "var(--theme-deafult)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
    ],
    lessonYseries: [50, 10, 10, 10],
  };

  const lessonactivechart2 = document.querySelector("#lessonChart2");
  if (lessonactivechart2) {
    var lessonChart2 = new ApexCharts(
      lessonactivechart2,
      lessonCommonOption(lesson2)
    );
    lessonChart2.render();
  }

  // lesson bootstrap data
  const lesson3 = {
    color: [
      "var(--theme-deafult)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
      "var(--chart-progress-light)",
    ],
    lessonYseries: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  };

  const lessonactivechart3 = document.querySelector("#lessonChart3");
  if (lessonactivechart3) {
    var lessonChart3 = new ApexCharts(
      lessonactivechart3,
      lessonCommonOption(lesson3)
    );
    lessonChart3.render();
  }
})();
