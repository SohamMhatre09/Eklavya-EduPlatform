import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Edit2, Award, Clock, BookOpen, Mail, Calendar, User, Star } from 'lucide-react';

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('Learning enthusiast');

  // Placeholder data (to be replaced with real data later)
  const placeholderData = {
    completedTopics: ['Python Basics', 'Data Types', 'Control Flow'],
    achievements: [
      { id: '1', title: 'First Login', emoji: '🎉', date: '2024-01-15' },
      { id: '2', title: 'Quick Learner', emoji: '🚀', date: '2024-01-16' },
      { id: '3', title: 'Active Student', emoji: '📚', date: '2024-01-17' },
      { id: '4', title: 'Team Player', emoji: '🤝', date: '2024-01-18' }
    ],
    interests: ['Machine Learning', 'Data Science', 'Web Development', 'AI'],
    recentActivity: [
      { id: 1, activity: 'Completed Python Basics', date: '2024-01-15' },
      { id: 2, activity: 'Started Data Structures', date: '2024-01-16' },
      { id: 3, activity: 'Earned Quick Learner Badge', date: '2024-01-17' }
    ]
  };

  const joinDate = user?.metadata?.creationTime 
    ? new Date(user.metadata.creationTime).toLocaleDateString()
    : 'N/A';

  const calculateProgress = () => {
    return (placeholderData.completedTopics.length / 10) * 100; // Assuming 10 total topics
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || 'User'}&background=random`}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {user?.emailVerified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white" 
                   title="Email Verified"/>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {user?.displayName || 'Anonymous User'}
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mt-1">
                  <Mail className="w-4 h-4" />
                  <span>{user?.email}</span>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center justify-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            </div>
            
            {isEditing ? (
              <div className="mt-4">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
                <button
                  onClick={() => setIsEditing(false)}
                  className="mt-2 px-4 py-2 bg-black text-white rounded-full text-sm"
                >
                  Save Bio
                </button>
              </div>
            ) : (
              <p className="mt-4 text-gray-600">{bio}</p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 text-blue-600 mb-2">
            <BookOpen className="w-5 h-5" />
            <h3 className="font-semibold">Learning Progress</h3>
          </div>
          <ProgressBar progress={calculateProgress()} />
          <p className="mt-2 text-sm text-gray-600">
            {placeholderData.completedTopics.length} topics completed
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 text-yellow-600 mb-2">
            <Award className="w-5 h-5" />
            <h3 className="font-semibold">Achievements</h3>
          </div>
          <p className="text-2xl font-bold">{placeholderData.achievements.length}</p>
          <p className="text-sm text-gray-600">badges earned</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 text-green-600 mb-2">
            <Calendar className="w-5 h-5" />
            <h3 className="font-semibold">Member Since</h3>
          </div>
          <p className="text-sm text-gray-600">{joinDate}</p>
        </div>
      </div>

      {/* Account Status */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Status</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${user?.emailVerified ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
            <span className="text-gray-600">
              Email Status: {user?.emailVerified ? 'Verified' : 'Not Verified'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">
              Sign-in Provider: {user?.providerData[0]?.providerId === 'google.com' 
                ? 'Google Account' 
                : user?.providerData[0]?.providerId || 'Email/Password'}
            </span>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {placeholderData.achievements.map((achievement) => (
            <div key={achievement.id} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                <span className="text-2xl">{achievement.emoji}</span>
              </div>
              <span className="text-sm text-gray-900 font-medium text-center">
                {achievement.title}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {new Date(achievement.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Interests */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Interests</h2>
        <div className="flex flex-wrap gap-2">
          {placeholderData.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {placeholderData.recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{activity.activity}</span>
              <span className="text-sm text-gray-400">
                {new Date(activity.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;