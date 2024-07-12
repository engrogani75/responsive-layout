import Image from "next/image";
import community1 from "../../public/images/com.png";
import community2 from "../../public/images/comTwo.png";

const Community = () => {
  return (
    <div className="container community mt-4 d-flex justify-content-center">
      <div className="comimuny-section">
        <h1 className="mb-4 mt-5">
          {" "}
          Your
          <span className="colorTwo"> Hobby</span> Your{" "}
          <span className="colorOne">Community</span>....
        </h1>
        <button href="#" className="btn btn-outline-primary mt-4 mb-4">
          Get Started
        </button>
        <div className="d-flex">
          <Image src={community1} alt="community image" className="imgOne" />
          <Image src={community2} alt="community image" className="imgOne" />
        </div>
      </div>
    </div>
  );
};

export default Community;
