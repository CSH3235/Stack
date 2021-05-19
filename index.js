
d3.selectAll('.span_hor')
    .datum(function(){return this.dataset;})
    .style("width","10%") // 초기 값
    .transition().duration(1500) // 1.5초
    .style("width",d =>d.val); // duration 동안 움직이는 최종 값


var w = 250, h = 250;

d3.select(".cir_graph")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "graphWrap");
var graphWrap = d3.select("#graphWrap");

var graphData = [50, 30, 12, 5];
var pie = d3.pie();
var arc = d3.arc().innerRadius(40).outerRadius(100);

var oneGraph = graphWrap.selectAll("path").data(pie(graphData));
oneGraph.enter()
    .append("path")
    .attr("class", "pie") // 클래스 추가
    // .attr("d", arc) // 부채꼴 지정
    // .attr("stroke", "black")
    .attr("transform", "translate("+(w/2)+","+(h/2)+")")
    .style("fill", function(d, i) {
        return ["#d34e4e", "#9dbb19", "#5abae6", "#f7b358"][i];
    })
    .transition()
    .duration(1000)
    .delay(function(d, i) {
        return i * 1000;
    })
    .attrTween("d", function(d, i) {
        var interpolate = d3.interpolate(
            {startAngle : d.startAngle, endAngle : d.startAngle},
            {startAngle : d.startAngle, endAngle : d.endAngle}
        );
        return function(t){
            return arc(interpolate(t));
        }
    });

