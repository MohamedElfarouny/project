import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Sign = () => {
 
  
  return (
    <div>
      <div className=" mt">
        <Stepper activeStep={0} alternativeLabel>
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
          <div className="th">
            <div>Name : </div>
            <div className="td">
              <input
                min={2}
                max={50}
                type="text"
                className="input"
                name="Name"
              />
            </div>
          </div>

          <div className="th">
            <div>Age :</div>
            <div className="td style">
              <input
                type="number"
                className="input"
                name="Age"
                max={65}
                min={16}
              />
            </div>
          </div>

          <div className="th">
            <div>E-mail :</div>
            <div className="td">
              <input  type="email" className="input" name="E-mail" />
            </div>
          </div>

          <div className="th">
            <div>Phone :</div>
            <div className="td">
              <input   type="tel" className="input" name="Phone" />
            </div>
          </div>
          <div className="but">
            <Stack spacing={2} direction="row">
              <Button variant="outlined">
                <Link to="/Api">Back</Link>{" "}
              </Button>
              <Button  variant="contained">
                <Link to="/Services">Next</Link>
              </Button>
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
export default Sign;
