export const getDuplets = (bpm) => {
    let duplettable = [];
    let bpmMs = (60000/bpm);
    duplettable.push((bpmMs*8).toFixed(1)+' ms'); // - 2/1
    duplettable.push((bpmMs*4).toFixed(1)+' ms'); // - 1/1
    duplettable.push((bpmMs*2).toFixed(1)+' ms'); // - 1/2
    duplettable.push((bpmMs).toFixed(1)+' ms'); // - 1/4
    duplettable.push((bpmMs/2).toFixed(1)+' ms'); // - 1/8
    duplettable.push((bpmMs/4).toFixed(1)+' ms'); // - 1/16
    duplettable.push((bpmMs/8).toFixed(1)+' ms'); // - 1/32
    duplettable.push((bpmMs/16).toFixed(1)+' ms'); // - 1/64
    return duplettable;
}