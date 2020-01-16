// define constants
const marginWidth = 50;
const svgWidth = 600;
const svgHeight = 400;
const margin = {top: marginWidth, right: marginWidth, bottom: marginWidth, left: marginWidth};
const plotWidth = svgWidth - margin.left - margin.right;
const plotHeight = svgHeight - margin.top - margin.bottom;
const cyls = [4, 6, 8];
const cylColors = ['red', 'blue', 'purple'];

function cleanup_data(d) {

    // unmentioned variables remain unchanged
    d.mpg  =  +d.mpg
    d.cyl  =  +d.cyl
    d.disp =  +d.disp
    d.hp   =  +d.hp
    d.wt   =  +d.wt
    d.am   =  +d.am
    d.gear =  +d.gear
    return d
}

function draw(cars) {

    // define svg size
    var scatterInner = d3.select('body')
                         .append('svg')
                         .attr('width', svgWidth + margin.left + margin.right)
                         .attr('height', svgHeight + margin.top + margin.bottom)
                         .attr('id', 'scatterPlot')
                         .append('g')
                         .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // create a plot border
    scatterInner.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', plotWidth)
                .attr('height', plotHeight)
                .attr('stroke', 'grey')
                .attr('fill', 'transparent');

    // disp scale
    const xScale = d3.scaleLinear()
                     .domain([d3.min(cars.map(d => d.disp)), d3.max(cars.map(d => d.disp))])
                     .range([0, plotWidth]);

    // mpg scale
    const yScale = d3.scaleLinear()
                     .domain([d3.min(cars.map(d => d.mpg)), d3.max(cars.map(d => d.mpg))])
                     .range([plotHeight, 0]);

    // wt scale
    const sizeScale = d3.scaleSqrt()
                        .domain([d3.min(cars.map(d => d.wt)), d3.max(cars.map(d => d.wt))])
                        .range([1, 10]);

    // cyl scale
    const colorScale = d3.scaleOrdinal()
                         .domain(cyls)
                         .range(cylColors);

    console.log(d3.extent(cars.map(d => d.disp)), cars.map(d => d.disp));

    // plot all data points in scatter plot
    scatterInner.selectAll('circle')
                .data(cars)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d.disp))
                .attr('cy', d => yScale(d.mpg))
                .attr('r', d => sizeScale(d.wt))
                .style('fill', 'transparent')
                .style('stroke', d => colorScale(d.cyl));

    // create axes
    let xAxisBottom = d3.axisBottom(xScale).tickSize(-plotHeight);
    let yAxisLeft = d3.axisLeft(yScale).ticks(7, 's').tickSize(-plotWidth);
    scatterInner.append('g')
                .attr('class', 'y-axis')
                .call(yAxisLeft);
    scatterInner.append('g')
                .attr('transform', 'translate(' + 0 + ', ' + plotHeight + ')')
                .attr('class', 'x-axis')
                .call(xAxisBottom);
    
    // create legend circles
    d3.select('svg:last-of-type')
      .selectAll('circle.legendElement')
      .data(cyls)
      .enter()
      .append('circle')
      .attr('class', 'legendElement')
      .attr('cx', margin.left + plotWidth + 20)
      .attr('cy', (d, i) => i * 20 + margin.top + 20)
      .attr('r', 8)
      .style('fill', 'transparent')
      .style('stroke', d => colorScale(d))

    // create legend labels
    d3.select('svg:last-of-type')
      .selectAll('text.legendLabel')
      .data(cyls)
      .enter()
      .append('text')
      .attr('class', 'legendLabel')
      .text(d => `= ${d} cylinders`)
      .attr('x', margin.left + plotWidth + 33)
      .attr('y', (d, i) => i * 20 + margin.top + 24);
}

// draw the scatter plot from the hard coded data
draw(cars);