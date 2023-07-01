import Footer from "./Footer";
import Gmenu from "./Gmenu";
import Header from "./Header";
import MainContent from "./MainContent";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Gmenu />
      <MainContent />
      <Footer />
    </>
  );
};

export default Layout;
