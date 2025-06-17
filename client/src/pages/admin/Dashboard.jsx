import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  EnvelopeIcon,
  MapIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import ExpeditionList from './ExpeditionList';
import TrekkingList from './TrekkingList';
import ContactList from './ContactList';
import Analytics from './Analytics';

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const navigation = [
    { name: 'Analytics', href: '/admin/dashboard', icon: ChartBarIcon, current: true },
    { name: 'Expeditions', href: '/admin/dashboard/expeditions', icon: MapIcon, current: false },
    { name: 'Treks', href: '/admin/dashboard/treks', icon: ClipboardDocumentListIcon, current: false },
    { name: 'Contact Requests', href: '/admin/dashboard/contacts', icon: EnvelopeIcon, current: false },
  ];

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-40 w-64 bg-white">
            <div className="flex items-center justify-between h-16 px-6 bg-primary-600">
              <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
              <button onClick={() => setSidebarOpen(false)}>
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>
            </div>
            <nav className="px-3 mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100"
                >
                  <item.icon className="w-6 h-6 mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
        <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-6 bg-primary-600">
            <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
          </div>
          <nav className="flex-1 px-3 mt-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center px-4 py-2 mt-2 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="w-6 h-6 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex items-center h-16 px-4 bg-white border-b border-gray-200 lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
          <h2 className="ml-4 text-lg font-medium">Admin Dashboard</h2>
        </div>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/expeditions" element={<ExpeditionList />} />
            <Route path="/treks" element={<TrekkingList />} />
            <Route path="/contacts" element={<ContactList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
} 