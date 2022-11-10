// ** MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// ** Demo Components Imports

import StepperAlternativeLabel from "../form-wizard/StepperAlternativeLabel";
import StepperVerticalWithNumbers from "../form-wizard/StepperVerticalWithNumbers";
import StepperVerticalWithoutNumbers from "../form-wizard/StepperVerticalWithoutNumbers";

const FormWizard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h6">
          Linear Stepper with Without Validation
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ pt: (theme) => `${theme.spacing(8)} !important` }}
      >
        <Typography variant="h6">Alternative Label</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperAlternativeLabel />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithNumbers />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithoutNumbers />
      </Grid>
    </Grid>
  );
};

export default FormWizard;
