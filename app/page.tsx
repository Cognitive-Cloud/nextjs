// pages/learning.tsx
'use client'

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// MathCraft - Interactive Mathematics
const mathCraftSkills = {
  'A. Number Sense & Operations': {
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    hoverColor: 'hover:border-blue-400',
    interactiveType: 'Number line manipulatives, fraction bars',
    skills: [
      'Interactive place value with draggable blocks',
      'Fraction operations with visual pie charts',
      'Decimal number line with zoom controls',
      'Integer operations on coordinate grids',
      'Ratio and proportion with interactive scales',
      'Percentage calculator with real-world scenarios',
      'Order of operations with step-by-step builder',
      'Prime factorization with factor trees'
    ]
  },
  'B. Algebra & Functions': {
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    hoverColor: 'hover:border-purple-400',
    interactiveType: 'Equation balances, function graphers',
    skills: [
      'Equation solver with balance beam visualization',
      'Interactive graphing with point plotting',
      'Function transformation sliders',
      'System of equations with intersection finder',
      'Polynomial factoring with algebra tiles',
      'Quadratic formula with vertex form converter',
      'Exponential growth simulators',
      'Linear programming with constraint graphers'
    ]
  },
  'C. Geometry & Measurement': {
    color: 'bg-green-50 border-green-200 text-green-800',
    hoverColor: 'hover:border-green-400',
    interactiveType: '3D shape builders, angle measurers',
    skills: [
      'Dynamic angle measurement tools',
      'Interactive polygon constructors',
      '3D shape rotation and cross-sections',
      'Area and perimeter with draggable vertices',
      'Volume calculators with liquid simulations',
      'Pythagorean theorem with triangle builders',
      'Transformation geometry with coordinate grids',
      'Circle properties with radius/diameter tools'
    ]
  },
  'D. Statistics & Probability': {
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    hoverColor: 'hover:border-orange-400',
    interactiveType: 'Data collectors, probability simulators',
    skills: [
      'Interactive data collection and graphing',
      'Probability simulations with dice and coins',
      'Statistical analysis with real datasets',
      'Box plot constructors with quartile sliders',
      'Correlation scatter plot builders',
      'Normal distribution curve explorers',
      'Hypothesis testing with confidence intervals',
      'Regression line fitting tools'
    ]
  }
};

// DunnSolutions24 - Interactive Chemistry
const dunnSolutions24Skills = {
  'A. Atomic Structure & Bonding': {
    color: 'bg-red-50 border-red-200 text-red-800',
    hoverColor: 'hover:border-red-400',
    interactiveType: 'Electron shell builders, molecule constructors',
    skills: [
      'Interactive periodic table with element details',
      'Electron configuration builders with orbital diagrams',
      'Ion formation simulators with charge calculators',
      'Molecular geometry with VSEPR model builders',
      'Bond polarity indicators with electronegativity scales',
      'Lewis structure constructors with electron dots',
      'Covalent vs ionic bonding comparisons',
      'Crystal lattice structure visualizers'
    ]
  },
  'B. Chemical Reactions & Equations': {
    color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    hoverColor: 'hover:border-yellow-400',
    interactiveType: 'Reaction simulators, equation balancers',
    skills: [
      'Chemical equation balancing with step guides',
      'Reaction type classifiers with pattern recognition',
      'Stoichiometry calculators with mole conversions',
      'Limiting reagent simulators with visual representations',
      'Combustion reaction builders with energy diagrams',
      'Acid-base neutralization with pH indicators',
      'Redox reaction electron transfer trackers',
      'Precipitation reaction predictors'
    ]
  },
  'C. States of Matter & Solutions': {
    color: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    hoverColor: 'hover:border-cyan-400',
    interactiveType: 'Phase change simulators, concentration mixers',
    skills: [
      'Phase diagram explorers with pressure/temperature controls',
      'Molecular motion simulators for gas laws',
      'Solution concentration calculators with visual mixing',
      'Colligative properties with freezing point depression',
      'Vapor pressure curves with temperature sliders',
      'Solubility curve graphers with saturation points',
      'Osmosis and diffusion rate simulators',
      'Gas law PV=nRT interactive calculators'
    ]
  },
  'D. Thermodynamics & Kinetics': {
    color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    hoverColor: 'hover:border-indigo-400',
    interactiveType: 'Energy diagrams, reaction rate controllers',
    skills: [
      'Enthalpy change calculators with bond energy tables',
      'Activation energy diagrams with catalyst effects',
      'Reaction rate experiments with variable controls',
      'Equilibrium constant calculators with Le Chatelier\'s principle',
      'Thermodynamic cycle builders (Carnot, Otto)',
      'Calorimetry simulators with heat transfer',
      'Entropy change calculators with state functions',
      'Electrochemical cell voltage calculators'
    ]
  }
};

