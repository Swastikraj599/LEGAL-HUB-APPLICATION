import React, { useState } from 'react';
import { BookOpen, FileText, Trophy, Clock, Star, Download, Play } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const studyMaterials = [
    {
      id: 1,
      title: 'Constitutional Law - Fundamental Rights',
      type: 'PDF',
      category: 'Constitutional Law',
      downloads: 1234,
      rating: 4.8,
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Criminal Law - IPC Sections',
      type: 'Video',
      category: 'Criminal Law',
      downloads: 892,
      rating: 4.6,
      size: '150 MB'
    },
    {
      id: 3,
      title: 'Contract Law - Essential Elements',
      type: 'PDF',
      category: 'Contract Law',
      downloads: 567,
      rating: 4.7,
      size: '1.8 MB'
    }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'Constitutional Law Mock Test',
      questions: 50,
      duration: '1 hour',
      attempts: 3,
      bestScore: 85,
      category: 'Constitutional Law'
    },
    {
      id: 2,
      title: 'Criminal Law Practice Test',
      questions: 40,
      duration: '45 minutes',
      attempts: 2,
      bestScore: 78,
      category: 'Criminal Law'
    },
    {
      id: 3,
      title: 'Civil Law Assessment',
      questions: 35,
      duration: '40 minutes',
      attempts: 1,
      bestScore: 92,
      category: 'Civil Law'
    }
  ];

  const recentActivity = [
    { action: 'Completed', item: 'Constitutional Law Quiz', score: 85, time: '2 hours ago' },
    { action: 'Downloaded', item: 'Criminal Law Notes', score: null, time: '1 day ago' },
    { action: 'Started', item: 'Contract Law Test', score: null, time: '2 days ago' }
  ];

  const categories = [
    { name: 'Constitutional Law', count: 45, icon: '⚖️' },
    { name: 'Criminal Law', count: 38, icon: '🔍' },
    { name: 'Civil Law', count: 32, icon: '📋' },
    { name: 'Contract Law', count: 28, icon: '📄' },
    { name: 'Property Law', count: 25, icon: '🏠' },
    { name: 'Corporate Law', count: 22, icon: '🏢' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
        <p className="text-gray-600">Track your progress and access study materials</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Study Materials</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Tests Taken</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Trophy className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">84%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">127</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['overview', 'materials', 'tests', 'performance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{category.name}</h4>
                            <p className="text-sm text-gray-500">{category.count} materials</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {activity.action} {activity.item}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                      {activity.score && (
                        <span className="text-sm font-medium text-green-600">{activity.score}%</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'materials' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Study Materials</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Categories</option>
                    <option>Constitutional Law</option>
                    <option>Criminal Law</option>
                    <option>Civil Law</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Types</option>
                    <option>PDF</option>
                    <option>Video</option>
                    <option>Audio</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {studyMaterials.map((material) => (
                  <div key={material.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{material.title}</h4>
                        <p className="text-sm text-gray-500">{material.category}</p>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{material.type}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{material.size}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>{material.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{material.downloads} downloads</span>
                      <div className="flex space-x-2">
                        {material.type === 'Video' ? (
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <Play className="h-4 w-4" />
                          </button>
                        ) : (
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                            <Download className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tests' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Mock Tests</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Take New Test
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockTests.map((test) => (
                  <div key={test.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{test.title}</h4>
                        <p className="text-sm text-gray-500">{test.category}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Best: {test.bestScore}%
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                      <div>
                        <span className="font-medium">Questions:</span> {test.questions}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {test.duration}
                      </div>
                      <div>
                        <span className="font-medium">Attempts:</span> {test.attempts}
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                      Start Test
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Score Trends</h4>
                  <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Performance chart would go here</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Subject Strengths</h4>
                  <div className="space-y-3">
                    {[
                      { subject: 'Constitutional Law', score: 92 },
                      { subject: 'Criminal Law', score: 85 },
                      { subject: 'Civil Law', score: 78 },
                      { subject: 'Contract Law', score: 71 }
                    ].map((item) => (
                      <div key={item.subject} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{item.subject}</span>
                        <div className="flex items-center">
                          <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${item.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{item.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;