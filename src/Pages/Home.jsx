import "./home.scss";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  return (
    <div className="main-wrapper">
      <p>Mutfak Konforunuz</p>
      <div className="container">
        <div className="row">
          <div className="custom-col col-sm-6">
            <div className="card">
              <div className="text">Yemek</div>
              <button
                className="btn btn-success"
                onClick={() => {
                  history.push("/food");
                }}
              >
                Görüntüle
              </button>
            </div>
          </div>
          <div className="custom-col col-sm-6">
            <div className="card">
              <div className="text">Kişisel Bakım</div>
              <button
                className="btn btn-success"
                onClick={() => {
                  history.push("/PersonalCare");
                }}
              >
                Görüntüle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
