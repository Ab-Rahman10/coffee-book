import Banner from "../Components/Banner/Banner";
import Heading from "../Components/Heading/Heading";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Heading
        title="Browse Coffees by Category"
        subtitle="Choose your desired Coffee category to browse through specific coffees that fit in your taste."
      ></Heading>
    </div>
  );
};

export default Home;
