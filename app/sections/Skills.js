import { frontend, backend, other, soft } from "./constants";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flexCenterCol max-cp gap-20 max-sm:gap-10 text-center p2">
        <h4 className="head-trans border-black">Skills</h4>

        <div className=" max-w-2xl w-full">
          <h6 className="h4 font-semibold mb-6 max-sm:mb-4">Front-End</h6>
          <div className="grid grid-cols-4 max-sm:grid-cols-3 w-full gap-8 max-sm:gap-5 items-start">
            {frontend.map((skill) => (
              <div key={skill.name} className="flexCenterCol gap-1">
                <img src={skill.img} className=" h-20 max-sm:h-14" />
                <p className="p1 uppercase tracking-widest">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" max-w-2xl w-full">
          <h6 className="h4 font-semibold mb-6 max-sm:mb-4">Back-End</h6>
          <div className="grid grid-cols-4 max-sm:grid-cols-3 w-full gap-8 max-sm:gap-5 items-start">
            {backend.map((skill) => (
              <div key={skill.name} className="flexCenterCol gap-1">
                <img src={skill.img} className=" h-20 max-sm:h-14" />
                <p className="p1 uppercase tracking-widest">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" max-w-2xl w-full">
          <h6 className="h4 font-semibold mb-6 max-sm:mb-4">Other Skills</h6>
          <div className="grid grid-cols-4 max-sm:grid-cols-3 w-full gap-8 max-sm:gap-5 items-start">
            {other.map((skill) => (
              <div key={skill.name} className="flexCenterCol gap-1">
                <img src={skill.img} className=" h-20 max-sm:h-14" />
                <p className="p1 uppercase tracking-widest">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className=" max-w-2xl w-full">
          <h6 className="h4 font-semibold mb-6 max-sm:mb-4">Soft Skills</h6>
          <div className="grid grid-cols-4 max-sm:grid-cols-3 w-full gap-8 max-sm:gap-5 items-start">
            {soft.map((skill) => (
              <div key={skill.name} className="flexCenterCol gap-1">
                <img src={skill.img} className=" h-20 max-sm:h-14" />
                <p className="p1 uppercase tracking-widest">{skill.name}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
