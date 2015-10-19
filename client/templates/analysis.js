Template.analysis.rendered = function() {
  var chartData = [
    {
        "date": "01-15",
        "hoursWorked": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "billableHours": 40.71,
        "duration": 408
    },
    {
        "date": "02-15",
        "hoursWorked": 371,
        "townName": "Washington",
        "townSize": 14,
        "billableHours": 38.89,
        "duration": 482
    },
    {
        "date": "03-15",
        "hoursWorked": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "billableHours": 34.22,
        "duration": 562
    },
    {
        "date": "04-15",
        "hoursWorked": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "billableHours": 30.35,
        "duration": 379
    },
    {
        "date": "05-15",
        "hoursWorked": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "billableHours": 25.83,
        "duration": 501
    },
    {
        "date": "06-15",
        "hoursWorked": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "billableHours": 30.46,
        "duration": 443
    },
    {
        "date": "07-15",
        "hoursWorked": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "billableHours": 29.94,
        "duration": 405
    },
    {
        "date": "08-15",
        "hoursWorked": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "billableHours": 29.76,
        "duration": 309
    },
    {
        "date": "09-15",
        "hoursWorked": 218,
        "townName": "Dalas",
        "townSize": 17,
        "billableHours": 32.8,
        "duration": 287
    }
   
];
var chart = AmCharts.makeChart("chartdiv", {
    "export": {
          "enabled": true,
          "libs": {
            "path": "http://amcharts.com/lib/3/plugins/export/libs/"
          },
        },
  type: "serial",
  dataDateFormat: "MM-YYYY",
  dataProvider: chartData,

  addClassNames: true,
  startDuration: 1,
  color: "#FFFFFF",
  marginLeft: 0,

  categoryField: "date",
  categoryAxis: {
    parseDates: true,
    minPeriod: "DD",
    autoGridCount: false,
    gridCount: 19,
    gridAlpha: 1,
    gridColor: "#FFFFFF",
    axisColor: "#555555",
    dateFormats: [{
        period: 'DD',
        format: 'DD'
    }, {
        period: 'WW',
        format: 'MMM DD'
    }, {
        period: 'MM',
        format: 'MMM'
    }, {
        period: 'YYYY',
        format: 'YYYY'
    }]
  },

  valueAxes: [{
    id: "a1",
    title: "hours",
    gridAlpha: 0,
    axisAlpha: 0
  },{
    id: "a2",
    position: "right",
    gridAlpha: 0,
    axisAlpha: 0,
    labelsEnabled: false
  },{
    id: "a3",
    title: "duration",
    position: "right",
    gridAlpha: 0,
    axisAlpha: 0,
    inside: true,
    duration: "mm",
    durationUnits: {
        DD: "d. ",
        hh: "h ",
        mm: "min",
        ss: ""
    }
  }],
  graphs: [{
    id: "g1",
    valueField:  "hoursWorked",
    title:  "hours",
    type:  "column",
    fillAlphas:  0.5,
    valueAxis:  "a1",
    balloonText:  "[[value]] hours",
    legendValueText:  "[[value]] hrs",
    legendPeriodValueText:  "total: [[value.sum]] hrs",
    lineColor:  "#263138",
    alphaField:  "alpha",
  },{
    id: "g2",
    valueField: "billableHours",
    classNameField: "bulletClass",
    title: "billable hours/dept",
    type: "line",
    valueAxis: "a2",
    lineColor: "#786c56",
    lineThickness: 1,
    legendValueText: "[[description]]/[[value]]",
    descriptionField: "townName",
    bullet: "round",
    bulletSizeField: "townSize",
    bulletBorderColor: "#786c56",
    bulletBorderAlpha: 1,
    bulletBorderThickness: 2,
    bulletColor: "#000000",
    labelText: "[[townName2]]",
    labelPosition: "right",
    balloonText: "billableHours:[[value]]",
    showBalloon: true,
    animationPlayed: true,
  },{
    id: "g3",
    title: "duration",
    valueField: "duration",
    type: "line",
    valueAxis: "a3",
    lineColor: "#ff5755",
    balloonText: "[[value]]",
    lineThickness: 1,
    legendValueText: "[[value]]",
    bullet: "square",
    bulletBorderColor: "#ff5755",
    bulletBorderThickness: 1,
    bulletBorderAlpha: 1,
    dashLengthField: "dashLength",
    animationPlayed: true
  }],

  chartCursor: {
    zoomable: false,
    categoryBalloonDateFormat: "MM",
    cursorAlpha: 0,
    valueBalloonsEnabled: false
  },
  legend: {
    bulletType: "round",
    equalWidths: false,
    valueWidth: 120,
    useGraphSettings: true,
    color: "#FFFFFF"
  }
});

  // store the chart in the data context in case you need it later
  this.data.chart = chart;
};

