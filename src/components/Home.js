import React from "react";
import { useEffect, useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const Home = () => {
  const startDate = new Date("2022-03-01T00:00:00");
  const [elapsedTime, setElapsedTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate; // Diferença em milissegundos

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor(diff / day);
      const hours = Math.floor(diff / hour);
      const minutes = Math.floor(diff / minute);
      const seconds = Math.floor(diff / second);

      setElapsedTime({ years, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-lg-3">
          <div className="body_card">
            <div className="text-center">
              <div
                id="carouselExampleIndicators"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
                {/* <div className="carousel-inner">
                  {images.map((item, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <img src={item} className="img_card" alt="..." />
                    </div>
                  ))}
                </div> */}

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="img_card" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="img_card" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="img_card" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="img_card" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img5} className="img_card" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-11 col-lg-3">
          <div className="text-center div_time">
            <div className="div_title">
              <span className="title_par">Nanitita & Nenequito</span>
              <br />
              <span className="title_time">JUNTOS HÁ</span>
            </div>
            <div className="card_time">
              <div className="title_time title_time_metric">
                {elapsedTime.years} ANOS{" "}
              </div>
            </div>
            <div className="card_time">
              <div className="title_time title_time_metric">
                {elapsedTime.days} DIAS{" "}
              </div>
            </div>
            <div className="card_time">
              <div className="title_time title_time_metric">
                {elapsedTime.hours} HORAS
              </div>
            </div>
            <div className="card_time">
              <div className="title_time title_time_metric">
                {elapsedTime.minutes} MINUTOS
              </div>
            </div>
            <div className="card_time">
              <div className="title_time title_time_metric">
                {elapsedTime.seconds} SEGUNDOS
              </div>
            </div>
            <div className="card_time_final">
              <div className="title_time title_time_metric">
                TE AMO!
                <i
                  className="bi bi-heart-fill"
                  style={{ marginLeft: "4px", color: "red", fontSize: "1rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
