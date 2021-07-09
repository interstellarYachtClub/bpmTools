import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const About = () => {
    return(
        <div className='aboutBody'>
            <Container maxWidth="small">

            <Typography variant="h5" gutterBottom>
                About this project
                </Typography>
                <Container fixed>
                <Typography variant="body1" className='aboutText' >
                    <p>
                    Hi, my name is Dave. Professionally, I am a web developer and database admin but in my spare time I love all things
                    electronic music production. I built this site as a passion project to help other producers with tools to help
                    technically and creatively. Rest assured, this is an ongoing work that I plan to continuously refine and develop.
                    </p>
                    <br/>
                    <p>
                        If you have questions, comments, suggestions or, just as importantly, any corrections to the tools here - reach out to me via
                        email or twitter - I would love to get in touch.
                    </p>
                </Typography>
                </Container>

            </Container>
        </div>
    )
}

export default About;