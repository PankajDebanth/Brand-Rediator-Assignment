import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";

const Main_Home = ()=> {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Main_Home;
