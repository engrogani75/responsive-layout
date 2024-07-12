import AddOwn from "./AddOwn";
import Card from "./Card";
import Community from "./Community";
import Footer from "./Footer";
import HeroContent from "./HeroContent";
import SignInForm from "./SignInForm";
import Testomonial from "./Testomonial";

const SignIn = () => {
  return (
    <>
      <div className="container hero">
        <div className="row mt-4">
          <HeroContent></HeroContent>
          <SignInForm></SignInForm>
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

export default SignIn;
