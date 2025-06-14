const ProjectCard = ({ project, isDarkMode }) => {
  const { title, description, image, tech, visit, github } = project;

  return (
    <div
      className={`group rounded-xl overflow-hidden all-transition transform hover:-translate-y-2 hover:shadow-xl ${
        isDarkMode ? "bg-gray-700" : "bg-white shadow-md"
      }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p
          className={`text-sm mb-4 ${
            isDarkMode ? "text-gray-300" : `text-gray-600`
          }`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              className={`text-xs px-2 py-1 rounded-md ${
                isDarkMode
                  ? "bg-gray-600 text-gray-200"
                  : "bg-gray-100 text-gray-700"
              }`}
              key={index}>
              {item}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <a
            href={visit}
            className={`text-sm font-medium flex items-center cursor-pointer ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}>
            <i className="fas fa-external-link-alt mr-2"></i> Visit
          </a>
          <a
            href={github}
            className={`text-sm font-medium flex items-center cursor-pointer ${
              isDarkMode
                ? "text-blue-400 hover:text-blue-300"
                : "text-blue-600 hover:text-blue-700"
            }`}>
            <i className="fa-brands fa-github mr-2"></i> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
