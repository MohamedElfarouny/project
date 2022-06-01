import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom";

const Api = () => {
  const [userName, setUserName] = useState("");
  const [password, setpassowrd] = useState("");

  const log = async () => {
    const api_url = "https://fci-back-end.herokuapp.com/login";
    
    try {
      const responce=await axios.post(api_url, { userName: userName, password: password })
     const{data}=responce;
     console.log(data)
    } catch (error) {
      alert("Invaled UserMame Or Password");
      alert("Log in again to save your data");
    }
  };
  const onUserNameChanged = (event) => {
    setUserName(event.target.value);
  };
  const onpassowrdChanged = (event) => {
    setpassowrd(event.target.value);
  };
  return (
    <div className="body">
      <div className="fieldset">
        <div className="th">
          <div>UserName : </div>
          <div className="td">
            <input
              onChange={onUserNameChanged}
              type="string"
              className="input"
              name="UserName"
            />
          </div>
        </div>

        <div className="th">
          <div>Password :</div>
          <div className="td style">
            <input
              onChange={onpassowrdChanged}
              type="string"
              className="input"
              name="Password"
            />
          </div>
        </div>
        <div className="but">
          <button className="btn">
            <Link to="/">Back</Link>{" "}
          </button>
          <button
            className="btn"
            onClick={log}
            variant="contained"
          >
           <Link to="/Sign">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Api;
