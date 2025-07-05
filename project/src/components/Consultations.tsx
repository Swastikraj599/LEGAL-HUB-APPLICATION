import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Video, 
  Phone,
  CheckCircle,
  XCircle,
  Star,
  FileText,
  User,
  Filter,
  Plus,
  Eye
} from 'lucide-react';

const Consultations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const consultations = [
    {
      id: 1,
      lawyer: {
        name: 'Adv. Priya Sharma',
        specialization: 'Criminal Law',
        avatar: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9
      },
      date: '2024-01-20',
      time: '2:00 PM',
      duration: '45 minutes',
      type: 'Video Call',
      status: 'scheduled',
      caseType: 'Criminal Defense',
      description: 'Initial consultation regarding fraud charges',
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      amount: 2500,
      paymentStatus: 'paid'
    },
    {
      id: 2,
      lawyer: {
        name: 'Adv. Rajesh Kumar',
        specialization: 'Corporate Law',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.8
      },
      date: '2024-01-18',
      time: '10:30 AM',
      duration: '30 minutes',
      type: 'Phone Call',
      status: 'completed',
      caseType: 'Contract Review',
      description: 'Review of employment contract terms',
      amount: 1500,
      paymentStatus: 'paid',
      rating: 5,
      review: 'Excellent advice and very professional approach.'
    },
    {
      id: 3,
      lawyer: {
        name: 'Adv. Meera Patel',
        specialization: 'Family Law',
        avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.7
      },
      date: '2024-01-15',
      time: '4:00 PM',
      duration: '1 hour',
      type: 'In-person',
      status: 'completed',
      caseType: 'Divorce Proceedings',
      description: 'Discussion about divorce settlement options',
      amount: 3000,
      paymentStatus: 'paid',
      rating: 4,
      review: 'Very understanding and provided clear guidance.'
    },
    {
      id: 4,
      lawyer: {
        name: 'Adv. Suresh Reddy',
        specialization: 'Property Law',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.6
      },
      date: '2024-01-22',
      time: '11:00 AM',
      duration: '45 minutes',
      type: 'Video Call',
      status: 'pending',
      caseType: 'Property Dispute',
      description: 'Consultation about property boundary dispute',
      amount: 2800,
      paymentStatus: 'pending'
    },
    {
      id: 5,
      lawyer: {
        name: 'Adv. Kavita Singh',
        specialization: 'Constitutional Law',
        avatar: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
        rating: 4.9
      },
      date: '2024-01-12',
      time: '3:30 PM',
      duration: '1 hour',
      type: 'Video Call',
      status: 'cancelled',
      caseType: 'Constitutional Rights',
      description: 'Discussion about fundamental rights violation',
      amount: 3500,
      paymentStatus: 'refunded'
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'pending', label: 'Pending Approval' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];

  const getFilteredConsultations = () => {
    let filtered = consultations;

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(consultation => consultation.status === selectedStatus);
    }

    if (activeTab === 'upcoming') {
      filtered = filtered.filter(consultation => 
        consultation.status === 'scheduled' || consultation.status === 'pending'
      );
    } else if (activeTab === 'completed') {
      filtered = filtered.filter(consultation => consultation.status === 'completed');
    } else if (activeTab === 'cancelled') {
      filtered = filtered.filter(consultation => consultation.status === 'cancelled');
    }

    return filtered;
  };

  const filteredConsultations = getFilteredConsultations();

  const handleJoinMeeting = (consultation: any) => {
    if (consultation.meetingLink) {
      window.open(consultation.meetingLink, '_blank');
    } else {
      alert('Meeting link will be provided closer to the appointment time.');
    }
  };

  const handleReschedule = (consultationId: number) => {
    console.log(`Rescheduling consultation ${consultationId}`);
    alert('Reschedule request sent. You will be contacted to confirm new timing.');
  };

  const handleCancel = (consultationId: number) => {
    console.log(`Cancelling consultation ${consultationId}`);
    if (confirm('Are you sure you want to cancel this consultation?')) {
      alert('Consultation cancelled. Refund will be processed within 3-5 business days.');
    }
  };

  const handleLeaveReview = (consultationId: number) => {
    console.log(`Leaving review for consultation ${consultationId}`);
    alert('Review form opened. Please rate your experience.');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Call':
        return <Video className="h-4 w-4" />;
      case 'Phone Call':
        return <Phone className="h-4 w-4" />;
      case 'In-person':
        return <User className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">My Consultations</h1>
            <p className="text-gray-600">Manage your legal consultations and appointments</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4 mr-2 inline" />
            Book New Consultation
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Consultations</p>
              <p className="text-2xl font-bold text-gray-900">{consultations.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">
                {consultations.filter(c => c.status === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">
                {consultations.filter(c => c.status === 'scheduled' || c.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Avg Rating Given</p>
              <p className="text-2xl font-bold text-gray-900">4.3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <nav className="flex space-x-8">
              {['all', 'upcoming', 'completed', 'cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredConsultations.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No consultations found</h3>
              <p className="text-gray-500">
                {activeTab === 'upcoming' ? 'You have no upcoming consultations.' :
                 activeTab === 'completed' ? 'You have no completed consultations.' :
                 activeTab === 'cancelled' ? 'You have no cancelled consultations.' :
                 'You have no consultations matching the selected criteria.'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredConsultations.map((consultation) => (
                <div key={consultation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <img
                        src={consultation.lawyer.avatar}
                        alt={consultation.lawyer.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{consultation.lawyer.name}</h3>
                        <p className="text-sm text-blue-600">{consultation.lawyer.specialization}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{consultation.lawyer.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${getStatusColor(consultation.status)}`}>
                        {consultation.status}
                      </span>
                      <p className="text-sm text-gray-500">₹{consultation.amount}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {consultation.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {consultation.time} ({consultation.duration})
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      {getTypeIcon(consultation.type)}
                      <span className="ml-2">{consultation.type}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-1">{consultation.caseType}</h4>
                    <p className="text-sm text-gray-600">{consultation.description}</p>
                  </div>

                  {consultation.status === 'completed' && consultation.review && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 mr-2">Your Review:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= (consultation.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{consultation.review}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>Payment: {consultation.paymentStatus}</span>
                      {consultation.paymentStatus === 'paid' && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      {consultation.status === 'scheduled' && (
                        <>
                          <button
                            onClick={() => handleJoinMeeting(consultation)}
                            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors"
                          >
                            {consultation.type === 'Video Call' ? 'Join Meeting' : 
                             consultation.type === 'Phone Call' ? 'Call Details' : 'View Details'}
                          </button>
                          <button
                            onClick={() => handleReschedule(consultation.id)}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors"
                          >
                            Reschedule
                          </button>
                          <button
                            onClick={() => handleCancel(consultation.id)}
                            className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm hover:bg-red-200 transition-colors"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      
                      {consultation.status === 'pending' && (
                        <button
                          onClick={() => handleCancel(consultation.id)}
                          className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm hover:bg-red-200 transition-colors"
                        >
                          Cancel Request
                        </button>
                      )}
                      
                      {consultation.status === 'completed' && !consultation.review && (
                        <button
                          onClick={() => handleLeaveReview(consultation.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                        >
                          Leave Review
                        </button>
                      )}
                      
                      <button className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      
                      <button className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultations;