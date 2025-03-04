import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Video, Users, Settings, Layout } from 'lucide-react';

function DashboardHome() {
  const { user } = useAuth();
  
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="mt-2 text-gray-600">Access and manage your educational content</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold">Materials</h3>
          </div>
          <p className="text-gray-600 mb-4">Access and manage educational materials</p>
          <Link
            to="/dashboard/materials"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            View Materials →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Video className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold">Videos</h3>
          </div>
          <p className="text-gray-600 mb-4">Watch and manage video content</p>
          <Link
            to="/dashboard/videos"
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            View Videos →
          </Link>
        </div>

        {user?.role === 'admin' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Settings className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold">Admin</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage users and system settings</p>
            <Link
              to="/dashboard/admin"
              className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
            >
              Admin Panel →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route index element={<DashboardHome />} />
      {/* Add more dashboard routes here */}
    </Routes>
  );
}