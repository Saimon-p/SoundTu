
Highcharts.chart("container", {
  chart: {
    backgroundColor: "transparent",
    type: "pie",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  title: {
    text: "",
  },
  tooltip: {
    backgroundColor: "black",
    borderWidth: 0,
    shadow: false,
    style: {
      color: "#FFFFFF",
      fontSize: "1em",
      fontFamily: "inter",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      allowPointSelect: false,
      cursor: "pointer",
      borderWidth: 1,
      borderRadius: 3,
      borderColor: "white",
      dataLabels: [
        {
          enabled: true,
          connectorColor: "white",
          connectorWidth: 3,
          distance: 40,
          format: "{point.name}<br>{point.percentage}%",
          style: {
            fontSize: "1.5em",
            color: "#FFFFFF",
            textOutline: "none",
            fontFamily: "inter",
            fontWeight: "none",
          },
        },
      ],
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Attivita Musicale",
      data: [
       {
         name: "No",
         y: 63,
         color: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#043c7c'],
                        [1, '#3dccf8']
                    ]
                }
            },
        {
          sliced: true,
          selected: true,
          name: "Si",
          y: 37,
            color: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#e11af3'],
                        [1, '#851acc']

                    ]
                }
        },
      ],
    },
  ],
});
