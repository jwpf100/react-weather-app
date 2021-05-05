const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i)

const degToCompass = (num) => {
  const val = Math.floor(num / 22.5 + 0.5)
  const arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]
  return arr[val % 16]
}

export { range, degToCompass }
