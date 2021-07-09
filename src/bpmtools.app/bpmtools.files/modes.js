const MODES = [
    {
        name: 'aeolian',
        label: 'Aeolian mode (minor)',
        steps: [1, 3, 4, 6, 8, 9, 11],
        notation: ['i', 'dim', 'III', 'iv', 'v', 'VI', 'VII']
    },
    {
        name: 'locrian',
        label: 'Locrian mode',
        steps: [1, 2, 4, 6, 7, 9, 11],
        notation: ['dim', 'II', 'iii', 'iv', 'V', 'VI', 'vii']
    },
    {
        name: 'ionian',
        label: 'Ionian mode (major)',
        steps: [1, 3, 5, 6, 8, 10, 12],
        notation: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'dim']
    },
    {
        name: 'dorian',
        label: 'Dorian',
        steps: [1, 3, 4, 6, 8, 10, 11],
        notation: ['i', 'ii', 'III', 'IV', 'v', 'dim', 'VII']
    },
    {
        name: 'phrygian',
        label: 'Phrygian',
        steps: [1, 2, 4, 6, 8, 9, 11],
        notation: ['i', 'II', 'III', 'iv', 'dim', 'VI', 'vii']
    },
    {
        name: 'lydian',
        label: 'Lydian',
        steps: [1, 3, 5, 7, 8, 10, 12],
        notation: ['I', 'II', 'iii', 'dim', 'V', 'vi', 'vii']
    },
    {
        name: 'mixolydian',
        label: 'Mixolydian',
        steps: [1, 3, 5, 6, 8, 10, 11],
        notation: ['I', 'ii', 'dim', 'IV', 'v', 'vi', 'vii']
    }
]
  export default MODES;