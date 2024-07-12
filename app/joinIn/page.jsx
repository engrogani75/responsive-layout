import AddOwn from "../component/AddOwn";
import Card from "../component/Card";
import Community from "../component/Community";
import Footer from "../component/Footer";
import HeroContent from "../component/HeroContent";
import JoinInForm from "../component/JoinInForm";
import SignInForm from "../component/SignInForm";
import Testomonial from "../component/Testomonial";

const JoinInpage = () => {
  return (
    <>
      <div className="container hero">
        <div className="row mt-4">
          <HeroContent></HeroContent>
          <JoinInForm></JoinInForm>
        </div>
      </div>

      <Card></Card>
      <AddOwn></AddOwn>
      <Testomonial></Testomonial>
      <Community></Community>
      <Footer></Footer>
    </>
  );
};

export default JoinInpage;
