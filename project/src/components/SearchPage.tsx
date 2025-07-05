import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  FileText, 
  Scale, 
  Calendar,
  Tag,
  Eye,
  Bookmark,
  Share2,
  Clock,
  User,
  Building,
  Gavel
} from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');

  const searchResults = [
    {
      id: 1,
      title: 'Supreme Court Judgment on Digital Privacy Rights - Puttaswamy vs Union of India',
      type: 'Judgment',
      category: 'Constitutional Law',
      source: 'Supreme Court',
      date: '2024-01-16',
      summary: 'Landmark judgment establishing digital privacy as a fundamental right under Article 21 of the Constitution.',
      content: 'The Supreme Court in a historic 9-judge bench decision has declared that privacy is a fundamental right...',
      tags: ['Privacy', 'Fundamental Rights', 'Article 21', 'Digital Rights'],
      views: 2456,
      bookmarks: 234,
      relevanceScore: 95
    },
    {
      id: 2,
      title: 'Criminal Procedure Code Amendment Act 2024',
      type: 'Legislation',
      category: 'Criminal Law',
      source: 'Parliament',
      date: '2024-01-15',
      summary: 'New amendments to CrPC introducing faster trial mechanisms and enhanced victim protection measures.',
      content: 'The Parliament has passed significant amendments to the Criminal Procedure Code...',
      tags: ['CrPC', 'Amendment', 'Criminal Procedure', 'Victim Rights'],
      views: 1892,
      bookmarks: 156,
      relevanceScore: 88
    },
    {
      id: 3,
      title: 'Delhi High Court Guidelines on Property Disputes',
      type: 'Guidelines',
      category: 'Property Law',
      source: 'Delhi High Court',
      date: '2024-01-14',
      summary: 'Comprehensive guidelines for handling property disputes and unauthorized construction cases.',
      content: 'The Delhi High Court has issued detailed guidelines for property dispute resolution...',
      tags: ['Property', 'Guidelines', 'Delhi HC', 'Real Estate'],
      views: 1234,
      bookmarks: 89,
      relevanceScore: 82
    },
    {
      id: 4,
      title: 'GST Council Resolution on E-commerce Taxation',
      type: 'Resolution',
      category: 'Tax Law',
      source: 'GST Council',
      date: '2024-01-13',
      summary: 'New resolution clarifying GST implications for e-commerce platforms and marketplace sellers.',
      content: 'The GST Council has passed a resolution addressing taxation issues in e-commerce...',
      tags: ['GST', 'E-commerce', 'Taxation', 'Digital Economy'],
      views: 1567,
      bookmarks: 123,
      relevanceScore: 79
    },
    {
      id: 5,
      title: 'Labor Law Reforms: Social Security Code Implementation',
      type: 'Notification',
      category: 'Labor Law',
      source: 'Ministry of Labour',
      date: '2024-01-12',
      summary: 'Implementation guidelines for the new Social Security Code affecting gig workers and traditional employees.',
      content: 'The Ministry of Labour has issued implementation guidelines for the Social Security Code...',
      tags: ['Labor Law', 'Social Security', 'Gig Workers', 'Employment'],
      views: 1345,
      bookmarks: 98,
      relevanceScore: 76
    },
    {
      id: 6,
      title: 'Bombay High Court Environmental Clearance Standards',
      type: 'Order',
      category: 'Environmental Law',
      source: 'Bombay High Court',
      date: '2024-01-11',
      summary: 'New standards for environmental clearances with stricter compliance requirements for industrial projects.',
      content: 'The Bombay High Court has set new environmental clearance standards...',
      tags: ['Environment', 'Clearance', 'Industrial Projects', 'Compliance'],
      views: 987,
      bookmarks: 67,
      relevanceScore: 73
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'constitutional', label: 'Constitutional Law' },
    { value: 'criminal', label: 'Criminal Law' },
    { value: 'civil', label: 'Civil Law' },
    { value: 'property', label: 'Property Law' },
    { value: 'tax', label: 'Tax Law' },
    { value: 'labor', label: 'Labor Law' },
    { value: 'environmental', label: 'Environmental Law' },
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'family', label: 'Family Law' }
  ];

  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'judgment', label: 'Judgments' },
    { value: 'legislation', label: 'Legislation' },
    { value: 'guidelines', label: 'Guidelines' },
    { value: 'notification', label: 'Notifications' },
    { value: 'resolution', label: 'Resolutions' },
    { value: 'order', label: 'Orders' },
    { value: 'circular', label: 'Circulars' }
  ];

  const sources = [
    { value: 'all', label: 'All Sources' },
    { value: 'supreme-court', label: 'Supreme Court' },
    { value: 'high-court', label: 'High Courts' },
    { value: 'parliament', label: 'Parliament' },
    { value: 'ministry', label: 'Ministries' },
    { value: 'tribunal', label: 'Tribunals' }
  ];

  const filteredResults = searchResults.filter(item => {
    const matchesSearch = searchTerm === '' || 
                         item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           item.category.toLowerCase().includes(selectedCategory);
    
    const matchesType = selectedType === 'all' || 
                       item.type.toLowerCase().includes(selectedType);
    
    const matchesSource = selectedSource === 'all' || 
                         item.source.toLowerCase().includes(selectedSource.replace('-', ' '));
    
    return matchesSearch && matchesCategory && matchesType && matchesSource;
  });

  const handleBookmark = (id: number) => {
    console.log(`Bookmarking item ${id}`);
    alert('Item bookmarked successfully!');
  };

  const handleShare = (id: number) => {
    console.log(`Sharing item ${id}`);
    alert('Share link copied to clipboard!');
  };

  const handleView = (id: number) => {
    console.log(`Viewing full content of item ${id}`);
    alert('Opening full document...');
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'judgment':
        return <Gavel className="h-4 w-4" />;
      case 'legislation':
        return <Building className="h-4 w-4" />;
      case 'guidelines':
      case 'notification':
      case 'circular':
        return <FileText className="h-4 w-4" />;
      case 'resolution':
      case 'order':
        return <Scale className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'judgment':
        return 'bg-purple-100 text-purple-800';
      case 'legislation':
        return 'bg-blue-100 text-blue-800';
      case 'guidelines':
        return 'bg-green-100 text-green-800';
      case 'notification':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolution':
        return 'bg-indigo-100 text-indigo-800';
      case 'order':
        return 'bg-red-100 text-red-800';
      case 'circular':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Legal Search</h1>
            <p className="text-gray-600">Search through judgments, legislation, and legal documents</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">
              {filteredResults.length} results {searchTerm && `for "${searchTerm}"`}
            </p>
            <p className="text-xs text-gray-400">Updated in real-time</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search legal documents, cases, laws..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          
          <select
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            {sources.map((source) => (
              <option key={source.value} value={source.value}>
                {source.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        {filteredResults.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          filteredResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mr-3 ${getTypeColor(result.type)}`}>
                      {getTypeIcon(result.type)}
                      <span className="ml-1">{result.type}</span>
                    </span>
                    <span className="text-xs text-gray-500">{result.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {result.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {result.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {result.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right ml-4">
                  <div className="text-sm text-gray-500 mb-2">
                    Relevance: {result.relevanceScore}%
                  </div>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${result.relevanceScore}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {result.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {result.source}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {result.views} views
                  </div>
                  <div className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-1" />
                    {result.bookmarks} saves
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleView(result.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Full Document
                  </button>
                  
                  <button
                    onClick={() => handleBookmark(result.id)}
                    className="p-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md transition-colors"
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => handleShare(result.id)}
                    className="p-2 text-gray-600 hover:text-green-600 border border-gray-300 rounded-md transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load More */}
      {filteredResults.length > 0 && (
        <div className="text-center">
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
            Load More Results
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;