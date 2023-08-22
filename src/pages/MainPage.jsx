import Areas from "../components/Areas";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import People from "../components/People";
import Services from "../components/Services";

function MainPage () {

  return(
    <div>
      <Navbar />
      <Introduction />
      <Services />
      <Areas />
      <People />
      <Footer />
    </div>
  )
}

export default MainPage;