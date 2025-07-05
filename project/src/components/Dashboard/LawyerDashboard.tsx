import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Star, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  Edit,
  Plus
} from 'lucide-react';

const LawyerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const clientRequests = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      case: 'Property dispute',
      urgency: 'High',
      requestDate: '2024-01-15',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      case: 'Divorce proceedings',
      urgency: 'Medium',
      requestDate: '2024-01-14',
      status: 'pending'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      case: 'Contract review',
      urgency: 'Low',
      requestDate: '2024-01-13',
      status: 'accepted'
    }
  ];

  const appointments = [
    {
      id: 1,
      client: 'Sarah Wilson',
      type: 'Initial Consultation',
      date: '2024-01-18',
      time: '10:00 AM',
      duration: '1 hour',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Robert Brown',
      type: 'Case Review',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: '45 minutes',
      status: 'pending'
    },
    {
      id: 3,
      client: 'Emily Davis',
      type: 'Final Discussion',
      date: '2024-01-19',
      time: '11:30 AM',
      duration: '30 minutes',
      status: 'confirmed'
    }
  ];

  const recentCases = [
    {
      id: 1,
      title: 'Property Dispute - ABC vs XYZ',
      client: 'ABC Corporation',
      status: 'In Progress',
      lastUpdate: '2024-01-15',
      priority: 'High'
    },
    {
      id: 2,
      title: 'Contract Review - Tech Startup',
      client: 'Tech Innovations Ltd.',
      status: 'Completed',
      lastUpdate: '2024-01-12',
      priority: 'Medium'
    },
    {
      id: 3,
      title: 'Employment Law - Worker Rights',
      client: 'John Employee',
      status: 'Under Review',
      lastUpdate: '2024-01-10',
      priority: 'Low'
    }
  ];

  const earnings = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 58000 },
    { month: 'May', amount: 65000 },
    { month: 'Jun', amount: 72000 }
  ];

  const handleRequestAction = (id: number, action: 'accept' | 'decline') => {
    console.log(`${action} request ${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Lawyer Dashboard</h1>
            <p className="text-gray-600">Manage your practice and clients</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              <Plus className="h-4 w-4 mr-2 inline" />
              New Case
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors">
              <Edit className="h-4 w-4 mr-2 inline" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Active Clients</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Cases Won</p>
              <p className="text-2xl font-bold text-gray-900">187</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">₹72,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['overview', 'requests', 'appointments', 'cases', 'earnings'].map((tab) => (
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Client Requests */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Client Requests</h3>
                  <div className="space-y-3">
                    {clientRequests.slice(0, 3).map((request) => (
                      <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{request.name}</h4>
                            <p className="text-sm text-gray-500">{request.case}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            request.urgency === 'High' ? 'bg-red-100 text-red-800' :
                            request.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {request.urgency}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{request.requestDate}</span>
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleRequestAction(request.id, 'accept')}
                              className="text-green-600 hover:text-green-800"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button 
                              onClick={() => handleRequestAction(request.id, 'decline')}
                              className="text-red-600 hover:text-red-800"
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Appointments */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                  <div className="space-y-3">
                    {appointments.slice(0, 3).map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-gray-900">{appointment.client}</h4>
                            <p className="text-sm text-gray-500">{appointment.type}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{appointment.date}</span>
                          <span>{appointment.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requests' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Client Requests</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Requests</option>
                    <option>Pending</option>
                    <option>Accepted</option>
                    <option>Declined</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Urgency</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {clientRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{request.name}</h4>
                        <p className="text-sm text-gray-500 mb-2">{request.email}</p>
                        <p className="text-gray-700">{request.case}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
                          request.urgency === 'High' ? 'bg-red-100 text-red-800' :
                          request.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {request.urgency}
                        </span>
                        <p className="text-xs text-gray-500">{request.requestDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        request.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {request.status}
                      </span>
                      
                      {request.status === 'pending' && (
                        <div className="flex space-x-3">
                          <button className="text-gray-600 hover:text-gray-800">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button 
                            onClick={() => handleRequestAction(request.id, 'accept')}
                            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => handleRequestAction(request.id, 'decline')}
                            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
                          >
                            Decline
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'appointments' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Appointments</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Schedule New
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{appointment.client}</h4>
                        <p className="text-sm text-gray-500">{appointment.type}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {appointment.time} ({appointment.duration})
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition-colors">
                        Join Meeting
                      </button>
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Recent Cases</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Cases</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Under Review</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {recentCases.map((case_) => (
                  <div key={case_.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{case_.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">Client: {case_.client}</p>
                        <p className="text-xs text-gray-400">Last updated: {case_.lastUpdate}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
                          case_.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          case_.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {case_.status}
                        </span>
                        <p className="text-xs text-gray-500">{case_.priority} Priority</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          View Details
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm">
                          Add Note
                        </button>
                      </div>
                      <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-200 transition-colors">
                        <Edit className="h-4 w-4 mr-1 inline" />
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Earnings Overview</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Last 6 Months</option>
                    <option>This Year</option>
                    <option>Last Year</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">Total Earnings</h4>
                  <p className="text-3xl font-bold">₹3,40,000</p>
                  <p className="text-blue-100 text-sm">+12% from last period</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">This Month</h4>
                  <p className="text-3xl font-bold">₹72,000</p>
                  <p className="text-green-100 text-sm">+8% from last month</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">Average/Month</h4>
                  <p className="text-3xl font-bold">₹56,667</p>
                  <p className="text-purple-100 text-sm">6 months average</p>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium text-gray-900 mb-4">Monthly Breakdown</h4>
                <div className="space-y-3">
                  {earnings.map((month) => (
                    <div key={month.month} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{month.month}</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(month.amount / 80000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">₹{month.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;