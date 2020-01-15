// 1
d3.select('body')
  .style('background-color', 'skyblue');

// 2
d3.select('svg')
  .append('rect')
  .attr('x', '51')
  .attr('y', '51')
  .attr('width', '198')
  .attr('height', '98')
  .attr('stroke', 'red')
  .attr('fill-opacity', '0')
  .attr('stroke-opacity', '1');

// 3
d3.select('h2')
  .text('A really simple description')
  .style('color', 'red');

// 4
d3.select('circle')
  .attr('fill', 'orange');

// 5
console.log('Some text to the console');

// 6
d3.select('text')
  .remove();

// 7
d3.select('svg')
  .append('circle')
  .attr('cx', '150')
  .attr('cy', '100')
  .attr('r', '20')
  .attr('fill', 'purple');

// 8
d3.select('svg')
  .attr('fill-opacity', '0.3');

// 9 (I think I went overboard here lol)
let x = 0;
let y = 0;
let radius = 0;
let regionIdx = 0;
let region = 1;

// draw 10 random circles not overlapping the other svg elements
for (let i = 0; i < 10; i++) {
    
    // randomly determine which section of the svg to place the circle in
    regionIdx = Math.random();
    if (regionIdx < 0.025) {
        x = Math.random() * 50;
        y = Math.random() * 50;
        region = 1;
    } else if (regionIdx < 0.125) {
        x = (Math.random() * 200) + 50;
        y = Math.random() * 50;
        region = 2;
    } else if (regionIdx < 0.3) {
        x = (Math.random() * 350) + 250;
        y = Math.random() * 50;
        region = 3;
    } else if (regionIdx < 0.65) {
        x = (Math.random() * 350) + 250;
        y = (Math.random() * 100) + 50;
        region = 4;
    } else if (regionIdx < 0.825) {
        x = (Math.random() * 350) + 250;
        y = (Math.random() * 50) + 150;
        region = 5;
    } else if (regionIdx < 0.925) {
        x = (Math.random() * 200) + 50;
        y = (Math.random() * 50) + 150;
        region = 6;
    } else if (regionIdx < 0.95) {
        x = Math.random() * 50;
        y = (Math.random() * 50) + 150;
        region = 7;
    } else {
        x = Math.random() * 50;
        y = (Math.random() * 100) + 50;
        region = 8;
    }

    // calculate a random radius using a maximum range without overlappng the other svg elements
    let x2 = 0;
    let y2 = 0;
    switch (region) {
        case 1:
            x2 = 50;
            y2 = 50;
            break;
        case 2:
            x2 = x;
            y2 = 50;
            break;
        case 3:
            x2 = 250;
            y2 = 50;
            break;
        case 4:
            x2 = 250;
            y2 = y;
            break;
        case 5:
            x2 = 250;
            y2 = 150;
            break;
        case 6:
            x2 = x;
            y2 = 150;
            break;
        case 7:
            x2 = 50;
            y2 = 150;
            break;
        case 8:
            x2 = 50;
            y2 = y;
            break;
    }
    radius = Math.random() * Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));

    d3.select('svg')
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', radius)
      .attr('stroke', 'red')
      .attr('fill-opacity', '0')
      .attr('stroke-opacity', '1');
}

// 10
let color = 'green';
x = 0;
y = 0;
w = 0;
h = 0;

// draw 6 semi-random rectangles not overlapping each other
for (let i = 0; i < 6; i++) {

    // half green and half blue
    if (i % 2 === 0) {
        color = 'green';
    } else {
        color = 'blue';
    }

    // determine position and size
    h = Math.random() * 200;
    w = Math.random() * 100;
    x = (i * 100) + (Math.random() * (100 - w));
    y = Math.random() * (200 - h);

    d3.select('svg')
      .append('rect')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h)
      .attr('fill', color);
}

// 11
d3.select('h2:nth-of-type(2)')
  .text('My not so simple picture');