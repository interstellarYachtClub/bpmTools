import react from 'react';
import NavInfo from './bpmtools.components/NavInfo';
import Info from './bpmtools.components/Info';

import Footer from './bpmtools.components/Footer';

const BpmInfo = () => {
    return(
        <>
        <NavInfo/>
        <div className="infoHeader"
                            />
        <Info/>
        <Footer/>
        </>
    )
}

export default BpmInfo;