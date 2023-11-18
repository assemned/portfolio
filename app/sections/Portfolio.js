import { projects } from "./constants";

const Portfolio = () => {
  return (
    <section id="portfolio" className=" text-white">
      <div className=" bg-primary-gray4 flexCenterCol gap-10 p-x p-y m-auto max-w-[1900]">
        <h4 className="head-trans border-white">Portfolio</h4>
        <p className="max-w-xl text-center">
          <span className=" font-semibold">
            Explore my work—simple, sleek, and functional.
          </span>
          <br />
          Dive into a collection of projects that showcase my abilities in web
          development.
        </p>
        <img
          src="/separator.png"
          alt="separator"
          className="w-32 filter brightness-0 invert"
        />
        <div className="grid grid-cols-3 pt-3 max-xl:grid-cols-2 max-md:grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.name}
              className=" w-full h-60 max-sm:h-40 relative">
              <img src={project.img} className=" object-cover w-full h-full" />
              <div className=" flexCenterCol gap-3 opacity-0 hover:opacity-100 absolute top-0 right-0 h-full w-full flexCenter text-white bg-black bg-opacity-70 duration-300 p-3 text-center">
                <p className="p1 font-semibold">{project.name}</p>
                <p className="p3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="p4 side-border mt-2">
                  DEMO
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-xl text-center p3 font-semibold">
          And many more to come!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
