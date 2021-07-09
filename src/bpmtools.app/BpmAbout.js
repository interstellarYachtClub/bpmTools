import react from 'react';
import NavAbout from './bpmtools.components/NavAbout';
import About from './bpmtools.components/About';

import Footer from './bpmtools.components/Footer';

const BpmAbout = () => {
    return(
        <>
        <NavAbout/>
        <div className="aboutHeader"
                            />
        <About/>
        <Footer/>
        </>
    )
}

export default BpmAbout;