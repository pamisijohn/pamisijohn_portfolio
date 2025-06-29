const SkillCategory = ({ category, isDarkMode }) => {
  return (
    <div
      className={`rounded-xl p-8 all-transition ${
        isDarkMode
          ? "bg-gray-800 hover:bg-gray-750"
          : "bg-gray-50 hover:bg-gray-100"
      }`}>
      <div className="text-center mb-6">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            isDarkMode
              ? "bg-blue-500/20 text-blue-400"
              : "bg-blue-100 text-blue-600"
          }`}>
          <i className={`fas ${category.icon} text-2xl`}></i>
        </div>
        <h3 className="text-xl font-bold">{category.category}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span
                className={`text-xs font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                {skill.level}%
              </span>
            </div>
            <div
              className={`w-full h-2 rounded-full ${
                isDarkMode ? "bg-gray-700" : "bg-gray-200"
              }`}>
              <div
                className={`h-2 rounded-full ${
                  isDarkMode ? "bg-blue-500" : "bg-blue-600"
                }`}
                style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
