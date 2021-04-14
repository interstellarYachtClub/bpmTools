export const getTriplets = (bpm) => {
        
    let triplettable = [];
    let bpmMs = (60000/bpm)*4/3;
    triplettable.push((bpmMs*2).toFixed(2)+'ms') // - 2/1
    triplettable.push(bpmMs.toFixed(2)+'ms') // - 1/1
    triplettable.push((bpmMs/2).toFixed(2)+'ms') // - 1/2
    triplettable.push((bpmMs/4).toFixed(2)+'ms') // - 1/4
    triplettable.push((bpmMs/8).toFixed(2)+'ms') // - 1/8
    triplettable.push((bpmMs/16).toFixed(2)+'ms') // - 1/16
    triplettable.push((bpmMs/32).toFixed(2)+'ms') // - 1/32
    triplettable.push((bpmMs/64).toFixed(2)+'ms') // - 1/64
    return triplettable;
}