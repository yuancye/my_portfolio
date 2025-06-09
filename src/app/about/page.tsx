export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
          Hi! I'm Yuanchao Ye, a software engineer and former research scientist with a deep interest in full-stack development, machine learning, and AI system architecture. After over 10 years of hands-on work wet lab research, I've transitioned into software engineering to build tools that combine scientific insight with technical innovation. Through coursework, personal projects, and academic research, I've gained experience designing robust, data-driven applications and exploring AI/ML algorithms.
          </p>
         <p className="text-lg mb-6">
         While I haven't yet deployed a production system or built software with active users, I've developed multiple full-stack and ML-based projects that demonstrate my ability to design systems from end to end. I thrive at the intersection of technology and health, and I'm excited to continue growing as a developer by contributing to mission-driven projects that make a tangible  impact.
          </p>

          

          <h2 className="text-2xl font-semibold mt-12 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[
              "React/Next.js",
              "SQL",
              "Git",
              "DB",
              "CI/CD",
              "system design",
              "testing",
              "data analysis",
              "pytorch"
              // Add more skills as needed
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center"
              >
                {skill}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Interests</h2>
          <p className="mb-6">
          I enjoy spending time in nature—whether it's hiking, camping, clamming, or fishing, being outdoors helps me recharge and stay inspired. Exploring the natural beauty of the Pacific Northwest is one of my favorite pastimes. I also enjoy experimenting with small tech projects in my free time, blending my curiosity for science and engineering with hands-on creativity.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-6">Career Goals</h2>
          <p className="mb-6">
          After 10+ years in wet lab research, I transitioned into software engineering to pursue my passion for architecting intelligent systems. While I have hands-on experience with AI/ML algorithms through coursework and applied projects, my true interest lies in designing and building the end-to-end architecture that enables machine learning to operate reliably at scale—especially in the health tech space. I aim to contribute to engineering teams that develop platforms and tools for scientific discovery, healthcare analytics, or patient-focused applications, where robust infrastructure and AI integration can drive real-world impact. Ultimately, I aspire to become a technical architect or engineering lead, leveraging both my scientific background and software expertise to shape scalable, AI-powered systems that advance human health.
          </p>
        </div>
      </div>
    </div>
  );
} 