import Layout from "./components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  const closeMenu = () => {
    const menu = document.querySelector("#menu-toggle");
    menu.checked = false;
  };
  pageProps.closeMenu = closeMenu;

  return (
    <Layout
      closeMenu={()=>closeMenu()}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
