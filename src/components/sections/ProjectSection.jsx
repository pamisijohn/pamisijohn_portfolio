import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Full-stack",
  },
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Full-stack",
  },
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Frontend",
  },
  {
    title: "Solar Energy Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam, amet ex neque iste quidem?",
    image:
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20and%20mobile%20devices%2C%20clean%20UI%20design%20with%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20payment%20gateway%20integration%2C%20responsive%20web%20design%20with%20blue%20accent%20colors%20on%20white%20background&width=600&height=400&seq=project-1&orientation=landscape",
    tech: ["React", "Node.js", "MongoDB"],
    visit: "#",
    github: "#",
    category: "Full-stack",
  },
];

const ProjectSection = () => {
  const { isDarkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p
            className={`max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            View some of my personal projects and clients collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["All", "Frontend", "Backend", "Full-stack"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-md text-sm font-medium all-transition cursor-pointer whitespace-nowrap ${
                  filter == activeFilter
                    ? isDarkMode
                      ? "bg-blue-500 text-white"
                      : "bg-blue-600 text-white"
                    : isDarkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-block px-6 py-3 rounded-md font-medium all-transition cursor-pointer whitespace-nowrap ${
              isDarkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
