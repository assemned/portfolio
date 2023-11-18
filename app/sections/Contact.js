const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="max-cp flexCenterCol gap-16">
        <div className="flexCenterCol gap-10">
          <h4 className="head-trans border-black">Contact</h4>
          <p className="max-w-xl text-center">
            <span className=" font-semibold">Get in touch—quick and easy.</span>
            <br /> Have questions or a project in mind? Reach out, and let's
            make it happen. Your message is just a click away from turning ideas
            into reality.
          </p>
          <img src="/separator.png" alt="separator" className="w-32" />
        </div>
        <form className="flexCenterCol gap-10 w-full">
          <input
            type="text"
            className="input"
            placeholder="ENTER YOUR NAME"></input>
          <input
            type="text"
            className="input"
            placeholder="ENTER YOUR EMAIL"></input>
          <input
            type="number"
            className="input"
            placeholder="PHONE NUMBER (optional)"></input>
          <textarea placeholder="YOUR MESSAGE" className="input h-40" />

          <button className="side-border border-black">submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
