import COMBINEDPIANO from '../bpmtools.files/combinedpiano';

export const getScale = (currentroot, selectedscale) => {
    let newscale = [];
    let newsteps = [];
    //shift for transpose
    selectedscale.map((shift) => (
        newsteps.push(shift-1)
    ))
    newsteps.map((step) =>(
        newscale.push(parseInt(step)+parseInt(currentroot))
    ))
    let newnotes = [];
    newscale.forEach((step) =>(
        newnotes.push(COMBINEDPIANO.filter(obj => {return obj.value === step}))
    ))
    let newNames = [];
    newnotes.forEach((obj) =>(
        newNames.push(obj[0].label)
    ))
    return newNames;
}
