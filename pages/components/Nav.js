import Link from "next/link";
export default function Nav(props) {
  const {closeMenu} = props;
  
  return (
    <header>
      <style jsx>
        {`
          #menu-toggle:checked + #menu {
            display: block;
          }
        `}
      </style>
      <section className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <Link href="/"><a>
            SIMPLICITY
          </a></Link>
        </div>
        <label
          htmlFor="menu-toggle"
          className="cursor-pointer lg:hidden block"
        >
          ---
        </label>
        <input type="checkbox" className="hidden" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-600 pt-4 lg:pt-0">
              <li>
                <Link href="/services">
                  <a className="menu-link"  onClick={closeMenu}>Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="menu-link" onClick={closeMenu}>Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}
