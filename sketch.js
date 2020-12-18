let CW;
let CH;

// CLASSES

// *****************************
// ******* Canvas Drawer *******
// *****************************

// interacts directly with the canvas, through p5.js
// this should be the ONLY module that interacts w/
// p5.js functions that draw on the canvas (math is okay)

let drawCenteredVerticalStripe;
let drawLeftVerticalStripe;

InitCanvasDrawer = function() {

  drawCenteredVerticalStripe = function(x, c, THICKNESS) {
    const x1 = x - THICKNESS/2
    const x2 = x + THICKNESS/2
  
    fill(c)
    noStroke()
    rect(x1, 0, THICKNESS, CH)
  }

  drawLeftVerticalStripe = function(x, c, THICKNESS) {
    fill(c)
    noStroke()
    rect(x, 0, THICKNESS, CH)
  }
}

// *****************************


// TransformPipeLineCreator
// use this to create a pipeline of transformations
// that can be applied to an input

// *****************************


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

  const patternId = 'stripes2'

  let myPattern = PatternBank[patternId]

  let i, drawColor;
  switch(myPattern.type) {
    case 'Type1':
      let myColorIds = myPattern.stripes
      let myColors = myColorIds.map(function(id) {
        return ColorPalette[id]
      })
      
      // console.log(myColors[6])
      const dist = myPattern.distance;
      i=0
    
      while (i*dist <= CW) {
        drawColor = myColors[i%myColors.length];
        drawCenteredVerticalStripe(i*dist, drawColor, myPattern.thickness)
        i++
      }
      break;


      case 'Type2':
        let myColorIdsAndWidths = myPattern.stripes;
        const NUM_PATTERNS = myColorIdsAndWidths.length;
        let multiplier = myPattern.multiplier

        // accumulating x
        let xAcc = 0;
        i=0

        while (xAcc <= CW) {

          let colorId = myColorIdsAndWidths[i % NUM_PATTERNS][0]
          drawColor = ColorPalette[colorId]
          
          thickness = myColorIdsAndWidths[i % NUM_PATTERNS][1] * multiplier

          drawLeftVerticalStripe(xAcc, drawColor, thickness)

          i++
          xAcc += thickness
        }

      break;

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
