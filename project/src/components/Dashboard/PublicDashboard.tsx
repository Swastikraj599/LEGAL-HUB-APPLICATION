import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  Phone,
  Mail,
  Award,
  Users,
  FileText,
  CheckCircle
} from 'lucide-react';

const PublicDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('find-lawyers');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const lawyers = [
    {
      id: 1,
      name: 'Adv. Priya Sharma',
      specialization: 'Criminal Law',
      experience: 8,
      location: 'Delhi',
      rating: 4.9,
      reviews: 156,
      hourlyRate: 2500,
      avatar: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['Hindi', 'English'],
      about: 'Experienced criminal lawyer with expertise in white-collar crimes and corporate fraud.',
      casesSolved: 234,
      successRate: 92
    },
    {
      id: 2,
      name: 'Adv. Rajesh Kumar',
      specialization: 'Corporate Law',
      experience: 12,
      location: 'Mumbai',
      rating: 4.8,
      reviews: 203,
      hourlyRate: 3000,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['English', 'Marathi'],
      about: 'Corporate law expert specializing in mergers, acquisitions, and compliance.',
      casesSolved: 187,
      successRate: 89
    },
    {
      id: 3,
      name: 'Adv. Meera Patel',
      specialization: 'Family Law',
      experience: 6,
      location: 'Ahmedabad',
      rating: 4.7,
      reviews: 89,
      hourlyRate: 2000,
      avatar: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['Gujarati', 'Hindi', 'English'],
      about: 'Family law specialist with focus on divorce, custody, and matrimonial disputes.',
      casesSolved: 145,
      successRate: 88
    },
    {
      id: 4,
      name: 'Adv. Suresh Reddy',
      specialization: 'Property Law',
      experience: 15,
      location: 'Hyderabad',
      rating: 4.6,
      reviews: 124,
      hourlyRate: 2800,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['Telugu', 'English'],
      about: 'Property law veteran with extensive experience in real estate transactions.',
      casesSolved: 298,
      successRate: 91
    }
  ];

  const consultations = [
    {
      id: 1,
      lawyer: 'Adv. Priya Sharma',
      date: '2024-01-20',
      time: '2:00 PM',
      type: 'Initial Consultation',
      status: 'scheduled',
      caseType: 'Criminal Law',
      duration: '45 minutes'
    },
    {
      id: 2,
      lawyer: 'Adv. Rajesh Kumar',
      date: '2024-01-18',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'completed',
      caseType: 'Corporate Law',
      duration: '30 minutes'
    },
    {
      id: 3,
      lawyer: 'Adv. Meera Patel',
      date: '2024-01-15',
      time: '4:00 PM',
      type: 'Case Review',
      status: 'completed',
      caseType: 'Family Law',
      duration: '1 hour'
    }
  ];

  const specializations = [
    { value: 'all', label: 'All Specializations' },
    { value: 'criminal', label: 'Criminal Law' },
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'family', label: 'Family Law' },
    { value: 'property', label: 'Property Law' },
    { value: 'employment', label: 'Employment Law' },
    { value: 'tax', label: 'Tax Law' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'ahmedabad', label: 'Ahmedabad' },
    { value: 'pune', label: 'Pune' }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                 lawyer.specialization.toLowerCase().includes(selectedSpecialization);
    const matchesLocation = selectedLocation === 'all' || 
                           lawyer.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesSpecialization && matchesLocation;
  });

  const handleConsultationRequest = (lawyerId: number) => {
    console.log(`Requesting consultation with lawyer ${lawyerId}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Find Legal Help</h1>
        <p className="text-gray-600">Connect with qualified lawyers for your legal needs</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Available Lawyers</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Cases Resolved</p>
              <p className="text-2xl font-bold text-gray-900">12,456</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.7</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">2 hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {['find-lawyers', 'consultations', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'find-lawyers' && (
            <div className="space-y-6">
              {/* Search and Filters */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search lawyers..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <select
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                  >
                    {specializations.map((spec) => (
                      <option key={spec.value} value={spec.value}>
                        {spec.label}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value}>
                        {loc.label}
                      </option>
                    ))}
                  </select>
                  
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    <Filter className="h-4 w-4 mr-2 inline" />
                    Filter
                  </button>
                </div>
              </div>

              {/* Lawyers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLawyers.map((lawyer) => (
                  <div key={lawyer.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src={lawyer.avatar}
                          alt={lawyer.name}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 flex items-center">
                            {lawyer.name}
                            {lawyer.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500 ml-1" />
                            )}
                          </h3>
                          <p className="text-sm text-gray-500">{lawyer.specialization}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm ml-1 text-gray-700">{lawyer.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {lawyer.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2" />
                        {lawyer.experience} years experience
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {lawyer.reviews} reviews
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{lawyer.about}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Cases Won:</span>
                          <span className="font-medium ml-1">{lawyer.casesSolved}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Success Rate:</span>
                          <span className="font-medium ml-1">{lawyer.successRate}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">₹{lawyer.hourlyRate}</span>
                        <span className="text-sm text-gray-500">/hour</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md">
                          <MessageSquare className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleConsultationRequest(lawyer.id)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                        >
                          Request Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'consultations' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">My Consultations</h3>
                <div className="flex space-x-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>All Consultations</option>
                    <option>Scheduled</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {consultations.map((consultation) => (
                  <div key={consultation.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{consultation.lawyer}</h4>
                        <p className="text-sm text-gray-500 mb-2">{consultation.caseType}</p>
                        <p className="text-sm text-gray-600">{consultation.type}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
                          consultation.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                          consultation.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {consultation.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {consultation.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {consultation.time}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {consultation.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {consultation.status === 'scheduled' && (
                          <>
                            <button className="text-blue-600 hover:text-blue-800 text-sm">
                              Join Meeting
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 text-sm">
                              Reschedule
                            </button>
                          </>
                        )}
                        {consultation.status === 'completed' && (
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            Leave Review
                          </button>
                        )}
                      </div>
                      <button className="text-gray-600 hover:text-gray-800">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">My Reviews</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Write Review
                </button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img
                          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400"
                          alt="Lawyer"
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">Adv. Priya Sharma</h4>
                          <p className="text-sm text-gray-500">Criminal Law</p>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3">
                      Excellent service! Very professional and helped me understand my legal options clearly. 
                      Would definitely recommend to others.
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Posted on January 15, 2024</span>
                      <button className="text-blue-600 hover:text-blue-800">
                        Edit Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;