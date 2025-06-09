import Image from "next/image";

export default function Projects() {
  const projects = [
   {
      title: "Inference Pipeline for Behavioral Analysis",
      description:
        "Designed and implemented an automated inference pipeline for behavioral video analysis. The system processes video data, extracts frames, applies trained ML models (YOLO, SAM, DensePose) for object detection and pose estimation, and generates annotated datasets for neuroscience research. Integrated likelihood-weighted learning to improve model robustness and accuracy.",
      // image: "/project-inference.jpg", // Add your project image or use a placeholder
      technologies: ["Python", "YOLO", "SAM", "DensePose", "OpenCV", "pandas", "NumPy"],
      github: "https://huggingface.co/mouselab", // Replace with your actual repo if available
      // live: "", // Add live demo link if available
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Developed a full-featured e-commerce web application using Node.js, MySQL, HTML, CSS, and JavaScript. Implemented Docker containerization and CI/CD integration via Jenkins. The platform supports user authentication, product management, shopping cart, and secure checkout.",
      // image: "/project-ecommerce.jpg", // Add your project image or use a placeholder
      technologies: ["Node.js", "MySQL", "HTML", "CSS", "JavaScript", "Docker", "Jenkins"],
      github: "https://github.com/yuancye/LifeOnGreen", // Replace with your actual repo if available
    },
   //  {
   //    title: "Environmental Monitoring System",
   //    description:
   //      "Created a Python-based system for monitoring environmental conditions using sensors (TSL2591, BME280) on Raspberry Pi. Designed a Tkinter GUI for real-time visualization, built RESTful APIs for data access, and implemented multithreading for concurrent data collection and logging with pandas.",
   //    // image: "/project-envmonitor.jpg",
   //    technologies: ["Python", "Flask", "Tkinter", "Raspberry Pi", "pandas", "I2C", "Multithreading"],
   //    github: "https://github.com/yourusername/env-monitor",
   //    // live: "" // Optional
   //  }
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* <div className="relative h-48">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              {/* </div> */} 
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub →
                  </a>
                  {/* {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 