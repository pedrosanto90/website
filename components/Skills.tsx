import data from '../utils/consts';
export default function Skills() {
  const skills = data.skills;
  return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <div 
                  key={skill}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-gray-800 hover:shadow-md transition-shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
