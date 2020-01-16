// define constants
const marginWidth = 30;
const svgWidth = 600;
const svgHeight = 400;
const margin = {top: marginWidth, right: marginWidth, bottom: marginWidth, left: marginWidth};
const plotWidth = svgWidth - margin.left - margin.right;
const plotHeight = svgHeight - margin.top - margin.bottom;

function draw(data) {

    console.log(data);

    // define svg size
    var scatterInner = d3.select('body')
                         .append('svg')
                         .attr('width', svgWidth + margin.left + margin.right)
                         .attr('height', svgHeight + margin.top + margin.bottom)
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
                     .domain([d3.min(data.map(d => d.disp)), d3.max(data.map(d => d.disp))])
                     .range([0, plotWidth]);

    // mpg scale
    const yScale = d3.scaleLinear()
                     .domain([d3.min(data.map(d => d.mpg)), d3.max(data.map(d => d.mpg))])
                     .range([0, plotHeight]);

    // wt scale
    const sizeScale = d3.scaleSqrt()
                        .domain([d3.min(data.map(d => d.wt)), d3.max(data.map(d => d.wt))])
                        .range([1, 10]);

    // cyl scale
    const colorScale = d3.scaleOrdinal()
                         .domain([4, 6, 8])
                         .range(['red', 'blue', 'purple']);

    console.log(d3.extent(data.map(d => d.disp)), data.map(d => d.disp));

    // plot all data points in scatter plot
    scatterInner.selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d.disp))
                .attr('cy', d => yScale(d.mpg))
                .attr('r', d => sizeScale(d.wt))
                .style('fill', 'transparent')
                .style('stroke', d => colorScale(d.cyl));

    // create axes
    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale);
    scatterInner.append('g')
                .attr('class', 'y-axis')
                .call(yAxis);
    scatterInner.append('g')
                .attr('transform', 'translate(' + 0 + ', ' + plotHeight + ')')
                .attr('class', 'x-axis')
                .call(xAxis);
}

// draw the scatter plot after gathering the data
d3.csv('cars-data.csv').then(draw);
