const MODETEXT = () => {
    return (
        <div>
            <p>Fully utilizing this tool requires a quick, tiny primer in music theory. If you are not familiar with the fundamentals of western music, read on!</p>
            <br />
            <p>
                For the sake of simplicity, there are 12 possible notes, also referred to as pitches, to choose from. You might say, \"wait just a second bud, aren't there 88 keys on a piano?" There are, but there are still only 12 notes repeated over and over. In Western music, scales have been derrived from creating distinct series of pitches. These series of pitches can be grouped by patterns that dictate the order of notes. If you have ever seen 'The Sound of Music', you will have heard Julie Andrews singing "Do-Re-Mi" to demonstrate the major scale in C.
            </p><br />
            <p>
                But the major scale can be played starting from any note and as long as it keeps the same pattern of steps it will sound relatively identical. But the major scale is just one pattern that can be used to traverse the keyboard. You can also play all of the notes from the major scale starting from a different pitch. When we do this, we are using a different mode. This is how it is possible for A minor to use the same notes as C major!
            </p>
        </div>

    )
}

const INFODATA = [
    {
        section: 'Mode / scale reference',
        text: MODETEXT(),
        status: 'complete'
    },
    {
        section: 'Sub-bass compression attack minimums',
        text: ``,
        status: 'inprogress'
    },
    {
        section: 'Delay / pre-delay calculator',
        text: ``,
        status: 'inprogress'
    },
    {
        section: 'LFO / Hertz calculator',
        text: ``,
        status: 'inprogress'
    },
    {
        section: 'Musical note frequencies',
        text: ``,
        status: 'inprogress'
    }
]

export {
    INFODATA,
    MODETEXT
};