import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowLeft,
  CheckCircle,
  XCircle,
  BookOpen, // Fallback icon
} from "lucide-react";
import { useAuth } from "./AuthContext";
import machineLearningData from "./data"; // Import machineLearningData

const TopicContent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { topicId, subtopicId } = useParams();

  // Redirect to login if user is not authenticated
  if (!user) {
    navigate("/login");
  }

  // Find the current topic and subtopic
  const currentTopic = machineLearningData.find(
    (topic) => topic.path_id.toString() === topicId
  );
  const currentSubtopic = currentTopic?.topics.find(
    (subtopic) => subtopic.id.toString() === subtopicId
  );

  // State for practice questions
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(
    {}
  );
  const [showExplanations, setShowExplanations] = useState<
    Record<string, boolean>
  >({});

  // Handle case where topic or subtopic is not found
  if (!currentTopic || !currentSubtopic) {
    return <div>Topic or Subtopic not found</div>;
  }

  // Calculate reading time based on subtopic content
  const readingTime = Math.ceil(currentSubtopic.theory.length / 200); // 200 words per minute

  // Handle answer selection for MCQs
  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
    setShowExplanations((prev) => ({ ...prev, [questionId]: true }));
  };

  // Fallback icon if currentTopic.icon is undefined
  const IconComponent = BookOpen; // Use BookOpen as a fallback

  // Logic for next and back buttons
  const currentSubtopicIndex = currentTopic.topics.findIndex(
    (subtopic) => subtopic.id.toString() === subtopicId
  );

  const nextSubtopic = currentTopic.topics[currentSubtopicIndex + 1];
  const prevSubtopic = currentTopic.topics[currentSubtopicIndex - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentTopic.completed
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {currentSubtopic.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readingTime} min</span>
            </div>
          </div>
        </div>

        {/* Overview Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            {currentSubtopic.theory}
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-gray-300 font-mono text-sm">
            <code>{`import numpy as np

# Example code for ${currentSubtopic.title}
x = np.array([1, 2, 3])
y = x ** 2
print(y)  # Output: [1 4 9]`}</code>
          </pre>
        </div>

        {/* Practice Questions */}
        <button
          onClick={() => setShowQuestions(!showQuestions)}
          className="w-full mt-8 bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {showQuestions
            ? "Hide Practice Questions"
            : "Start Practice Questions"}
        </button>

        {showQuestions && (
          <div className="mt-8 space-y-6">
            {currentSubtopic.mcqs.map((question, index) => {
              const questionId = `${subtopicId}-${index}`; // Unique question ID
              const isSelected = selectedAnswers[questionId] !== undefined;
              const selectedAnswer = selectedAnswers[questionId];
              const isCorrect =
                selectedAnswer !== undefined &&
                question.options[selectedAnswer] === question.answer;
              const showExplanation = showExplanations[questionId];

              return (
                <div
                  key={questionId}
                  className="bg-white rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-6">
                    {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(questionId, optionIndex)}
                        className={`w-full text-left p-4 rounded-xl transition-all transform hover:scale-[1.02]
                          ${
                            isSelected && showExplanation
                              ? optionIndex === selectedAnswer
                                ? isCorrect
                                  ? "bg-green-50 border-green-500 text-green-700"
                                  : "bg-red-50 border-red-500 text-red-700"
                                : "bg-gray-50 hover:bg-gray-100"
                              : "bg-gray-50 hover:bg-gray-100"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {isSelected &&
                            showExplanation &&
                            optionIndex === selectedAnswer &&
                            (isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-500" />
                            ))}
                        </div>
                      </button>
                    ))}
                  </div>
                  {showExplanation && (
                    <div
                      className={`mt-6 p-6 rounded-xl ${
                        isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      <p className="font-medium mb-2">Explanation:</p>
                      <p>{question.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 py-6 border-t border-gray-200">
          {prevSubtopic ? (
            <Link
              to={`/topic/${topicId}/subtopic/${prevSubtopic.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back: {prevSubtopic.title}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextSubtopic ? (
            <Link
              to={`/topic/${topicId}/subtopic/${nextSubtopic.id}`}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <span>Next: {nextSubtopic.title}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicContent;