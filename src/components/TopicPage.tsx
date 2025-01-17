import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import machineLearningData from './data';

const TopicPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { topicId } = useParams();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const currentTopic = machineLearningData.find(topic => topic.path_id.toString() === topicId);

  if (!currentTopic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        {isSidebarOpen ? 'Close Menu' : 'Show Menu'}
      </button>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Sidebar */}
        <div className={`
          ${isSidebarOpen ? 'block' : 'hidden'}
          lg:block lg:col-span-3
          bg-white rounded-xl shadow-sm p-4 lg:p-6
          fixed lg:relative
          top-0 left-0
          w-full lg:w-auto
          h-full lg:h-auto
          z-50 lg:z-auto
          overflow-y-auto
        `}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-900">Contents</h2>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 rounded"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-3">
            {currentTopic.topics.map((subtopic, index) => (
              <li key={subtopic.id} className="flex items-center text-gray-400">
                <span className="mr-2">•</span>
                <Link to={`/topic/${topicId}/subtopic/${subtopic.id}`}>
                  <span>{subtopic.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 bg-white rounded-xl shadow-sm p-4 lg:p-6">
          <div className="mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              {currentTopic.title}
            </h1>
            <ProgressBar progress={75} />
          </div>

          <div className="prose max-w-none">
            <p>{currentTopic.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <button className="w-full sm:w-auto px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm lg:text-base">
              ← Previous
            </button>
            <button className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm lg:text-base">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;