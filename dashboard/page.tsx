Perfect! I can see your current website is live with a landing page and pricing tiers. Let me give you the **complete full IXL template** without the landing page or pricing sections.

Here's the **complete dashboard code** to replace what you have:

## 📝 **Complete IXL-Style Dashboard Code:**

In your GitHub file editor, replace ALL the content with this complete version:

```javascript
'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { ChevronDown, ChevronRight, User, Settings, Bell, Search, BookOpen, BarChart3, Award, Calendar, Clock, Target, TrendingUp, Users, Brain, Star, CheckCircle, XCircle, AlertCircle, Play, Pause, SkipForward, Home, MessageSquare, HelpCircle, LogOut, Menu, X, Filter, Download, Share2, Printer, RefreshCw, Eye, Edit, Trash2, Plus, Minus, ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Circle, Square, Triangle, Heart, Bookmark, Flag, Lock, Unlock, Mail, Phone, Globe, MapPin, Camera, Image, Video, Music, Mic, Volume2, VolumeX, Wifi, WifiOff, Battery, BatteryLow, Smartphone, Laptop, Monitor, Tablet, Watch, Headphones, Keyboard, Mouse, Usb, HardDrive, Cpu, Database, Server, Cloud, CloudOff, Zap, Sun, Moon, CloudRain, CloudSnow, Wind, Thermometer, Droplets, Flame, Snowflake, Umbrella, Rainbow, Sunrise, Sunset, Mountain, Flower, Leaf, Bug, Fish, Bird, Cat, Dog, Rabbit, Snail, Turtle, Squirrel } from 'lucide-react';

// Color system based on IXL's design
const colors = {
  primary: {
    turquoise: '#00B8C8',
    yellow: '#FFD700',
    green: '#00C851',
    blue: '#007BFF',
    purple: '#6F42C1',
    orange: '#FF8C00',
    red: '#DC3545',
    pink: '#E91E63'
  },
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F8F9FA',
    gray: '#6C757D',
    darkGray: '#343A40',
    black: '#000000'
  },
  pastel: {
    lightBlue: '#E3F2FD',
    lightGreen: '#E8F5E8',
    lightYellow: '#FFF9C4',
    lightPurple: '#F3E5F5',
    lightOrange: '#FFF3E0',
    lightRed: '#FFEBEE',
    lightPink: '#FCE4EC',
    lightTurquoise: '#E0F7FA'
  }
};

// Comprehensive curriculum structure
const curriculumData = {
  math: {
    'Pre-K': {
      'Counting and Cardinality': [
        'Count to 10',
        'Count to 20', 
        'Number recognition 1-10',
        'One-to-one correspondence',
        'Compare numbers'
      ],
      'Operations and Algebraic Thinking': [
        'Addition within 5',
        'Subtraction within 5',
        'Decompose numbers',
        'Make 10',
        'Number bonds'
      ],
      'Measurement and Data': [
        'Compare length',
        'Compare weight',
        'Sort objects',
        'Create patterns',
        'Simple graphs'
      ],
      'Geometry': [
        'Identify shapes',
        'Describe shapes',
        'Compare shapes',
        'Shape positions',
        'Shape patterns'
      ]
    },
    'Kindergarten': {
      'Counting and Cardinality': [
        'Count to 100',
        'Count by 10s',
        'Number recognition 1-20',
        'Compare numbers to 10',
        'Ordinal numbers'
      ],
      'Operations and Algebraic Thinking': [
        'Addition within 10',
        'Subtraction within 10',
        'Addition word problems',
        'Subtraction word problems',
        'Fluently add within 5'
      ],
      'Number and Operations in Base Ten': [
        'Compose numbers 11-19',
        'Decompose numbers 11-19',
        'Count objects to 20',
        'Understand place value',
        'Compare two-digit numbers'
      ],
      'Measurement and Data': [
        'Describe measurable attributes',
        'Compare objects directly',
        'Sort objects into categories',
        'Count objects in categories',
        'Create and interpret graphs'
      ],
      'Geometry': [
        'Identify 2D shapes',
        'Identify 3D shapes',
        'Describe relative positions',
        'Analyze and compare shapes',
        'Model shapes in the world'
      ]
    },
    'Grade 1': {
      'Operations and Algebraic Thinking': [
        'Addition strategies within 20',
        'Subtraction strategies within 20',
        'Relate addition and subtraction',
        'Add three numbers',
        'True/false number sentences'
      ],
      'Number and Operations in Base Ten': [
        'Count to 120',
        'Understand place value',
        'Use place value to add',
        'Use place value to subtract',
        'Mental math strategies'
      ],
      'Measurement and Data': [
        'Order three objects by length',
        'Compare lengths indirectly',
        'Measure with non-standard units',
        'Tell time to the hour',
        'Tell time to the half hour'
      ],
      'Geometry': [
        'Distinguish between attributes',
        'Compose 2D shapes',
        'Compose 3D shapes',
        'Partition circles and rectangles',
        'Equal shares'
      ]
    }
  },
  science: {
    'Pre-K': {
      'Scientific Method': [
        'Ask questions about the world',
        'Make observations',
        'Compare objects',
        'Sort by properties',
        'Describe what you see'
      ],
      'Life Sciences': [
        'Identify living things',
        'Animal needs',
        'Plant needs',
        'Animal families',
        'Seasons and animals'
      ],
      'Physical Sciences': [
        'Objects have properties',
        'Objects move in different ways',
        'Push and pull',
        'Sink and float',
        'Hot and cold'
      ],
      'Earth Sciences': [
        'Weather patterns',
        'Day and night',
        'Rocks and soil',
        'Water in different forms',
        'Taking care of Earth'
      ]
    },
    'Kindergarten': {
      'Scientific Method': [
        'Ask scientific questions',
        'Make predictions',
        'Conduct simple investigations',
        'Record observations',
        'Share findings'
      ],
      'Life Sciences': [
        'Animal characteristics',
        'Plant characteristics',
        'Basic needs of animals',
        'Basic needs of plants',
        'Habitats'
      ],
      'Physical Sciences': [
        'Properties of materials',
        'Changes in materials',
        'Forces and motion',
        'Energy and heat',
        'Light and sound'
      ],
      'Earth Sciences': [
        'Weather and seasons',
        'Earth materials',
        'Natural resources',
        'Environmental changes',
        'Conservation'
      ]
    }
  },
  ela: {
    'Pre-K': {
      'Reading Foundations': [
        'Print concepts',
        'Letter recognition',
        'Letter sounds',
        'Rhyming words',
        'Syllables'
      ],
      'Reading Comprehension': [
        'Listen to stories',
        'Answer questions about stories',
        'Identify characters',
        'Sequence events',
        'Make predictions'
      ],
      'Writing': [
        'Draw pictures to tell stories',
        'Write letters',
        'Write name',
        'Label pictures',
        'Express ideas through drawing'
      ],
      'Language': [
        'Use new vocabulary',
        'Ask and answer questions',
        'Describe people and objects',
        'Follow directions',
        'Take turns in conversations'
      ]
    },
    'Kindergarten': {
      'Reading Foundations': [
        'Demonstrate print concepts',
        'Recognize all letters',
        'Know letter-sound correspondences',
        'Decode CVC words',
        'Read high-frequency words'
      ],
      'Reading Comprehension': [
        'Key details in text',
        'Retell familiar stories',
        'Identify characters and setting',
        'Compare characters experiences',
        'Describe illustrations'
      ],
      'Writing': [
        'Draw and write narratives',
        'Draw and write informative texts',
        'Draw and write opinions',
        'Respond to questions',
        'Strengthen writing with guidance'
      ],
      'Language': [
        'Print upper and lowercase letters',
        'Use frequently occurring nouns',
        'Form regular plural nouns',
        'Use question words',
        'Produce complete sentences'
      ]
    }
  }
};

// Student performance data
const performanceData = [
  { name: 'Week 1', math: 65, science: 72, ela: 68, overall: 68 },
  { name: 'Week 2', math: 72, science: 75, ela: 71, overall: 73 },
  { name: 'Week 3', math: 78, science: 80, ela: 75, overall: 78 },
  { name: 'Week 4', math: 85, science: 82, ela: 80, overall: 82 },
  { name: 'Week 5', math: 88, science: 85, ela: 83, overall: 85 },
  { name: 'Week 6', math: 92, science: 88, ela: 87, overall: 89 }
];

// Skill mastery data
const skillMasteryData = [
  { subject: 'Math', mastered: 45, practicing: 23, struggling: 12 },
  { subject: 'Science', mastered: 38, practicing: 28, struggling: 14 },
  { subject: 'ELA', mastered: 42, practicing: 25, struggling: 13 }
];

// Component: Navigation Header
const NavigationHeader = ({ currentUser, onTabChange, activeMainTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const mainTabs = [
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'diagnostic', label: 'Diagnostic', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'recommendations', label: 'Recommendations', icon: Target },
    { id: 'awards', label: 'Awards', icon: Award }
  ];

  return (
    <header className="bg-white border-b-2 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">
                <span className="text-teal-600">Cognitive</span>
                <span className="text-yellow-500">Cloud</span>
              </span>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeMainTab === tab.id
                      ? 'bg-teal-100 text-teal-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
                      <p className="text-xs text-gray-500">{currentUser.role}</p>
                    </div>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4" />
                      <span>Help</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {mainTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onTabChange(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeMainTab === tab.id
                        ? 'bg-teal-100 text-teal-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Component: Skill Card
const SkillCard = ({ skill, index, category, onSkillClick, progress = null }) => {
  const getProgressColor = (progress) => {
    if (progress >= 90) return 'bg-green-500';
    if (progress >= 70) return 'bg-yellow-500';
    if (progress >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getProgressIcon = (progress) => {
    if (progress >= 90) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (progress >= 70) return <Clock className="w-5 h-5 text-yellow-500" />;
    if (progress >= 50) return <AlertCircle className="w-5 h-5 text-orange-500" />;
    return <XCircle className="w-5 h-5 text-red-500" />;
  };

  return (
    <Card
      className="hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-l-teal-500 group"
      onClick={() => onSkillClick(skill, category)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                {category.charAt(0)}.{index + 1}
              </span>
              {progress !== null && getProgressIcon(progress)}
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
              {skill}
            </h3>
            {progress !== null && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress)}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
        </div>
      </CardContent>
    </Card>
  );
};

// Component: Learning Dashboard
const LearningDashboard = ({ selectedSubject, selectedGrade, onSubjectChange, onGradeChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const subjects = Object.keys(curriculumData);
  const grades = selectedSubject ? Object.keys(curriculumData[selectedSubject]) : [];
  const categories = selectedSubject && selectedGrade ? Object.keys(curriculumData[selectedSubject][selectedGrade]) : [];

  const filteredSkills = selectedCategory 
    ? curriculumData[selectedSubject]?.[selectedGrade]?.[selectedCategory]?.filter(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    : [];

  const handleSkillClick = (skill, category) => {
    console.log(`Clicked on skill: ${skill} in category: ${category}`);
    // Here you would navigate to the skill practice page
  };

  return (
    <div className="space-y-6">
      {/* Subject and Grade Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Center</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => onSubjectChange(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Select a subject</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grade Level</label>
            <select
              value={selectedGrade}
              onChange={(e) => onGradeChange(e.target.value)}
              disabled={!selectedSubject}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 disabled:bg-gray-100"
            >
              <option value="">Select a grade</option>
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      {selectedSubject && selectedGrade && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {selectedSubject.charAt(0).toUpperCase() + selectedSubject.slice(1)} - {selectedGrade}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card
                key={category}
                className={`cursor-pointer transition-all duration-200 ${
                  selectedCategory === category
                    ? 'ring-2 ring-teal-500 bg-teal-50'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-teal-600">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 text-sm">{category}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {curriculumData[selectedSubject][selectedGrade][category].length} skills
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Skills Grid */}
      {selectedCategory && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">{selectedCategory}</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                index={index}
                category={selectedCategory}
                onSkillClick={handleSkillClick}
                progress={Math.floor(Math.random() * 100)} // Random progress for demo
              />
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {selectedSubject && selectedGrade && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Play className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <div className="font-medium text-blue-900">Continue Learning</div>
                <div className="text-sm text-blue-600">Resume where you left off</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Target className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <div className="font-medium text-green-900">Practice Weak Areas</div>
                <div className="text-sm text-green-600">Focus on challenging skills</div>
              </div>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <Award className="w-6 h-6 text-purple-600" />
              <div className="text-left">
                <div className="font-medium text-purple-900">Review Mastered</div>
                <div className="text-sm text-purple-600">Reinforce learned skills</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Component: Analytics Dashboard
const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState('6weeks');
  const [selectedMetric, setSelectedMetric] = useState('overall');

  const timeRanges = [
    { value: '1week', label: 'Last Week' },
    { value: '2weeks', label: 'Last 2 Weeks' },
    { value: '1month', label: 'Last Month' },
    { value: '6weeks', label: 'Last 6 Weeks' },
    { value: '3months', label: 'Last 3 Months' },
    { value: 'semester', label: 'This Semester' },
    { value: 'year', label: 'This Year' }
  ];

  const metrics = [
    { value: 'overall', label: 'Overall Progress', color: colors.primary.blue },
    { value: 'math', label: 'Math', color: colors.primary.green },
    { value: 'science', label: 'Science', color: colors.primary.orange },
    { value: 'ela', label: 'ELA', color: colors.primary.purple }
  ];

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
          <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              {timeRanges.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Overall Progress</p>
                <p className="text-3xl font-bold">89%</p>
                <p className="text-blue-100 text-sm">+5% from last week</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Skills Mastered</p>
                <p className="text-3xl font-bold">127

// Main Application Component
const CognitiveCloudApp = () => {
 const [activeMainTab, setActiveMainTab] = useState('learning');
 const [selectedSubject, setSelectedSubject] = useState('');
 const [selectedGrade, setSelectedGrade] = useState('');
 
 const currentUser = {
   name: 'Alex Johnson',
   role: 'Student',
   grade: 'Grade 2',
   avatar: '/api/placeholder/32/32'
 };

 const renderContent = () => {
   switch (activeMainTab) {
     case 'learning':
       return (
         <LearningDashboard
           selectedSubject={selectedSubject}
           selectedGrade={selectedGrade}
           onSubjectChange={setSelectedSubject}
           onGradeChange={setSelectedGrade}
         />
       );
     case 'diagnostic':
       return <DiagnosticDashboard />;
     case 'analytics':
       return <AnalyticsDashboard />;
     case 'recommendations':
       return <RecommendationsDashboard />;
     case 'awards':
       return <AwardsDashboard />;
     default:
       return (
         <LearningDashboard
           selectedSubject={selectedSubject}
           selectedGrade={selectedGrade}
           onSubjectChange={setSelectedSubject}
           onGradeChange={setSelectedGrade}
         />
       );
   }
 };

 return (
   <div className="min-h-screen bg-gray-50">
     <NavigationHeader
       currentUser={currentUser}
       onTabChange={setActiveMainTab}
       activeMainTab={activeMainTab}
     />
     
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       {renderContent()}
     </main>
     
     {/* Footer */}
     <footer className="bg-white border-t border-gray-200 mt-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="grid md:grid-cols-4 gap-8">
           <div>
             <div className="flex items-center space-x-2 mb-4">
               <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                 <Brain className="w-5 h-5 text-white" />
               </div>
               <span className="text-xl font-bold">
                 <span className="text-teal-600">Cognitive</span>
                 <span className="text-yellow-500">Cloud</span>
               </span>
             </div>
             <p className="text-gray-600 text-sm">
               Personalized learning platform designed to help every student succeed.
             </p>
           </div>
           <div>
             <h4 className="font-semibold text-gray-900 mb-4">Learning</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><a href="#" className="hover:text-teal-600">Mathematics</a></li>
               <li><a href="#" className="hover:text-teal-600">Science</a></li>
               <li><a href="#" className="hover:text-teal-600">English Language Arts</a></li>
               <li><a href="#" className="hover:text-teal-600">Social Studies</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-semibold text-gray-900 mb-4">Tools</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><a href="#" className="hover:text-teal-600">Diagnostic</a></li>
               <li><a href="#" className="hover:text-teal-600">Analytics</a></li>
               <li><a href="#" className="hover:text-teal-600">Recommendations</a></li>
               <li><a href="#" className="hover:text-teal-600">Awards</a></li>
             </ul>
           </div>
           <div>
             <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
             <ul className="space-y-2 text-sm text-gray-600">
               <li><a href="#" className="hover:text-teal-600">Help Center</a></li>
               <li><a href="#" className="hover:text-teal-600">Contact Us</a></li>
               <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-teal-600">Terms of Service</a></li>
             </ul>
           </div>
         </div>
         <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
           <p>&copy; 2024 CognitiveCloud. All rights reserved.</p>
         </div>
       </div>
     </footer>
   </div>
 );
};

export default CognitiveCloudApp;
