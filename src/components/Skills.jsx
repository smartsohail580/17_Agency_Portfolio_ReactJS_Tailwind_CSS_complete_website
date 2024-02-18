
const skills = [
  { id: 1, name: "HTML & CSS", description: "As a front-end website developer, my foundation lies in crafting clean, semantic HTML structures paired with elegant CSS styles. With meticulous attention to detail, I ensure websites are not only visually appealing but also optimized for performance and accessibility.", image: "src/assets/skill1.png" },

  { id: 2, name: "React JS", description: "I specialize in harnessing the power of React JS to create dynamic and interactive user interfaces. Leveraging the component-based architecture of React, I build modern web applications that offer seamless user experiences and efficient data management.", image: "src/assets/skill2.png" },

  { id: 3, name: "Tailwind CSS / Material UI", description: "Proficient in harnessing the power of modern CSS frameworks like Tailwind CSS or Material UI, I streamline the development process by utilizing pre-built components and utility classes. Whether it's rapid prototyping with Tailwind's utility-first approach or crafting sleek interfaces with Material UI's robust components, I leverage these frameworks to create visually stunning and responsive designs efficiently.", image: "src/assets/skill3.png" },

  { id: 4, name: "UI/UX Designing", description: "In the realm of UI/UX designing, I combine creativity with user-centric design principles to craft intuitive and visually captivating interfaces. From wireframing to prototyping, I prioritize user feedback and usability testing to deliver designs that engage and delight", image: "src/assets/skill4.png" }
]

function Skills() {
  return (
    <div className="md:px-12 px-4 py-32" id="skills">
      <div className="text-headingColor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="md:text-5xl text-4xl font-bold">My Expertise</h2>
      </div>

      {/* skills card  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
          skills.map(skill => (
            <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all  duration-300 border-b-[#5E3BEE] border-[4px] ">
              <img src={skill.image} alt={skill.name} className="w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3" />
              <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              <p className="font-normal">{skill.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Skills;
