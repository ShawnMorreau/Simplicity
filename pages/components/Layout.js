import NavBar from "./Nav";
import Footer from "./Footer";
export default function Layout({ children, closeMenu }) {
  return (
    <>
      <NavBar
        closeMenu={closeMenu}/>
      {children}
      <Footer/>
    </>
  );
}
