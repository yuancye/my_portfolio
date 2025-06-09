'use client';
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:yuancye@uw.edu"
                  className="text-blue-600 hover:underline"
                >
                  yuancye@uw.edu
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  750 republic street, Seattle, WA, USA
                </p>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <Map />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Social Links</h3>
                <div className="space-y-2">
                  <a
                    href="https://linkedin.com/in/yuanchaoye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/yuancye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 