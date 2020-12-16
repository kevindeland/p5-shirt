let CW;
let CH;

// CLASSES

// *****************************
// ******* Canvas Drawer *******
// *****************************

// interacts directly with the canvas, through p5.js
// this should be the ONLY module that interacts w/
// p5.js functions that draw on the canvas (math is okay)

let drawVerticalStripe;

InitCanvasDrawer = function() {

  drawVerticalStripe = function(x, c) {
    const THICKNESS = 10
    const x1 = x - THICKNESS/2
    const x2 = x + THICKNESS/2
  
    fill(c)
    noStroke()
    rect(x1, 0, THICKNESS, CH)
  }
}

// *****************************


// TransformPipeLineCreator
// use this to create a pipeline of transformations
// that can be applied to an input

// *****************************


// *****************************
// ******* Color Palette *******
// *****************************

// For defining colors

let ColorPalette, HUE_MAX;

InitColors = function() {

  ColorPalette = {
    'ylw': color( 2, 8, 16),
    'grn': color( 6, 8, 12),
    'red': color( 0, 8, 14),
    'bl1': color( 9, 8, 14),
    'bl2': color(10, 8, 10),
  }
}
// *****************************

// *****************************
// ******* Pattern Bank ********
// *****************************

// For defining patterns

let PatternBank;

InitPatternBank = function() {
  
  PatternBank = {
    'stripes': [
      'ylw',
      'bl2',
      'bl1',
      'grn',
      'bl2',
      'bl1',
      'red',
    ]
  }
}


// *****************************
// ** Default P5.js functions **
// *****************************

let dirty

function setup() {
  CW = windowWidth;
  CH = windowHeight
  createCanvas(CW, CH);

  InitCanvasDrawer()

  colorMode(HSB, 16)
  InitColors()
  InitPatternBank()

  dirty = true
}


function draw() {
  if (!dirty) return

  background(16);

  const patternId = 'stripes'

  let myColorIds = PatternBank[patternId]
  let myColors = myColorIds.map(function(id) {
    return ColorPalette[id]
  })
  
  // console.log(myColors[6])
  const dist = 50
  let i=0, drawColor;
  while (i*dist <= CW) {
    drawColor = myColors[i%myColors.length];
    drawVerticalStripe(i*dist, drawColor)
    i++
  }

  dirty = false
}

// *****************************
// *** Extra P5.js functions ***
// *****************************

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  CW = windowWidth;
  CH = windowHeight;
  console.log(CW)
  dirty = true
}
