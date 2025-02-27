import Buttons from "../../components/buttons/Buttons";
import Hero from "../../components/hero/Hero";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="relative">
      <Hero />

      <Buttons/>

      <List />
    </div>
  );
};

export default Home;