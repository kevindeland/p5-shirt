
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
    }
  }
}