// CognitiveCloud Science - Interactive Science
const cognitiveCloudScience = {
  'A. Scientific Method & Data Analysis': {
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    hoverColor: 'hover:border-purple-400',
    interactiveType: 'Experiment designers, data analyzers',
    skills: [
      'Hypothesis formation with testable question builders',
      'Variable identification with experimental design tools',
      'Data collection simulators with measurement tools',
      'Graph constructors with trend line fitters',
      'Statistical analysis with significance testers',
      'Error analysis with uncertainty calculators',
      'Peer review simulators with scientific writing',
      'Research methodology with citation builders'
    ]
  },
  'B. Physics & Engineering': {
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    hoverColor: 'hover:border-blue-400',
    interactiveType: 'Force simulators, wave generators',
    skills: [
      'Newton\'s laws with force vector builders',
      'Wave properties with frequency/amplitude controls',
      'Electric circuit builders with current flow visualization',
      'Optics ray tracers with lens and mirror systems',
      'Thermodynamics with heat engine simulators',
      'Quantum mechanics with particle wave demonstrations',
      'Relativity calculators with time dilation effects',
      'Engineering design challenges with constraint optimization'
    ]
  },
  'C. Biology & Life Sciences': {
    color: 'bg-green-50 border-green-200 text-green-800',
    hoverColor: 'hover:border-green-400',
    interactiveType: 'Cell builders, ecosystem simulators',
    skills: [
      'Cell organelle builders with function animations',
      'DNA replication simulators with base pair matching',
      'Protein synthesis with codon translation tools',
      'Ecosystem food web builders with energy flow',
      'Evolution simulators with natural selection',
      'Genetics crosses with Punnett square builders',
      'Human body system interconnection maps',
      'Biodiversity calculators with species identification'
    ]
  },
  'D. Earth & Environmental Science': {
    color: 'bg-teal-50 border-teal-200 text-teal-800',
    hoverColor: 'hover:border-teal-400',
    interactiveType: 'Climate models, geological timers',
    skills: [
      'Plate tectonics with boundary interaction simulators',
      'Weather pattern builders with atmospheric pressure maps',
      'Climate change models with greenhouse gas effects',
      'Rock cycle simulators with formation processes',
      'Water cycle with precipitation and evaporation rates',
      'Renewable energy calculators with efficiency comparisons',
      'Pollution impact models with ecosystem effects',
      'Astronomical scale comparators with distance calculators'
    ]
  }
};

const subjects = {
  'MathCraft': mathCraftSkills,
  'DunnSolutions24': dunnSolutions24Skills,
  'CognitiveCloud Science': cognitiveCloudScience
};

