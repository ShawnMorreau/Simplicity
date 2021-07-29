import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <body>
      <Head>
        <title>Simplicity Sarnia</title>
        <meta
          name="keywords"
          content="Automotive Collision Autobody Sarnia Repair Paint Estimates Estimate Car Vehicle
          Dent Dents Quality Body Shop Near Me Bluewater Simplicity"
        />
        <meta description="Formerly known as Bluewater Auto Painting Body Work &amp; Collision Centre" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <section className="my-16">
          <h1 className="text-6xl font-large text-black ml-6 md:text-center lg:text-center">Simplicity</h1>
          <h3 className="text-gray-300 ml-16 md:ml-0 lg:ml-0 md:text-center lg:text-center">Sarnia</h3>

          <section className="max-w-3xl rounded-lg mx-auto my-15 p-16 md:text-center lg:text-center">
            <h2 className="text-2xl font-medium mb-2">
              Autobody Collision Repair &amp; Painting Services
            </h2>
            <h2 className="font-medium text-sm text-blue-600  mb-4 uppercase tracking-wide">
              {/* A body shop you can trust */}
            </h2>
            <p className="text-gray-400">
              {" "}
              Discover our{" "}
              <Link href="/services">
                <a className="font-large text-lg hover:text-indigo-600 uppercase tracking-wide shadow-lg text-gray-800">
                  Services
                </a>
              </Link>
            </p>
          </section>
        </section>
        <section>
          <h3 className="font-bold text-xl font-large tracking-wide text-center mt-6">
            SIMPLY THE BEST SERVICE!
          </h3>
          <p className="text-md font-sm tracking-wide mx-6 text-justify">
            We simplify car care by delivering an amazing service experience.
            Our high quality paint and repair services will have you back on the
            road with your vehicle in amazing shape!
          </p>
          <ul className="flex flex-wrap sm:justify-center md:justify-around lg:justify-around flex-col md:flex-row lg:flex-row">
            <li className="homeServices">
              <Image
                src="/../public/images/estimates.png"
                width={"80"}
                height={"80"}
                objectFit='scale-down'
                aria-hidden="true"
                className="homeServicesImage"
              />
              <br />
              <span className="homeServicesText">Free Estimates</span>
            </li>
            <li className="homeServices">
              <Image
                src="/../public/images/quality.png"
                width={"80"}
                height={"80"}
                aria-hidden="true"
                objectFit='scale-down'
                className="homeServicesImage"
              />
              <br />
              <span className="homeServicesText block mx-auto">Quality Service</span>
            </li>
            <li className="homeServices">
              <Image
                src="/../public/images/experienced.png"
                width={"80"}
                height={"80"}
                aria-hidden="true"
                objectFit='scale-down'
                className="homeServicesImage"
              />
              <br />
              <span className="homeServicesText">Experienced Technicians</span>
            </li>
          </ul>
        </section>
        <section className="h-32 flex flex-col text-center w-full justify-items-center content-center bg-gray-500 border-b-2 border-t-2 border-black">
          <div className="w-full h-32 flex flex-col flex-wrap justify-center bg-red-100">
            <h3 className="font-bold font-large text-xl tracking-wide align-center">
              Interested In Our Services?
            </h3>
            <button className="bg-blue-600 self-center align-center mt-4 ring-blue-600 ring-opacity-60 ring-4 rounded">
              <Link href="/contact">
                <a className="p-2 rounded font-large text-xl text-white tracking-wide">
                  Contact Us
                </a>
              </Link>
            </button>
          </div>
        </section>
      </main>
    </body>
  );
}
