import { Link } from "react-router-dom";
import "./style/home.css";
export const Home = () => {
  const user = localStorage.getItem("user");
  const urlHomeImage = "https://embed.lottiefiles.com/animation/62018";
  return (
    <>
      <div className="description d-flex justify-content-around flex-wrap align-items-center">
        <div className="description-sme">
          <h2>Bansos Pemerintah</h2>
          <h3>
            Program bantuan <span>Covid-19</span>
          </h3>
          <p>
            Kementrian Sosial (Kemensos) Republik Indonesia memberikan bantuan
            kepada masyarakat Indonesia yang terdampak oleh pandemi Covid-19
          </p>
          <Link to={user ? "/data" : "/sign-in"}>Get Started</Link>
        </div>
        <div className="myLottie">
          <iframe
            src={urlHomeImage}
            title={urlHomeImage}
            className="d-flex justify-content-center"
            width="100%"
            height="500px"
          ></iframe>
        </div>
      </div>
    </>
  );
};
