export const getLFO = (userBpm,index) => {
    let baseLFO = userBpm/60;
    let lfoTable = [];
    lfoTable.push((baseLFO*8).toFixed(3)+' Hz')
    lfoTable.push((baseLFO*4).toFixed(3)+' Hz')
    lfoTable.push((baseLFO*2).toFixed(3)+' Hz')
    lfoTable.push((baseLFO).toFixed(3)+' Hz')
    lfoTable.push((baseLFO/2).toFixed(3)+' Hz')
    lfoTable.push((baseLFO/4).toFixed(3)+' Hz')
    lfoTable.push((baseLFO/8).toFixed(3)+' Hz')
    lfoTable.push((baseLFO/16).toFixed(3)+' Hz')
    return lfoTable[index];
}