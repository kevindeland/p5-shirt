
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

    'gold': color( 1.75, 8, 16, 14), // oranger
    'mrun': color( 0, 8, 10, 14), // marooner
    'crem': color( 2, 1, 16, 14), // creamier √
    'gren': color( 6, 4, 8, 14), // darker √
    'navy': color(10, 6, 8, 14), // darker

    'checkWhite': color(0, 0, 16, 0),
    'checkGray': color(0, 0, 8, 8),
    'checkBlue': color(10, 14, 4, 8),

    'gridWhite': color(0, 0, 16, 0),
    'gridGray1': color(0, 0, 6, 8),
    'gridGray2': color(0, 0, 9, 8),
    'gridGray3': color(0, 0, 12, 8),
    'gridGray4': color(0, 0, 14, 8),
  }
}
// *****************************

// *****************************
// ******* Pattern Bank ********
// *****************************

// For defining patterns
// In this case, a pattern is a sequence of stripe colors.

let PatternBank;

InitPatternBank = function() {
  
  PatternBank = {
    'stripes': {
      type: 'Type1',
      thickness: 10,
      distance: 50,
      stripes: [
        'ylw',
        'bl2',
        'bl1',
        'grn',
        'bl2',
        'bl1',
        'red',
      ]
    },

    'stripes2': {
      type: 'Type2',
      multiplier: 5,
      stripes: [
        ['gold', 3],
        ['mrun', 3],
        ['gold', 3],
        ['mrun', 1],
        ['crem', 1],
        ['gren', 1],
        ['crem', 1],
        ['gren', 1],
        ['crem', 1],
        ['gren', 1],
        ['crem', 1],
        ['mrun', 40],
        ['crem', 18],
        ['gold', 3],
        ['navy', 40],
      ],
    },

    'checker1': {
      type: 'SimplePlaid',
      thickness: 20,
      vertical: [
        'checkWhite', 'checkBlue'
      ],
      horizontal: [
        'checkWhite', 'checkGray'
      ]
    },

    'checker2': {
      type: 'SimplePlaid',
      thickness: 8,
      vertical: [
        'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1', 'gridWhite', 'gridGray1',
        'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3', 'gridWhite', 'gridGray3',
      ],
      horizontal: [
        'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2', 'gridWhite', 'gridGray2',
        'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4', 'gridWhite', 'gridGray4',
      ]
    }
  }
}
