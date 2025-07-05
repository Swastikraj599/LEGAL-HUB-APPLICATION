import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  Share2, 
  Clock, 
  Eye,
  Scale,
  FileText,
  Calendar,
  Tag,
  Heart,
  MessageCircle
} from 'lucide-react';

const NewsFeed: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Supreme Court Landmark Ruling on Digital Privacy Rights',
      summary: 'In a historic judgment, the Supreme Court has established new precedents for digital privacy protection, affecting how tech companies handle user data.',
      category: 'Constitutional Law',
      source: 'Supreme Court',
      date: '2024-01-16',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Privacy', 'Technology', 'Constitutional Law'],
      likes: 234,
      comments: 45,
      bookmarked: false,
      urgent: true
    },
    {
      id: 2,
      title: 'New Amendment to Criminal Procedure Code Approved',
      summary: 'Parliament has approved significant amendments to the Criminal Procedure Code, introducing faster trial mechanisms and enhanced victim protection.',
      category: 'Criminal Law',
      source: 'Parliament',
      date: '2024-01-15',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Criminal Law', 'Amendment', 'Procedure'],
      likes: 189,
      comments: 32,
      bookmarked: true,
      urgent: false
    },
    {
      id: 3,
      title: 'Delhi High Court Verdict on Property Disputes',
      summary: 'The Delhi High Court has delivered an important judgment clarifying the rights of property owners in cases of unauthorized constructions.',
      category: 'Property Law',
      source: 'Delhi High Court',
      date: '2024-01-14',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/6077168/pexels-photo-6077168.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Property', 'High Court', 'Delhi'],
      likes: 156,
      comments: 28,
      bookmarked: false,
      urgent: false
    },
    {
      id: 4,
      title: 'GST Council Announces New Compliance Guidelines',
      summary: 'The GST Council has introduced new compliance guidelines for businesses, aimed at simplifying tax procedures and reducing litigation.',
      category: 'Tax Law',
      source: 'GST Council',
      date: '2024-01-13',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Tax', 'GST', 'Compliance'],
      likes: 203,
      comments: 51,
      bookmarked: true,
      urgent: false
    },
    {
      id: 5,
      title: 'Labor Law Reforms: New Rights for Gig Workers',
      summary: 'Recent labor law reforms have extended social security benefits to gig workers, marking a significant shift in employment law.',
      category: 'Labor Law',
      source: 'Ministry of Labour',
      date: '2024-01-12',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Labor Law', 'Gig Workers', 'Social Security'],
      likes: 178,
      comments: 39,
      bookmarked: false,
      urgent: false
    },
    {
      id: 6,
      title: 'Bombay High Court Judgment on Environmental Law',
      summary: 'The Bombay High Court has set new standards for environmental clearances, emphasizing stricter compliance for industrial projects.',
      category: 'Environmental Law',
      source: 'Bombay High Court',
      date: '2024-01-11',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Environment', 'High Court', 'Compliance'],
      likes: 145,
      comments: 22,
      bookmarked: false,
      urgent: false
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
    { value: 'environmental', label: 'Environmental Law' }
  ];

  const sources = [
    { value: 'all', label: 'All Sources' },
    { value: 'supreme-court', label: 'Supreme Court' },
    { value: 'high-court', label: 'High Courts' },
    { value: 'parliament', label: 'Parliament' },
    { value: 'ministry', label: 'Ministries' }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           item.category.toLowerCase().includes(selectedCategory);
    const matchesSource = selectedSource === 'all' || 
                         item.source.toLowerCase().includes(selectedSource);
    
    return matchesSearch && matchesCategory && matchesSource;
  });

  const handleBookmark = (id: number) => {
    console.log(`Bookmark toggled for news item ${id}`);
  };

  const handleShare = (id: number) => {
    console.log(`Share news item ${id}`);
  };

  const handleLike = (id: number) => {
    console.log(`Like news item ${id}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Legal News & Updates</h1>
            <p className="text-gray-600">Stay informed with the latest legal developments</p>
          </div>
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-sm text-gray-500">Live Updates</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search news..."
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
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            {sources.map((source) => (
              <option key={source.value} value={source.value}>
                {source.label}
              </option>
            ))}
          </select>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Filter className="h-4 w-4 mr-2 inline" />
            Filter
          </button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {item.urgent && (
              <div className="bg-red-100 border-l-4 border-red-500 p-2">
                <span className="text-red-800 text-sm font-medium">🚨 Breaking News</span>
              </div>
            )}
            
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.readTime}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{item.source}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">{item.likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{item.comments}</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">Read</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleBookmark(item.id)}
                    className={`p-2 rounded-full transition-colors ${
                      item.bookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-blue-600'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => handleShare(item.id)}
                    className="p-2 rounded-full text-gray-400 hover:text-green-600 transition-colors"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
          Load More News
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;