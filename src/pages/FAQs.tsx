import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FAQs() {
  React.useEffect(() => {
    AOS.init({duration: 800});
  }, [])
  return (
    <div data-aos="fade-up">
          <span className=' faq viphdtxt'>
        <h1>VIP FAQs</h1>
    
        </span>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>How Many Tickets Do We Post on VIP?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          1 Well analyzed  tickets with proper strategies adopted to make you profits regardless. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>Do I Get These Games Everyday?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, our VIP tips are posted daily on your VIP user dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>Are The VIP Tickets Displayed?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can see the written content of our selection as well as the Booking Codes of any of your favourite betting sites.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>What Betting Site Codes Are Posted?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We provide 1XBET, SPORTYBET, BETKING, BET9JA, 22BET & HELABET booking codes for every VIP Ticket.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>What's the accuracy level of the VIP Tickets?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our average analytics is 95% accuracy per ticket.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><strong>Do We Offer Refunds?</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Not undermining the rules under which gambling is governed, we do not offer refunds under any circumstances.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
