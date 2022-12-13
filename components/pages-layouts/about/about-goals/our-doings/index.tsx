import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccordionTitle from "./accordion-title";
import AccordionText from "./accordion-text";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderBottom: "1px solid #baab36",
  borderTop: "1px solid #baab36",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
          color: "#fff",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function OurDoings() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Stack spacing={5}>
      <Stack spacing={2}>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: { xs: 18, xl: 24 },
          }}
        >
          Our Goals
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 12, sm: 13, xl: 13 }, lineHeight: "24px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          distinctio neque cumque corporis.
        </Typography>
      </Stack>
      <Stack>
        <Box>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <AccordionTitle title="Providing pure grade jewelry" />
            </AccordionSummary>
            <AccordionDetails>
              <AccordionText
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget."
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <AccordionTitle title="Easy customer service policy" />
            </AccordionSummary>
            <AccordionDetails>
              <AccordionText
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget."
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <AccordionTitle title="100% pure jewelry" />
            </AccordionSummary>
            <AccordionDetails>
              <AccordionText
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget."
              />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <AccordionTitle title="Best resale value with us" />
            </AccordionSummary>
            <AccordionDetails>
              <AccordionText
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget."
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
    </Stack>
  );
}
