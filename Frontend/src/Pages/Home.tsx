import { Navbar  } from "../Components/Navbar";
import { Hero , Sponsors, About,HeroCards, HowItWorks, Features,Services,Cta,Testimonials,Team,Pricing,Newsletter,FAQ,Footer,ScrollToTop } from "../Components";
import { useSelector } from "react-redux";
import { RootState } from '../../store'; // delete it later

const Home = () => {
  //For testing purposes projects are being printed on console; delete them later
  const location = useSelector((state: RootState) => state.user.location);
  console.log(location);

  return (
    <div className="  ">
      {/* <Navbar/> */}
      <Navbar />
      <Hero />

      {/* <About /> */}
      <HowItWorks />
      <HeroCards />
      {/* <Features /> */}
      <Services />
      {/* <Cta /> */}
      <Testimonials />
      <Team />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
