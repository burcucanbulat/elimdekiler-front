import { Link } from "react-router-dom";
import "./topbar.scss";
import {useLocation } from "react-router-dom";

export default function TopBar() {
  let location = useLocation();
  return (
    <div classNameName="topbar">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/AboutUs"}>
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              {location.pathname == "/food" &&
              <Link className="nav-link" to={"/Recipes"}>
                Tarifler
              </Link>
            }
             {location.pathname == "/PersonalCare" &&
              <Link className="nav-link" to={"/PersonalCareRecipes"}>
                Tarifler
              </Link>
            }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
