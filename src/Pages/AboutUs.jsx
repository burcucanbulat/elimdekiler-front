import "./aboutUs.scss";
import React from "react";
import Topbar from "../Components/TopBar/TopBar";

export default function AboutUs() {
  return (
    <div className="bg-image">
      <Topbar />
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-7 col-lg-7 mobile">
            <div className="row-6">
              <img src="img/person.jpeg" width="180" height="180" />

              <p>BURCU CANBULAT</p>
            </div>
            <div className="row-6">
              <img src="img/person2.jpeg" width="180" height="180" />

              <p>AHMET ÖZÇELİK</p>
            </div>
          </div>
          <div className="col col-sm-12 col-md-5 col-lg-5">
            <div>
              <h2>Hakkımızda</h2>
              <p>
                "Elimdekiler "projesinin fikri, insanların ne yemek
                yapacaklarına karar verme süreçlerinin beklenilenden daha uzun
                olduğu gerekçesiyle ortaya çıkmıştır. Bu proje, çalışan
                bireylerden, öğrencilere, yemek yapmayı isteyip de malzemeler
                arası uyumu yakalayamayan bireylere, farklı kültürlerden yemek
                arayışında bulunan kişilere kadar geniş bir hedef kitleye
                sahiptir. Ayrıca projenin bir diğer amacı günümüzde kimyasal
                kullanımının artmasıyla insanların doğal yollarla kişisel bakım
                yapma ihtiyacından çıkmıştır. <br></br> Ekibimiz bilgisayar
                mühendisliği öğrencisi Burcu Canbulat ve Ahmet Özçelik 'den
                oluşmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
