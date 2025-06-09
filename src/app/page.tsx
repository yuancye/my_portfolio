import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[40vh] flex items-center justify-center px-12 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:ml-12 lg:ml-16">
            <div className="space-y-6 md:col-span-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-blue-600">Yuanchao Ye</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                A passionate developer specializing in Sytem Design and Machine Learning.
                I love creating innovative solutions and turning ideas into reality.
              </p>
              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </a>
                <a
                  href="/projects"
                  className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                <Image
                  src="/round_me.jpeg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
              2+ years of experience in software design and implementation, building full-stack web apps and ML tools with a focus on AI-driven solutions in health tech.
              </p>
              <a href="/experience" className="text-blue-600 hover:underline mt-4 inline-block">
                Learn more →
              </a>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Check out my latest projects and contributions
              </p>
              <a href="/projects" className="text-blue-600 hover:underline mt-4 inline-block">
                View projects →
              </a>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Publications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore my research papers and articles
              </p>
              <a href="/publications" className="text-blue-600 hover:underline mt-4 inline-block">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
