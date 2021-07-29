export default function Contact() {
  return (
    <main className="mx-6 main">
      <h1 className="font-bold font-medium text-2xl text-center my-0 tracking-wide">
        Let's Get in Touch!
      </h1>
      <section className="flex flex-col md:flex-row lg:flex-row w-full justify-between">
        <p className="text-justify mb-4  md:order-2 lg:order-2">
          If you have any questions feel free to give us a call during our open
          hours! We will gladly do our best to answer any questions you may have
          about the services we provide. You can also stop in during our open
          hours with your vehicle and we will gladly give an estimate based on
          the work to be done and answer any questions you may have.
        </p>

        {/* <iframe
                width="100"
                height="100"
                tabIndex="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3816161128993!2d-82.32423193724178!3d42.984320968049964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882583ed68d07b0d%3A0x51e75795df77f982!2s5809%20Blackwell%20Side%20Rd%2C%20Sarnia%2C%20ON%20N7W%201A1!5e0!3m2!1sen!2sca!4v1605933573280!5m2!1sen!2sca"
              ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.153271030641!2d-82.37098458452476!3d42.95397437915147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882582ddda3a707b%3A0x3b7657d9a99a5104!2s651%20McGregor%20Side%20Rd%2C%20Sarnia%2C%20ON%20N7S%204T1!5e0!3m2!1sen!2sca!4v1607066579726!5m2!1sen!2sca"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          height="250"
          className="w-full md:mx-4 lg:mx-4"
        ></iframe>
      </section>
    </main>
  );
}
