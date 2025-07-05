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
  CheckCircle,
  Eye,
  Heart
} from 'lucide-react';

const FindLawyers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

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
      about: 'Experienced criminal lawyer with expertise in white-collar crimes and corporate fraud. Successfully handled over 200 cases with a 92% success rate.',
      casesSolved: 234,
      successRate: 92,
      education: 'LLB from Delhi University, LLM from Harvard Law School',
      barNumber: 'D/1234/2015',
      availability: 'Available',
      responseTime: '2 hours'
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
      about: 'Corporate law expert specializing in mergers, acquisitions, and compliance. Former legal counsel at Fortune 500 companies.',
      casesSolved: 187,
      successRate: 89,
      education: 'LLB from Mumbai University, MBA from IIM Bombay',
      barNumber: 'M/5678/2012',
      availability: 'Available',
      responseTime: '1 hour'
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
      about: 'Family law specialist with focus on divorce, custody, and matrimonial disputes. Known for compassionate approach and mediation skills.',
      casesSolved: 145,
      successRate: 88,
      education: 'LLB from Gujarat University, Diploma in Family Counseling',
      barNumber: 'G/9012/2018',
      availability: 'Busy',
      responseTime: '4 hours'
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
      about: 'Property law veteran with extensive experience in real estate transactions, land disputes, and property documentation.',
      casesSolved: 298,
      successRate: 91,
      education: 'LLB from Osmania University, LLM in Property Law',
      barNumber: 'T/3456/2009',
      availability: 'Available',
      responseTime: '3 hours'
    },
    {
      id: 5,
      name: 'Adv. Kavita Singh',
      specialization: 'Constitutional Law',
      experience: 10,
      location: 'Delhi',
      rating: 4.9,
      reviews: 178,
      hourlyRate: 3500,
      avatar: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['Hindi', 'English', 'Punjabi'],
      about: 'Constitutional law expert with appearances before Supreme Court. Specializes in fundamental rights and public interest litigation.',
      casesSolved: 156,
      successRate: 94,
      education: 'LLB from Delhi University, LLM from Oxford University',
      barNumber: 'D/7890/2014',
      availability: 'Available',
      responseTime: '1 hour'
    },
    {
      id: 6,
      name: 'Adv. Arjun Nair',
      specialization: 'Cyber Law',
      experience: 5,
      location: 'Bangalore',
      rating: 4.5,
      reviews: 67,
      hourlyRate: 2200,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      verified: true,
      languages: ['English', 'Malayalam', 'Kannada'],
      about: 'Cyber law specialist dealing with digital crimes, data protection, and technology-related legal issues. Tech-savvy lawyer for modern challenges.',
      casesSolved: 89,
      successRate: 87,
      education: 'LLB from Bangalore University, Certification in Cyber Law',
      barNumber: 'K/2468/2019',
      availability: 'Available',
      responseTime: '2 hours'
    }
  ];

  const specializations = [
    { value: 'all', label: 'All Specializations' },
    { value: 'criminal', label: 'Criminal Law' },
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'family', label: 'Family Law' },
    { value: 'property', label: 'Property Law' },
    { value: 'constitutional', label: 'Constitutional Law' },
    { value: 'cyber', label: 'Cyber Law' },
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
    { value: 'pune', label: 'Pune' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' }
  ];

  const experienceRanges = [
    { value: 'all', label: 'Any Experience' },
    { value: '0-2', label: '0-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const ratingRanges = [
    { value: 'all', label: 'Any Rating' },
    { value: '4.5+', label: '4.5+ stars' },
    { value: '4.0+', label: '4.0+ stars' },
    { value: '3.5+', label: '3.5+ stars' }
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.about.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialization = selectedSpecialization === 'all' || 
                                 lawyer.specialization.toLowerCase().includes(selectedSpecialization);
    
    const matchesLocation = selectedLocation === 'all' || 
                           lawyer.location.toLowerCase().includes(selectedLocation);
    
    const matchesExperience = selectedExperience === 'all' || 
                             (selectedExperience === '0-2' && lawyer.experience <= 2) ||
                             (selectedExperience === '3-5' && lawyer.experience >= 3 && lawyer.experience <= 5) ||
                             (selectedExperience === '6-10' && lawyer.experience >= 6 && lawyer.experience <= 10) ||
                             (selectedExperience === '10+' && lawyer.experience > 10);
    
    const matchesRating = selectedRating === 'all' ||
                         (selectedRating === '4.5+' && lawyer.rating >= 4.5) ||
                         (selectedRating === '4.0+' && lawyer.rating >= 4.0) ||
                         (selectedRating === '3.5+' && lawyer.rating >= 3.5);
    
    return matchesSearch && matchesSpecialization && matchesLocation && matchesExperience && matchesRating;
  });

  const handleConsultationRequest = (lawyerId: number) => {
    console.log(`Requesting consultation with lawyer ${lawyerId}`);
    alert('Consultation request sent! The lawyer will respond within their typical response time.');
  };

  const handleSaveLawyer = (lawyerId: number) => {
    console.log(`Saving lawyer ${lawyerId} to favorites`);
    alert('Lawyer saved to your favorites!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Find Legal Experts</h1>
            <p className="text-gray-600">Connect with qualified lawyers for your legal needs</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Showing {filteredLawyers.length} lawyers</p>
            <p className="text-xs text-gray-400">All lawyers are verified</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search lawyers by name, specialization..."
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
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
          >
            {experienceRanges.map((exp) => (
              <option key={exp.value} value={exp.value}>
                {exp.label}
              </option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            {ratingRanges.map((rating) => (
              <option key={rating.value} value={rating.value}>
                {rating.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Lawyers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLawyers.map((lawyer) => (
          <div key={lawyer.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={lawyer.avatar}
                  alt={lawyer.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center">
                    {lawyer.name}
                    {lawyer.verified && (
                      <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                    )}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">{lawyer.specialization}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center text-yellow-500 mr-3">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1 text-gray-700">{lawyer.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({lawyer.reviews})</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lawyer.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {lawyer.availability}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSaveLawyer(lawyer.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {lawyer.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Award className="h-4 w-4 mr-2" />
                {lawyer.experience} years exp.
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                Responds in {lawyer.responseTime}
              </div>
              <div className="flex items-center text-gray-600">
                <FileText className="h-4 w-4 mr-2" />
                {lawyer.casesSolved} cases
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lawyer.about}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {lawyer.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Success Rate:</span>
                  <span className="font-medium ml-1 text-green-600">{lawyer.successRate}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Bar No:</span>
                  <span className="font-medium ml-1">{lawyer.barNumber}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-gray-900">₹{lawyer.hourlyRate}</span>
                <span className="text-sm text-gray-500">/hour</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors">
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

      {filteredLawyers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No lawyers found</h3>
          <p className="text-gray-500">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
};

export default FindLawyers;