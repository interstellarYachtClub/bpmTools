export const cycleTime = (hertz) => {
    let singleCycle = (1000/hertz);
    return singleCycle.toFixed(0);
}