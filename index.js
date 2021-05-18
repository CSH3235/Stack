d3.selectAll('.span_hor')
  .datum(function(){return this.dataset;})
  .style("width","10%") // 초기 값
  .transition().duration(1500) // 1.5초
  .style("width",d =>d.val); // duration 동안 움직이는 최종 값
  