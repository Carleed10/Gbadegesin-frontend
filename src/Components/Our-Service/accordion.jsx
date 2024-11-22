import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(249,115,22)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          What types of properties do you deal with?
        </AccordionSummary>
        <AccordionDetails>
          We specialize in residential, commercial, rental, and investment properties.
        </AccordionDetails>
      </Accordion>
      

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(249,115,22)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Can you help me find a property within my budget?
        </AccordionSummary>
        <AccordionDetails>
          Yes, our agents will work closely with you to find properties that meet your needs and budget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(249,115,22)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          What does your property management service include?  
        </AccordionSummary>
        <AccordionDetails>
        We handle tenant screening, rent collection, property maintenance, and more.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(249,115,22)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Do you assist with lease agreements?
        </AccordionSummary>
        <AccordionDetails>
          Yes, we help draft and finalize lease agreements to ensure a hassle-free process.
        </AccordionDetails>
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          boxShadow: 'none',
          borderRadius: '10px',
          padding: '6px 0px',
          fontWeight: '600',
          border: '1px solid rgb(247,247,247)',
          '&:not(:last-child)': { marginBottom: '16px' },
          '&.Mui-expanded': {
            border: 'none',
            backgroundColor: 'white',
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: 'grey',
                '.Mui-expanded &': {
                  color: 'white',
                },
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.Mui-expanded': {
              backgroundColor: 'rgb(249,115,22)',
              color: 'white',
            },
            '&:focus': { outline: 'none' },
          }}
        >
          Can you help me with real estate investments?
        </AccordionSummary>
        <AccordionDetails>
          Yes, we provide expert advice on profitable investment opportunities and market trends.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
