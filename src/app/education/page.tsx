export default function Education() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Education</h1>

        <div className="space-y-12">
          {/* Education Item */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">Georgia Institute of Technology</h2>
              <p className="text-gray-600 dark:text-gray-400">Master of Science in Computer Science</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Aug 2023 - June 2026 GPA: 4.0 / 4.0</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
            I'm pursuing my Master's degree in Computer Science at Georgia Tech, focusing on software engineering, machine learning, and AI system design. During my studies, I've gained hands-on experience in full-stack development, computer networking, database systems, and applied AI/ML algorithms. 
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Developed a reinforcement learning-based trading agent that outperformed benchmarks by 80% in-sample and 30% out-of-sample.</li>
                <li>Implemented supervised, unsupervised, and reinforcement learning algorithms to solve real-world classification, decision-making, and optimization tasks.</li>
                <li>Built a full-stack bidding web application using React.js, Node.js, and MySQL with RESTful API integration.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Relevant Courses: </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Machine Learning for trading</li>
                <li>Machine Learning</li>
                <li>Software Arch & Design</li>
                <li>Computer Networks</li>
                <li>Software Development and Process</li>
                <li>DB System Concepts & Design</li>
                {/* Add more as needed */}
              </ul>
            </div>
          </div>

          {/* Add more education items as needed */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">University of Washington</h2>
              <p className="text-gray-600 dark:text-gray-400">Non-matriculated student</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">Jan 2024 – Jun 2025</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
            As a non-matriculated student at the University of Washington, I deepened my understanding of database systems, web development, artificial intelligence, and natural language processing. My coursework was highly hands-on and project-focused, allowing me to design practical systems and experiment with foundational AI/ML techniques.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Developed a full-featured e-commerce web application using Node.js, MySQL, HTML, CSS, and JavaScript, with Docker containerization and CI/CD integration via Jenkins.</li>
                <li>Built a secure, cloud-integrated vaccine booking system in Java with Azure-hosted relational databases and robust CLI features for hospitals and clinics.</li>
                <li>Gained practical experience building AI and NLP models as part of course projects, including basic text classification and language understanding systems.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Relevant Courses:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Introduction to Database System</li>
                <li>Web Programming</li>
                <li>Introduction to AI</li>
                <li>Deep learning for NLP</li>

                {/* Add more as needed */}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid gap-6">
            {[
              {
                name: "Graduate Certificate in Software Design & Development",
                issuer: "University of Washington Bothell",
                date: "Sep 2022 – Jun 2023 GPA: 3.84 / 4.0",
                description: "This certificate program provided a rigorous foundation in modern software engineering practices, with a strong focus on object-oriented design, systems programming, and software quality assurance. The coursework emphasized both theoretical concepts and practical implementation using C++."
              },
              // Add more certifications as needed
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 