import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import "./careDetails.scss";

function CareDetails() {
  return (
    <div className="background">
      <TopBar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <img src="img/care.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Kil Maskesi</h2>
            <ul>
              Malzemeler
              <li>aa</li>
              <li>aa</li>
              <li>aa</li>
            </ul>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              nihil veniam et iure excepturi id earum libero sequi temporibus
              dignissimos dicta ab omnis autem dolor, possimus reiciendis beatae
              perspiciatis accusantium quis, impedit expedita. Officia eligendi
              culpa corporis fugit, cumque eos soluta saepe vero facilis nostrum
              minima reiciendis repudiandae error odio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareDetails;
