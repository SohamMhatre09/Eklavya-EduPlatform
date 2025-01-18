import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Brain,
  Code,
  Database,
  Shield,
  BarChart2,
  Settings,
  Cloud,
  Terminal,
} from "lucide-react";
import { useAuth } from "./AuthContext";
import machineLearningData from "./data";

const icons = {
  BookOpen,
  Brain,
  Code,
  Database,
  Shield,
  BarChart2,
  Settings,
  Cloud,
  Terminal,
};

const topics = machineLearningData.map((path, index) => ({
  id: path.path_id.toString(),
  title: path.title,
  description: path.description,
  icon: BookOpen, // Default to BookOpen if icon is not found
  completed: false, // You can set this based on user progress
  side: index % 2 === 0 ? "left" : "right", // Alternate sides for layout
  subtopics: path.topics.map((topic) => topic.title),
}));

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
  side: string;
  subtopics: string[];
}

interface TopicCardProps {
  topic: Topic;
  user: any; // Replace 'any' with the appropriate type if available
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, user }) => {
  const navigate = useNavigate();
  const IconComponent = topic.icon;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!user) {
      e.preventDefault();
      navigate("/login");
    }
  };

  // Find the first subtopic ID for the topic
  const firstSubtopicId = machineLearningData
    .find((path) => path.path_id.toString() === topic.id)
    ?.topics[0]?.id;

  return (
    <Link
      to={user ? `/topic/${topic.id}/subtopic/${firstSubtopicId}` : "#"}
      onClick={handleClick}
    >
      <div
        className={`
          relative bg-white border-2 rounded-lg p-4 transition-all duration-200
          hover:shadow-lg transform hover:-translate-y-1 w-64
          ${topic.completed ? "border-blue-500" : "border-gray-200"}
          ${!user ? "opacity-75" : ""}
        `}
      >
        <div className="flex items-start gap-3">
          <div
            className={`p-2 rounded-lg ${
              topic.completed
                ? "bg-blue-50 text-blue-500"
                : "bg-gray-50 text-gray-400"
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">
              {topic.title}
            </h3>
            <div className="space-y-1">
              {topic.subtopics.map((subtopic, idx) => (
                <p
                  key={idx}
                  className="text-gray-500 text-xs flex items-center gap-1.5"
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      topic.completed ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                  {subtopic}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LearningPath = () => {
  const { user } = useAuth();
  const progress =
    (topics.filter((t) => t.completed).length / topics.length) * 100;
  const lastCompletedIndex = topics.findIndex((topic) => !topic.completed) - 1;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          AI Engineer Learning Path
        </h1>
        <p className="text-gray-500 mb-4">
          Master the fundamentals of AI Engineering
        </p>

        {!user && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <p className="text-yellow-700">
              Please{" "}
              <Link to="/login" className="font-medium underline">
                log in
              </Link>{" "}
              to access the full course content
            </p>
          </div>
        )}

        {user && (
          <div className="inline-flex items-center gap-3">
            <div className="h-2 w-40 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
        )}
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 top-0 w-0.5 h-full transform -translate-x-1/2">
          <div
            className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-500"
            style={{
              height:
                lastCompletedIndex >= 0
                  ? `${((lastCompletedIndex + 1) / topics.length) * 100}%`
                  : "0%",
            }}
          />
          <div
            className="absolute left-0 w-full bg-gray-200 transition-all duration-500"
            style={{
              top:
                lastCompletedIndex >= 0
                  ? `${((lastCompletedIndex + 1) / topics.length) * 100}%`
                  : "0%",
              height:
                lastCompletedIndex >= 0
                  ? `${100 - ((lastCompletedIndex + 1) / topics.length) * 100}%`
                  : "100%",
            }}
          />
        </div>

        <div className="relative">
          {topics.slice(0, user ? topics.length : 3).map((topic, index) => (
            <div
              key={topic.id}
              className={`flex items-center justify-center mb-8 relative ${
                topic.side === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  topic.side === "left" ? "pr-8 text-right" : "pl-8"
                }`}
              >
                <TopicCard topic={topic} user={user} />
              </div>

              <div className="relative">
                <div
                  className={`
                    w-6 h-6 rounded-full border-4 z-10 relative transition-colors duration-300
                    ${
                      topic.completed
                        ? "bg-blue-500 border-blue-200"
                        : "bg-white border-gray-300"
                    }
                  `}
                />
                {index !== topics.length - 1 && (
                  <div
                    className={`
                      absolute top-6 left-1/2 w-0.5 h-16 -translate-x-1/2
                      ${
                        topic.completed && topics[index + 1].completed
                          ? "bg-blue-500"
                          : "bg-gray-200"
                      }
                    `}
                  />
                )}
              </div>

              <div className="w-1/2" />
            </div>
          ))}
        </div>

        {!user && (
          <div className="text-center mt-8 p-6 bg-gray-50 rounded-xl z-10">
            <p className="text-gray-600 mb-4">
              Log in to access all topics and track your progress
            </p>
            <Link
              to="/login"
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Log In to Continue
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPath;