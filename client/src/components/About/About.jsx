import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about-us py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Left Column (Text) */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-[#38a19a]">About Us</h2>
            <p>
              We at <strong>Screeno Graphix Press</strong> take pride in being
              your trusted local printing partner for over{" "}
              <strong>15 years</strong>. Our team specializes in a wide range of
              custom printing services including
              <strong> T-shirt printing</strong>, <strong>book printing</strong>
              ,<strong> wedding cards</strong>,{" "}
              <strong>invitation cards</strong>,<strong> flex banners</strong>,
              and <strong>business cards</strong>.
            </p>
            <p>
              Our mission is to bring your ideas to life through high-quality,
              vibrant prints that are both creative and cost-effective.
            </p>
            <p>
              Combining modern printing technology with a personal touch, every
              order at Screeno Graphix is handled with care and customer
              satisfaction in mind.
            </p>
            <p>
              Choose Screeno Graphix to make your vision print-ready. Because
              with us, printing becomes more than a process — it becomes an
              experience.
            </p>
          </div>

          {/* Right Column (Image & Owner) */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <img
              src="../../src/assets/Papa.jpeg" // Make sure this path is correct based on public/assets or imported directly
              alt="Proprietor"
              className="w-full max-w-xs md:max-w-sm rounded shadow"
            />
            <div className="text-center">
              <h2 className="text-lg font-medium">Proprietor</h2>
              <h3 className="text-xl font-semibold">Anup Kumar Pandey</h3>
            </div>
          </div>
        </div>

        {/* Workplace Section */}
        <div className="text-center mt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#38a19a]">
            Our Workplace
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="w-full aspect-[4/3] overflow-hidden rounded shadow">
            <img
              src="../../src/assets/flexmachine.jpeg"
              alt="Flex Machine"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] overflow-hidden rounded shadow">
            <img
              src="../../src/assets/press.jpeg"
              alt="Press"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 w-full">
          <iframe
            className="w-full h-[400px] rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.0532519807366!2d87.45943419999999!3d25.73575250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39effbaeab013617%3A0x583e63fa2eaf6ae7!2sScreeno%20Graphix%20Press!5e0!3m2!1sen!2sin!4v1751170436732!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
