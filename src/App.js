import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Quote from "./components/Quote/Quote";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import IntroVideo from "./components/IntroVideo/IntroVideo";
import TeamCard from "./components/TeamCard/TeamCard";
import Skill from "./components/Skill/Skill";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Footer from "./components/Footer/Footer";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Review from './components/Review/Review';

function App() {
  return (
    <div className="a">
      <Header />
      <About />
      <Services />
      <Quote />
      <ChooseUs />
      <IntroVideo />
      <TeamCard />
      <Skill done1="70" done2="50" done3="60" />
      <CaseStudy />
      <Review />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;