export default function CognitiveCloudLearning() {
  const [activeSubject, setActiveSubject] = useState('MathCraft');
  const [activeStrand, setActiveStrand] = useState(Object.keys(subjects[activeSubject])[0]);

  const handleSubjectChange = (subject) => {
    setActiveSubject(subject);
    setActiveStrand(Object.keys(subjects[subject])[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CognitiveCloud Header */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 px-6 shadow-xl">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <span className="font-bold text-2xl">CognitiveCloud</span>
                <span className="text-cyan-200 text-sm">.ai</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/learning" className="hover:text-cyan-200 font-medium bg-teal-700 bg-opacity-50 px-3 py-2 rounded">Interactive Learning</Link>
              <Link href="/diagnostic" className="hover:text-cyan-200 px-3 py-2">AI Diagnostic</Link>
              <Link href="/analytics" className="hover:text-cyan-200 px-3 py-2">Progress Analytics</Link>
              <Link href="/playground" className="hover:text-cyan-200 px-3 py-2">Learning Playground</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-yellow-300 transition-colors">
              Premium - $1/month
            </button>
            <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center border-2 border-white border-opacity-30">
              <span className="text-sm font-bold">CC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600">CognitiveCloud.ai</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 font-medium">Interactive Learning Modules</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Subject Selection */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Learning Experience</h1>
          <p className="text-xl text-gray-600 mb-6">
            Experience true interactivity with manipulatable elements, real-time simulations, and adaptive learning paths
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => handleSubjectChange('MathCraft')}
              className={`p-6 rounded-xl border-2 transition-all ${activeSubject === 'MathCraft' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'}`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">📐</span>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-blue-800">MathCraft</h3>
                  <p className="text-sm text-blue-600">Interactive Mathematics</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSubjectChange('DunnSolutions24')}
              className={`p-6 rounded-xl border-2 transition-all ${activeSubject === 'DunnSolutions24' ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-red-300'}`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">⚗️</span>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-red-800">DunnSolutions24</h3>
                  <p className="text-sm text-red-600">Interactive Chemistry</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleSubjectChange('CognitiveCloud Science')}
              className={`p-6 rounded-xl border-2 transition-all ${activeSubject === 'CognitiveCloud Science' ? 'border-purple-400 bg-purple-50' : 'border-gray-200 bg-white hover:border-purple-300'}`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🔬</span>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-purple-800">CognitiveCloud Science</h3>
                  <p className="text-sm text-purple-600">Interactive Science</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Interactive Learning Modules */}
        <Tabs value={activeStrand} onValueChange={setActiveStrand} className="w-full">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white p-2 rounded-xl border-2 border-gray-200 mb-8">
            {Object.keys(subjects[activeSubject]).map((strand) => {
              const strandLetter = strand.charAt(0);
              const strandName = strand.substring(3);
              return (
                <TabsTrigger
                  key={strand}
                  value={strand}
                  className="flex flex-col items-start p-4 text-left data-[state=active]:bg-gradient-to-br data-[state=active]:from-teal-50 data-[state=active]:to-cyan-50 data-[state=active]:text-teal-700 data-[state=active]:border-teal-200 border border-transparent rounded-lg"
                >
                  <div className="font-bold text-lg">{strandLetter}</div>
                  <div className="text-sm font-medium leading-tight">{strandName}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {subjects[activeSubject][strand].interactiveType}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.keys(subjects[activeSubject]).map((strand) => (
            <TabsContent key={strand} value={strand} className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{strand}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>{subjects[activeSubject][strand].skills.length} Interactive Modules</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>{subjects[activeSubject][strand].interactiveType}</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {subjects[activeSubject][strand].skills.map((skill, index) => (
                  <Card 
                    key={index}
                    className={`${subjects[activeSubject][strand].color} border-2 ${subjects[activeSubject][strand].hoverColor} transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group`}
                  >
                    <CardContent className="p-6">
                      <Link 
                        href={`/${activeSubject.toLowerCase().replace(/\s+/g, '-')}/${strand.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}/module-${index + 1}`}
                        className="block"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="text-xs font-bold opacity-70 mb-2 uppercase tracking-wide">
                              {strand.charAt(0)}.{index + 1} • Interactive Module
                            </div>
                            <h3 className="font-bold text-base leading-tight mb-3">
                              {skill}
                            </h3>
                          </div>
                          <div className="ml-3 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Interactive Features Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-60">
                            🎛️ Controls
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-60">
                            📊 Real-time
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-60">
                            🎯 Adaptive
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">Launch Interactive</span>
                          <svg className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* AI-Powered Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-violet-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-bold text-purple-800 mb-2">AI Tutor</h3>
              <p className="text-sm text-purple-700 mb-4">Personalized guidance and hints</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                Activate AI
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-50 to-green-100 border-green-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-green-800 mb-2">Progress Analytics</h3>
              <p className="text-sm text-green-700 mb-4">Real-time learning insights</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                View Analytics
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-yellow-100 border-yellow-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-bold text-yellow-800 mb-2">Learning Playground</h3>
              <p className="text-sm text-yellow-700 mb-4">Experimental sandbox mode</p>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                Enter Playground
              </button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-rose-50 to-pink-100 border-pink-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-pink-800 mb-2">Achievement System</h3>
              <p className="text-sm text-pink-700 mb-4">Gamified learning rewards</p>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors">
                View Achievements
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
