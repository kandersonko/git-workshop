// sample code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}