import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { formatDistance } from "date-fns";
import { isBefore } from "date-fns/esm";
import { Link } from "react-router-dom";
const Booking = () => {
  
  const success=()=>{
    alert("Successful Booking")
  };
 
  const today = new Date();
  const onDateChange = (date) => {
    const distance = formatDistance(date, today);
    alert(distance)
  };
  const is =(date)=>{
      return isBefore(date, today);
  };


  return (
    <div>
      <div className=" mt">
        <Stepper activeStep={2} alternativeLabel>
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
          <div className="services th" rowspan="3" valign="top">
            Choose Date:{" "}
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                orientation="landscape"
                openTo="day"
                value={today}
                shouldDisableDate={is}
                onChange={onDateChange}
                // renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="but">
            <Stack spacing={2} direction="row">
              <Button variant="outlined" > <Link to="/Services">Back</Link> </Button>
              <Button onClick={success} variant="contained">Booking</Button>
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
export default Booking;
