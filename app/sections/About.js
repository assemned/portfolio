const About = () => {
  return (
    <section id="about">
      <div className="flexCenterCol max-cp gap-14 max-sm:gap-8 text-center">
        <h4 className="head-trans border-black">About me</h4>
        <p className="p4 max-w-2xl">
          <span className=" font-semibold">
            I'm Assem Ned, a Full Stack Web Developer and UI Designer.
          </span>
          <br />
          Turning ideas into digital reality is my thing. Passionate about
          creative, functional design, I'm here to bring your vision to life.
        </p>
        <a href="/" className="p3 side-border border-black">
          Explore
        </a>
        <img src="/separator.png" alt="separator" className="w-32" />

        <div className="flexRowCol p4 gap-16 max-sm:gap-8">
          <div>
            <h6 className="p1 font-bold tracking-widest">DEVELOPMENT</h6>
            <p>
              I can make websites that look good and work well. I take your
              ideas and turn them into a website that's easy to use and looks
              great.
            </p>
          </div>
          <div>
            <h6 className="p1 font-bold tracking-widest">DESIGN</h6>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <img src="/separator.png" alt="separator" className="w-32" />
      </div>
    </section>
  );
};

export default About;
