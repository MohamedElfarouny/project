import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Services = () => {
 
  return (
    <div>
      <div className=" mt">
        <Stepper activeStep={1} alternativeLabel>
          <Step>
            <StepLabel>SignUP</StepLabel>
          </Step>
          <Step>
            <StepLabel>Services</StepLabel>
          </Step>
          <Step>
            <StepLabel>Booking</StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="body ">
        <div className="fieldset  ">
          <div >
              <div className="th ">
                <div className="services" rowspan="3" valign="top">
                  Choose Your Service:{" "}
                </div>
                <div>
                <div className="td margt">
                  <input type="checkbox" name="Car" /> Car 20$
                </div>
              </div>

              <div className="th">
                <div className="td margt">
                  <input type="checkbox" name="Minibus" /> Minibus 25$
                </div>
              </div>

              <div className="th">
                <div className="td margt">
                  <input type="checkbox" name="Bus" /> Bus 30$
                </div>
              </div>
            </div>
          </div>
          <div className="but">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" >
              <Link to="/Sign">Back</Link>
            </Button>
            <Button variant="contained"  ><Link to="/Booking">Next</Link></Button>
          </Stack>
          </div>
        </div>
      </div>

      <footer className="do">
        <div> &copy; 2022 Outdoorsie . All right reseved </div>
      </footer>
    </div>
  );
};
export default Services;
