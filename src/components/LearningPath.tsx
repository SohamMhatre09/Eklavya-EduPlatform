import React from "react";
import { Link } from "react-router-dom";
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
  LucideProps,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export const topics = [
  {
    id: 1,
    title: "Foundations of AI & ML",
    completed: false,
    icon: BookOpen,
    side: "left",
    subtopics: [
      "AI vs ML vs Deep Learning",
      "Types of Machine Learning",
      "ML Development Lifecycle",
      "Data Science Environment Setup",
    ],
  },
  {
    id: 2,
    title: "Working with Pre-trained Models",
    completed: false,
    icon: Brain,
    side: "right",
    subtopics: [
      "Understanding Model Capabilities",
      "Model Selection Criteria",
      "Fine-tuning Strategies",
      "Model Evaluation Metrics",
    ],
  },
  {
    id: 3,
    title: "Data Engineering for AI",
    completed: false,
    icon: Database,
    side: "left",
    subtopics: [
      "Data Preprocessing Pipelines",
      "Feature Engineering",
      "Data Validation & Quality",
      "ETL Processes",
    ],
  },
  {
    id: 4,
    title: "ML Model Development",
    completed: false,
    icon: BarChart2,
    side: "right",
    subtopics: [
      "Supervised Learning Techniques",
      "Unsupervised Learning Methods",
      "Model Optimization",
      "Ensemble Approaches",
    ],
  },
  {
    id: 5,
    title: "AI Systems Integration",
    completed: false,
    icon: Settings,
    side: "left",
    subtopics: [
      "API Development",
      "Model Serving",
      "System Architecture",
      "Performance Optimization",
    ],
  },
  {
    id: 6,
    title: "MLOps & Deployment",
    completed: false,
    icon: Cloud,
    side: "right",
    subtopics: [
      "Model Versioning",
      "Deployment Strategies",
      "Monitoring & Logging",
      "Infrastructure Management",
    ],
  },
  {
    id: 7,
    title: "AI Safety & Ethics",
    completed: false,
    icon: Shield,
    side: "left",
    subtopics: [
      "Responsible AI Development",
      "Bias Detection & Mitigation",
      "Privacy Considerations",
      "Security Best Practices",
    ],
  },
  {
    id: 8,
    title: "Advanced AI Engineering",
    completed: false,
    icon: Terminal,
    side: "right",
    subtopics: [
      "Large Language Models",
      "Custom Model Development",
      "Scaling AI Systems",
      "Production Optimization",
    ],
  },
];

interface Topic {
  id: number;
  title: string;
  completed: boolean;
  icon: React.ComponentType<LucideProps>;
  side: string;
  subtopics: string[];
}

interface TopicCardProps {
  topic: Topic;
  user: any; // Add proper type based on your user object structure
}

const TopicCard = ({ topic, user }: TopicCardProps) => {
  const IconComponent = topic.icon;

  const handleClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      window.location.href = "/login";
    }
  };

  return (
    <Link to={`/topic/${topic.id}`} onClick={handleClick}>
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
              {topic.subtopics.map((subtopic: string, idx: number) => (
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
          <div className="text-center mt-8 p-6 bg-gray-50 rounded-xl">
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