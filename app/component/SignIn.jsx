import Card from "./Card";
import HeroContent from "./HeroContent";
import SignInForm from "./SignInForm";

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
    </>
  );
};

export default SignIn;
