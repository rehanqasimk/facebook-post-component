import FbImageLibrary from "react-fb-image-grid";
import "./App.css";
import image from "./assets/profile_pic.jpg";
import image1 from "./assets/image-1.jpg";
import image2 from "./assets/image-2.jpg";
import image3 from "./assets/image-3.jpg";
import image4 from "./assets/image-4.jpg";
import image5 from "./assets/image-5.jpg";
import image6 from "./assets/image-6.jpg";
import globe from "./assets/globe.jfif";

function App() {
  return (
    <div className="App border">
      <div className="profile_header">
        <div>
          <img src={image} className="profile_pic" />
        </div>
        <div className="">
          <div className="prof_name">
            <a className="text-decoration-none" href="#">
              Rehan Qasim
            </a>
          </div>
          <div className="ml-0 ">
            <span className="me-2 spon">sponsored</span>
            <span className="ms-5">
              <img src={globe} className="globe_css" />
            </span>
          </div>
        </div>
      </div>
      <div className="ms-5">
        <div className="ms-5 mt-5">Beautiful pictures</div>
        <FbImageLibrary
          images={[image1, image2, image3, image4, image5, image6]}
          Number={3}
        />
      </div>
    </div>
  );
}

export default App;
