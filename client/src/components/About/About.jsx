import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-us py-10 bg-white ">
      <div className="container mx-auto px-4">
        <div className="container2 flex flex-col md:flex-row gap-8 mt-4">
          {/* Left Column (Text) */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="heading">
              <h2 className="text-3xl font-bold text-[#38a19a]">About Us</h2>
            </div>
            <div className="para mb-2">
              <p>
                We at <strong>Screeno Graphix Press</strong> take pride in being
                your trusted local printing partner for over{" "}
                <strong>15 years</strong>. Our team specializes in a wide range
                of custom printing services including{" "}
                <strong>T-shirt printing</strong>,{" "}
                <strong>book printing</strong>, <strong>wedding cards</strong>,{" "}
                <strong>invitation cards</strong>, <strong>flex banners</strong>
                , <strong>business cards</strong>, and much more.
              </p>
            </div>
            <p>
              Our mission is to bring your ideas to life through high-quality,
              vibrant prints that are both creative and cost-effective. Whether
              it’s a personalized gift, bulk order for events, or professional
              branding material — we deliver with care and precision.
            </p>
            <p>
              Combining modern printing technology with a personal touch, every
              order at Screeno Graphix is handled with attention to detail and
              customer satisfaction in mind. We believe printing isn’t just a
              service — it’s a way to express, connect, and celebrate.
            </p>
            <p>
              Choose Screeno Graphix to make your vision print-ready. Because
              with us, printing becomes more than a process — it becomes an
              experience.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="flex-1 flex justify-center items-center mb-8 h-96 md:mt-0">
            <div className="box1  md:flex-row gap-4 mt-4">
              <img
                src="../../src/assets/Papa.jpeg"
                alt="papa"
                className="image1 w-full max-w-sm rounded shadow"
              />
              <br></br>
              <div className="flex flex-col justify-center items-center">
                <h2>Proprietor</h2>

                <h3>Anup Kumar Pandey</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="heading flex text-5xl font-bold text-[#38a19a] justify-center items-center mt-6 mb-8">
          <h1>Our Workplace</h1>
        </div>
        <div className="images grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="w-full aspect-[4/3] overflow-hidden rounded shadow">
            <img
              src="../../src/assets/flexmachine.jpeg"
              className="w-full h-full object-cover"
              alt="flexmachine"
            />
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden rounded shadow">
            <img
              src="../../src/assets/press.jpeg"
              className="w-full h-full object-cover"
              alt="press"
            />
          </div>
        </div>
        <div>
          <div className="address">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.0532519807366!2d87.45943419999999!3d25.73575250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39effbaeab013617%3A0x583e63fa2eaf6ae7!2sScreeno%20Graphix%20Press!5e0!3m2!1sen!2sin!4v1751170436732!5m2!1sen!2sin"
              width="1200"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="social-links flex justify-center items-center gap-4 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 text-xl hover:text-indigo-800"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 text-xl hover:text-indigo-800"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
