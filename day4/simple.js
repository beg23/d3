// 1
d3.select('body')
  .style('background-color', 'skyblue');

// 2
d3.select('svg')
  .append('rect')
  .style('x', '51')
  .style('y', '51')
  .style('width', '198')
  .style('height', '98')
  .style('stroke', 'red')
  .style('fill-opacity', '0')
  .style('stroke-opacity', '1');

// 3
d3.select('h2')
  .text('A really simple description')
  .style('color', 'red');

// 4
d3.select('circle')
  .style('fill', 'orange');

// 5
console.log('Some text to the console');

// 6
d3.select('text')
  .remove();

// 7
d3.select('svg')
  .append('circle')
  .style('cx', '150')
  .style('cy', '100')
  .style('r', '20')
  .style('fill', 'purple');

// 8
d3.select('svg')
  .style('fill-opacity', '0.3');

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
      .style('cx', x)
      .style('cy', y)
      .style('r', radius)
      .style('stroke', 'red')
      .style('fill-opacity', '0')
      .style('stroke-opacity', '1');
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
      .style('x', x)
      .style('y', y)
      .style('width', w)
      .style('height', h)
      .style('fill', color);
}

// 11
d3.select('h2:nth-of-type(2)')
  .text('My not so simple picture');

// 12
d3.select('body')
  .append('h2')
  .text('My second picture');

// 13
d3.select('body')
  .append('svg')
  .style('width', '300')
  .style('height', '300');

for (let i = 0; i < 64; i++) {
    if (Math.floor(i / 8) % 2 === 0) {
        if (i % 2 === 0) {
            color = 'white';
        } else {
            color = 'black';
        }
    } else {
        if (i % 2 === 0) {
            color = 'black';
        } else {
            color = 'white';
        }
    }
    x = (i % 8) * 37.5;
    y = Math.floor(i / 8) * 37.5;

    d3.select('svg:nth-of-type(2)')
      .append('rect')
      .style('x', x)
      .style('y', y)
      .style('width', '37.5')
      .style('height', '37.5')
      .style('fill', color)
      .style('fill-opacity', '1');
}

// 14
function createChessHeader(size) {
    d3.select('body')
      .append('h2')
      .text('A ' + size + ' by ' + size + ' chess board');
}

function createChessBoard(size) {
    d3.select('body')
      .append('svg')
      .style('width', size)
      .style('height', size);

    let color = 'white';
    let x = 0;
    let y = 0;
    let dimen = size / 8;
    for (let i = 0; i < 64; i++) {
        if (Math.floor(i / 8) % 2 === 0) {
            if (i % 2 === 0) {
                color = 'white';
            } else {
                color = 'black';
            }
        } else {
            if (i % 2 === 0) {
                color = 'black';
            } else {
                color = 'white';
            }
        }
        x = (i % 8) * dimen;
        y = Math.floor(i / 8) * dimen;

        d3.select('svg:last-of-type')
          .append('rect')
          .style('id', 'chess-square')
          .style('x', x)
          .style('y', y)
          .style('width', dimen)
          .style('height', dimen)
          .style('fill', color)
          .style('fill-opacity', '1');
    }
}

function createChessBoardAndHeader(size) {
    createChessHeader(size);
    createChessBoard(size);
}

createChessBoardAndHeader(200);
createChessBoardAndHeader(300);
createChessHeader(500);
createChessBoard(500);
















