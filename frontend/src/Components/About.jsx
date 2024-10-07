import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious is Food.</p>
          </div>
          <p className="mid">
            At Delicious Food, we're driven by an unwavering commitment to
            quality, taste, and exceptional service. Our platform curates only
            the finest dining establishments, each vetted for their dedication
            to culinary excellence and fresh, high-quality ingredients. We
            understand that taste is personal, which is why our app offers
            detailed flavor profiles and user reviews to guide you to your
            perfect meal. Our service goes beyond just connecting you with great
            food – we prioritize a seamless, user-friendly experience from
            browse to bite. With features like real-time order tracking,
            customizable preferences, and responsive customer support, we ensure
            that your journey from craving to satisfaction is effortless and
            enjoyable. Whether you're a discerning foodie or simply in search of
            a delicious meal, Delicious Food is your trusted partner in
            exploring the rich tapestry of flavors your city has to offer. Join
            us in celebrating the art of good food and outstanding service.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
