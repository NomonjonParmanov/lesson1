import Header from "./components/header/Header";
import Hobby from "./components/hobby/Hobby";
import Kurs from "./components/kurs/Kurs";
import Start from "./components/start/Start";
import Job from "./components/job/Job";
import "./sass/global.scss";
import Partner from "./components/partner/Partner";
import Learning from "./components/learning/Learning";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <Kurs />
      <Hobby />
      <Start />
      <Job />
      <Partner />
      <Learning />
      <Footer />
    </div>
  );
}

export default App;
