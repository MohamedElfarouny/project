import i from "../images/Logo1.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const Navigation = () => {
  
  const MyFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  };
  return (
    <div className="Navigation">
      <div className="container">
        <nav>
          <div className="nav-brand">
            <img src={i} alt={""} />
          </div>
          <div>
            <div className="dropdown">
              <div>
              <button className="dropbtn" onClick={MyFunction}>
                {<MenuIcon />}
              </button>
              <div id="myDropdown" className="dropdown-content">
                <div>
                  <Link to="/Api">Login</Link>
                  <Link to="/About">About Us</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navigation;
