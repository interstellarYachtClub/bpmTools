import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PublicIcon from '@material-ui/icons/Public';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Stack, HStack, VStack } from "@chakra-ui/react"

const useStyles = makeStyles({
    root: {
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <BottomNavigation
            position="fixed"
            showLabels
            className={classes.root}
        >
            <Link href="https://github.com/interstellarYachtClub">
            <BottomNavigationAction label="Developer" icon={<GitHubIcon />} />
            </Link>
            <Link href="/about">
            <BottomNavigationAction label="About" icon={<InfoIcon />} />
            </Link>
            <Link href="mailto:pfeiffer.davidm@gmail.com">
            <BottomNavigationAction label="Contact" icon={<MailOutlineIcon />} />
            </Link>
        </BottomNavigation>
    );
}
