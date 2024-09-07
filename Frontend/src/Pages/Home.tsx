import { Navbar  } from "../Components/Navbar";
import { Hero ,HeroCards, HowItWorks,Services,Footer,ScrollToTop,FAQ } from "../Components";


const Home = () => {


  return (
    <div className="  ">

      <Navbar />
      <Hero />
      <HowItWorks />
      <HeroCards />
      <Services />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />

    </div>
  );
}

export default Home;
