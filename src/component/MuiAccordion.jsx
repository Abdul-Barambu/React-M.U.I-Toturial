import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const MuiAccordion = () => {

    const [expanded, setExpanded] = useState(false)

    const handleExpanded = (isExpanded, panel) => {
       setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box sx={{width:'50%'}} >
            <Accordion elevation={3} expanded={expanded === 'panel1'} onChange={(e, isExpanded) => handleExpanded(isExpanded, 'panel1')}>
                <AccordionSummary id='panel1' arial-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The UMD links use the latest tag to point to the latest
                        version of the library. This pointer is unstable and subject to change as we release
                        new versions. You should consider pointing to a specific version, such as v5.0.0.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={3} expanded={expanded === 'panel2'} onChange={(e, isExpanded) => handleExpanded(isExpanded, 'panel2')}>
                <AccordionSummary id='panel2' arial-controls='panel2-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The UMD links use the latest tag to point to the latest
                        version of the library. This pointer is unstable and subject to change as we release
                        new versions. You should consider pointing to a specific version, such as v5.0.0.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={3} expanded={expanded === 'panel3'} onChange={(e, isExpanded) => handleExpanded(isExpanded, 'panel3')}>
                <AccordionSummary id='panel3' arial-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The UMD links use the latest tag to point to the latest
                        version of the library. This pointer is unstable and subject to change as we release
                        new versions. You should consider pointing to a specific version, such as v5.0.0.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default MuiAccordion
