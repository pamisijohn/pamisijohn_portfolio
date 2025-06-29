import { useTheme } from "../../hooks/useTheme";
import SkillCategory from "../ui/SkillCategory";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "fa-code",
    skills: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js/Next.js", level: 92 },
      { name: "Three JS", level: 65 },
      { name: "Responsive Design", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    icon: "fa-server",
    skills: [
      { name: "Node,js", level: 50 },
      { name: "Express.js", level: 50 },
      { name: "Python/Django", level: 40 },
      { name: "RESTful APIs", level: 65 },
      { name: "GraphQL", level: 35 },
      { name: "PHP", level: 40 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: "fa-tools",
    skills: [
      { name: "Git/Github", level: 95 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 92 },
      { name: "Docker", level: 65 },
      { name: "Aws", level: 95 },
      { name: "CI/CD", level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="skills"
      className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Experience
          </h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            nisi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
