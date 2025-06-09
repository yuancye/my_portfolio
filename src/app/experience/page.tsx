export default function Experience() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Work Experience</h1>

        <div className="space-y-12">
          {/* Experience Item */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">University of Washington</h2>
              <p className="text-gray-600 dark:text-gray-400">Research Scientist</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">12/2019 - current</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            As a Research Scientist, I focus on building software tools for behavioral analysis, with an emphasis on video/image processing, data annotation pipelines, and preparing machine learning training data.
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Key Responsibilities:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>eveloped scripts to automate video frame extraction and generate annotated datasets, including bounding boxes, segmentation masks, and DensePose keypoints.</li>
                <li>Engineered a data transformation pipeline to reshape annotated video data into model-compatible training formats, incorporating per-keypoint likelihood scores.</li>
                <li>Processed and visualized large-scale behavioral data using pandas and NumPy to support neuroscience research on feeding behavior.</li>
              </ul>
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold">Key Achievements:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                <li>Created a scalable annotation workflow that streamlined dataset preparation across multiple models (YOLO, SAM, DensePose).</li>
                <li>Integrated likelihood-weighted learning into the training pipeline to improve model robustness and accuracy.</li>
                <li>Reduced manual labeling time by 95% through automation of preprocessing and annotation steps.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "pandas", "NumPy", "OpenCV", "Matplotlib", "YOLO", "SAM", "DensePose", "Gradio", "Hugging Face Spaces", "Flask", "Tkinter", "Raspberry Pi", "multithreading", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Add more experience items as needed */}
          {/* <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
            <div className="mb-2">
              <h2 className="text-2xl font-semibold">[Previous Company]</h2>
              <p className="text-gray-600 dark:text-gray-400">[Previous Job Title]</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">[Start Date] - [End Date]</p>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              [Brief description of the company and your role]
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
} 