import Nav from "./components/Nav";
import Image from "next/image";
export default function Services() {
  return (
    <main className="main">
      <h1 className="text-center text-2xl font-large tracking-wide font-bold my-2">
        OUR SERVICES
      </h1>
      <p className="mx-12 text-lg font-medium tracking-wide text-justify md:text-center lg:text-center my-2">
        Below you can find the many services we provide in order to get you back
        on the road again, with your car in spectactular shape.
      </p>
      <ul className="flex flex-row justify-center flex-wrap">
        <li className="service">
          <Image
            src="/../public/images/estimates.png"
            width={"80"}
            height={"80"}
            objectFit="scale-down"
            aria-hidden="true"
          />
          <h3 className="serviceTitle">Free Estimates</h3>
          <p className="serviceDesc">
            We will assess the work needed to be done and provide an easy to
            understand estimate. We strive to provide fair pricing
          </p>
        </li>
        <li className="service">
          <Image
            src="/../public/images/service.png"
            width={"80"}
            height={"80"}
            objectFit="scale-down"
            aria-hidden="true"
          />
          <h3 className="serviceTitle">Collision Repair</h3>
          <p className="serviceDesc">
            With a full range of services, from minor dents to major body work,
            we’ll repair whatever damage has been done.
          </p>
        </li>
        <li className="service">
          <Image
            src="/../public/images/paintlg.png"
            width={"80"}
            height={"80"}
            objectFit="scale-down"
            aria-hidden="true"
          />
          <h3 className="serviceTitle">Touch Ups &amp; Repaints</h3>
          <p className="serviceDesc">
            At Simplicity, we offer a full scope of paint options from touch ups
            to a whole new look.
          </p>
        </li>
        <li className="service">
          <Image
            src="/../public/images/car.png"
            width={"80"}
            height={"80"}
            objectFit="scale-down"
            aria-hidden="true"
          />
          <h3 className="serviceTitle">Glass Repair &amp; Replacement</h3>
          <p className="serviceDesc mb-4">
            Whether it’s full windshield replacement or minor repairs,
            Simplicity’s windshield service is up to the task.
          </p>
        </li>
      </ul>
    </main>
  );
}
