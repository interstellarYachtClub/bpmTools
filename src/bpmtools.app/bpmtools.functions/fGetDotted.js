export const getDotted = (bpm) => {
        
    let dottedtable = [];
    let bpmMs = (60000/bpm)*1.5;
    dottedtable.push(((bpmMs*8).toFixed(1))+' ms') // - 2/1
    dottedtable.push(((bpmMs*4).toFixed(1))+' ms') // - 1/1
    dottedtable.push(((bpmMs*2).toFixed(1))+' ms') // - 1/2
    dottedtable.push((bpmMs.toFixed(1))+' ms') // - 1/4
    dottedtable.push(((bpmMs/2).toFixed(1))+' ms') // - 1/8
    dottedtable.push(((bpmMs/4).toFixed(1))+' ms') // - 1/16
    dottedtable.push(((bpmMs/8).toFixed(1))+' ms') // - 1/32
    dottedtable.push(((bpmMs/16).toFixed(1))+' ms') // - 1/64
    return dottedtable;
}