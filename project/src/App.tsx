import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import AuthForm from './components/Auth/AuthForm';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import LawyerDashboard from './components/Dashboard/LawyerDashboard';
import PublicDashboard from './components/Dashboard/PublicDashboard';
import NewsFeed from './components/NewsFeed';
import FindLawyers from './components/FindLawyers';
import Consultations from './components/Consultations';
import SearchPage from './components/SearchPage';

const AppContent: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <AuthForm onSuccess={() => setCurrentPage('dashboard')} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'news':
        return <NewsFeed />;
      case 'find-lawyers':
        return <FindLawyers />;
      case 'consultations':
        return <Consultations />;
      case 'search':
        return <SearchPage />;
      case 'dashboard':
      default:
        if (user?.role === 'student') {
          return <StudentDashboard />;
        } else if (user?.role === 'lawyer') {
          return <LawyerDashboard />;
        } else if (user?.role === 'public') {
          return <PublicDashboard />;
        }
        return <div>Welcome to LegalHub</div>;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderContent()}
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;