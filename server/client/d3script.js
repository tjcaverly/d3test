d3.select("body")
      .selectAll("p")
      .data([1,2,3])
      .enter()
      .append("p")
      .text(function(d) {return d;});