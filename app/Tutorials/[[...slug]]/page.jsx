import React from "react";
import { FaBookOpen, FaLayerGroup, FaFileAlt, FaCode } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const TutorialPage = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || [];
  const [technology, topic, page_no, subject] = slug;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="text-sm breadcrumbs mb-6 bg-base-200 px-4 py-2.5 rounded-xl border border-base-300">
        <ul className="flex items-center gap-2 text-gray-600 font-medium">
          <li>
            <a href="/" className="hover:text-[#003b36]">Home</a>
          </li>
          <MdNavigateNext className="text-gray-400" />
          <li className="uppercase font-bold text-[#003b36]">{technology || "Technology"}</li>
          <MdNavigateNext className="text-gray-400" />
          <li className="text-gray-500 capitalize">{topic || "Topic"}</li>
        </ul>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar / Quick Info Card */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-base-100 border border-base-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-lg text-[#003b36] mb-4 flex items-center gap-2">
              <FaBookOpen className="text-primary" /> Tutorial Index
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between p-2.5 bg-base-200/50 rounded-xl">
                <span className="text-gray-500 flex items-center gap-2"><FaCode /> Tech:</span>
                <span className="font-bold uppercase text-[#003b36]">{technology || "N/A"}</span>
              </li>
              <li className="flex items-center justify-between p-2.5 bg-base-200/50 rounded-xl">
                <span className="text-gray-500 flex items-center gap-2"><FaLayerGroup /> Topic:</span>
                <span className="font-semibold capitalize">{topic || "N/A"}</span>
              </li>
              <li className="flex items-center justify-between p-2.5 bg-base-200/50 rounded-xl">
                <span className="text-gray-500 flex items-center gap-2"><FaFileAlt /> Page No:</span>
                <span className="font-bold badge bg-[#bbf7d0] text-[#003b36] border-none">{page_no || "1"}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Main Article Section */}
        <div className="lg:col-span-3 bg-base-100 border border-base-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Header Banner */}
          <div className="border-b border-base-200 pb-6 mb-6">
            <span className="bg-[#bbf7d0] text-[#003b36] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {subject || "Overview"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003b36] mt-3 capitalize">
              {topic ? topic.replace(/-/g, " ") : "Tutorial Page"}
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              Comprehensive documentation and guide for mastering <span className="font-semibold text-gray-700">{technology || "this technology"}</span> concepts.
            </p>
          </div>

          {/* Article Body Content */}
          <div className="prose max-w-none text-gray-700 space-y-4">
            <h3 className="text-xl font-bold text-[#003b36]">Introduction</h3>
            <p className="leading-relaxed">
              Welcome to page <span className="font-bold">{page_no || "1"}</span> of our tutorial series. Here we explore foundational mechanisms, practical use-cases, and standard conventions associated with <span className="font-semibold">{subject || topic}</span>.
            </p>

            <div className="bg-base-200/60 border-l-4 border-[#003b36] p-4 rounded-r-xl my-4 text-sm">
              <p className="font-bold text-[#003b36]">Pro Tip:</p>
              <p className="text-gray-600 mt-1">
                Follow along with the code implementations and practice regularly to build strong core fundamentals.
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#003b36] pt-4">Key Takeaways</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Core concepts and architectural overview of {technology}.</li>
              <li>Hands-on implementation of {topic}.</li>
              <li>Best practices and efficient problem-solving techniques.</li>
            </ul>
          </div>

          {/* Bottom Pagination / Navigation */}
          <div className="flex justify-between items-center mt-10 pt-6 border-t border-base-200">
            <button className="btn btn-sm btn-outline border-base-300">
              ← Previous Page
            </button>
            <button className="btn btn-sm bg-[#003b36] hover:bg-[#002824] text-white">
              Next Lesson →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
// http://localhost:3000/Tutorials/react/useEffect()/pages/22/cleannnn
