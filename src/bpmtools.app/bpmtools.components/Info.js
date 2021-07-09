import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Infosection from './bpmtools.subcomponents/Infosection';


const Info = () => {
    return(
        <div className='infoBody'>
            <Container maxWidth="small">

            <Typography variant="h5" gutterBottom>
                Information about these tools
                </Typography>
                <Container fixed>
                <Typography variant="body1" className='infoText' >
                    <Infosection/>
                </Typography>
                </Container>

            </Container>
        </div>
    )
}

export default Info;