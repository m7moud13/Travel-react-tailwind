import { Footer } from "./Components/Footer";
import { Landing } from "./Components/Landing";
import { Navbar } from "./Components/Navbar";
import { Resorts } from "./Components/Resorts";
import { Search_section } from "./Components/Search_section";
import { Select } from "./Components/Select";
import { Slider } from "./Components/Slider";


function App() {
  return (
    <>
    <Navbar />
      <Landing />
      <Resorts />
      <Search_section />
      <Select />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
