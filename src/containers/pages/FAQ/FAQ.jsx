import React from "react";
import {
    Box,
    useTheme,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import Header from "../../../components/Header";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officiis corporis nostrum ipsam autem ullam,
                        architecto eius corrupti, quod reprehenderit commodi
                        vero. Pariatur nostrum dolorum quam, praesentium dolor
                        iure doloribus maiores!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officiis corporis nostrum ipsam autem ullam,
                        architecto eius corrupti, quod reprehenderit commodi
                        vero. Pariatur nostrum dolorum quam, praesentium dolor
                        iure doloribus maiores!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officiis corporis nostrum ipsam autem ullam,
                        architecto eius corrupti, quod reprehenderit commodi
                        vero. Pariatur nostrum dolorum quam, praesentium dolor
                        iure doloribus maiores!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Officiis corporis nostrum ipsam autem ullam,
                        architecto eius corrupti, quod reprehenderit commodi
                        vero. Pariatur nostrum dolorum quam, praesentium dolor
                        iure doloribus maiores!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
