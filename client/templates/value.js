Template.value.rendered = function() {
  var chart = AmCharts.makeChart( "chartdiv", {
    "type": "serial",
    "theme": "dark",
    "marginRight":30,
    "legend": {
        "equalWidths": false,
        "periodValueText": "total: [[value.sum]]",
        "position": "top",
        "valueAlign": "left",
        "valueWidth": 100
    },
    "dataProvider": [{
        "month": 1994,
        "meals": 1587,
        "beer": 650,
        "softdrinks": 300,
        "coffee": 121
    }, {
        "month": 1995,
        "meals": 1567,
        "beer": 683,
        "softdrinks": 300,
        "coffee": 146
    }, {
        "month": 1996,
        "meals": 1617,
        "beer": 691,
        "softdrinks": 300,
        "coffee": 138
    }, {
        "month": 1997,
        "meals": 1630,
        "beer": 642,
        "softdrinks": 300,
        "coffee": 127
    }, {
        "month": 1998,
        "meals": 1660,
        "beer": 699,
        "softdrinks": 300,
        "coffee": 105
    }, {
        "month": 1999,
        "meals": 1683,
        "beer": 721,
        "softdrinks": 300,
        "coffee": 109
    }, {
        "month": 2000,
        "meals": 1691,
        "beer": 737,
        "softdrinks": 300,
        "coffee": 112
    }, {
        "month": 2001,
        "meals": 1298,
        "beer": 680,
        "softdrinks": 300,
        "coffee": 101
    }, {
        "month": 2002,
        "meals": 1275,
        "beer": 664,
        "softdrinks": 300,
        "coffee": 97
    }, {
        "month": 2003,
        "meals": 1246,
        "beer": 648,
        "softdrinks": 300,
        "coffee": 93
    }, {
        "month": 2004,
        "meals": 1318,
        "beer": 697,
        "softdrinks": 300,
        "coffee": 111
    }, {
        "month": 2005,
        "meals": 1213,
        "beer": 633,
        "softdrinks": 300,
        "coffee": 87
    }, {
        "month": 2006,
        "meals": 1199,
        "beer": 621,
        "softdrinks": 300,
        "coffee": 79
    }, {
        "month": 2007,
        "meals": 1110,
        "beer": 210,
        "softdrinks": 300,
        "coffee": 81
    }, {
        "month": 2008,
        "meals": 1165,
        "beer": 232,
        "softdrinks": 300,
        "coffee": 75
    }, {
        "month": 2009,
        "meals": 1145,
        "beer": 219,
        "softdrinks": 300,
        "coffee": 88
    }, {
        "month": 2010,
        "meals": 1163,
        "beer": 201,
        "softdrinks": 300,
        "coffee": 82
    }, {
        "month": 2011,
        "meals": 1180,
        "beer": 285,
        "softdrinks": 300,
        "coffee": 87
    }, {
        "month": 2012,
        "meals": 1159,
        "beer": 277,
        "softdrinks": 300,
        "coffee": 71
    }],
    "valueAxes": [{
        "stackType": "regular",
        "gridAlpha": 0.07,
        "position": "left",
        "title": "Cost"
    }],
    "graphs": [{
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Meals",
        "valueField": "meals"
    }, {
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Beer",
        "valueField": "beer"
    }, {
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Soft Drinks",
        "valueField": "softdrinks"
    }, {
        "balloonText": "<img src='http://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
        "fillAlphas": 0.6,
        "lineAlpha": 0.4,
        "title": "Coffee",
        "valueField": "coffee"
    }],
    "plotAreaBorderAlpha": 0,
    "marginTop": 10,
    "marginLeft": 0,
    "marginBottom": 0,
    "chartScrollbar": {},
    "chartCursor": {
        "cursorAlpha": 0
    },
    "categoryField": "month",
    "categoryAxis": {
        "startOnAxis": true,
        "axisColor": "#DADADA",
        "gridAlpha": 0.07,
        "title": "Month",
    },
    "export": {
      "enabled": true
     }
});

  // store the chart in the data context in case you need it later
  this.data.chart = chart;
};