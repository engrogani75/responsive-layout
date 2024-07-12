import Image from "next/image";
import avetor from "../../public/images/Group 27.png";

const HeroContent = () => {
  return (
    <div className="col-md-7">
      <h1 className="mb-4">
        Explore your <span className="colorOne">hobby</span> or{" "}
        <span className="colorTwo">passion</span>
      </h1>
      <p>
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities.
      </p>
      <p>
        If you are an expert or a seller, you can add your listing and promote
        yourself, your students, products, services, or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>
      <Image src={avetor} className="mt-3 heroImg" alt="avator" />
    </div>
  );
};

export default HeroContent;
