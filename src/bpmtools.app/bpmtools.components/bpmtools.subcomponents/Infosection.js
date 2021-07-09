import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  INFODATA,
  MODETEXT
} from '../../bpmtools.files/infodata';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function InfoSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {INFODATA.map((item, index) => {
        if (item.status == 'complete') {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={index + item.section}
                id={'id' + item.section + index}>
                <Typography variant="h6" gutterBottom>{item.section}</Typography>
              </AccordionSummary>
              <AccordionDetails className="itemText">
                <Typography>
                  {item.text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        } else {
          return (
            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={index + item.section}
                id={'id' + item.section + index}>
                <Typography variant="h6" gutterBottom>{item.section + ' - Coming Soon!'}</Typography>
              </AccordionSummary>
              <AccordionDetails className="itemText">
                <Typography>
                  {item.text}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        }
      })}
    </div>
  );
}