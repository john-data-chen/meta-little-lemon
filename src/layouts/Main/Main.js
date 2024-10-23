import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main data-testid="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
