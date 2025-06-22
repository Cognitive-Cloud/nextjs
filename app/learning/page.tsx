// app/learning/page.tsx
'use client'

import { useState } from 'react';
import Link from 'next/link';

// MathCraft - Interactive Mathematics  
const mathCraftSkills = {
  'A. Number Sense & Operations': [
    'Interactive place value with draggable blocks',
    'Fraction operations with visual pie charts', 
    'Decimal number line with zoom controls',
    'Integer operations on coordinate grids',
    'Ratio and proportion with interactive scales',
    'Percentage calculator with real-world scenarios',
    'Order of operations with step-by-step builder',
    'Prime factorization with factor trees'
  ],
  'B. Algebra & Functions': [
    'Equation solver with balance beam visualization',
    'Interactive graphing with point plotting',
    'Function transformation sliders',
    'System of equations with intersection finder',
    'Polynomial factoring with algebra tiles',
    'Quadratic formula with vertex form converter',
    'Exponential growth simulators',
    'Linear programming with constraint graphers'
  ],
  'C. Geometry & Measurement': [
    'Dynamic angle measurement tools',
    'Interactive polygon constructors',
    '3D shape rotation and cross-sections',
    'Area and perimeter with draggable vertices',
    'Volume calculators with liquid simulations',
    'Pythagorean theorem with triangle builders',
    'Transformation geometry with coordinate grids',
    'Circle properties with radius/diameter tools'
  ],
  'D. Statistics & Probability': [
    'Interactive data collection and graphing',
    'Probability simulations with dice and coins',
    'Statistical analysis with real datasets',
    'Box plot constructors with quartile sliders',
    'Correlation scatter plot builders',
    'Normal distribution curve explorers',
    'Hypothesis testing with confidence intervals',
    'Regression line fitting tools'
  ]
};

// DunnSolutions24 - Interactive Chemistry
const dunnSolutions24Skills = {
  'A. Atomic Structure & Bonding': [
    'Interactive periodic table with element details',
    'Electron configuration builders with orbital diagrams',
    'Ion formation simulators with charge calculators',
    'Molecular geometry with VSEPR model builders',
    'Bond polarity indicators with electronegativity scales',
    'Lewis structure constructors with electron dots',
    'Covalent vs ionic bonding comparisons',
    'Crystal lattice structure visualizers'
  ],
  'B. Chemical Reactions & Equations': [
    'Chemical equation balancing with step guides',
    'Reaction type classifiers with pattern recognition',
    'Stoichiometry calculators with mole conversions',
    'Limiting reagent simulators with visual representations',
    'Combustion reaction builders with energy diagrams',
    'Acid-base neutralization with pH indicators',
    'Redox reaction electron transfer trackers',
    'Precipitation reaction predictors'
  ],
  'C. States of Matter & Solutions': [
    'Phase diagram explorers with pressure/temperature controls',
    'Molecular motion simulators for gas laws',
    'Solution concentration calculators with visual mixing',
    'Colligative properties with freezing point depression',
    'Vapor pressure curves with temperature sliders',
    'Solubility curve graphers with saturation points',
    'Osmosis and diffusion rate simulators',
    'Gas law PV=nRT interactive calculators'
  ],
  'D. Thermodynamics & Kinetics': [
    'Enthalpy change calculators with bond energy tables',
    'Activation energy diagrams with catalyst effects',
    'Reaction rate experiments with variable controls',
    'Equilibrium constant calculators with Le Chatelier\'s principle',
    'Thermodynamic cycle builders (Carnot, Otto)',
    'Calorimetry simulators with heat transfer',
    'Entropy change calculators with state functions',
    'Electrochemical cell voltage calculators'
  ]
};

// CognitiveCloud Science
const scienceSkills = {
  'A. Scientific Method & Inquiry': [
    'Hypothesis formation with testable question builders',
    'Variable identification with experimental design tools',
    'Data collection simulators with measurement tools',
    'Graph constructors with trend line fitters',
    'Statistical analysis with significance testers',
    'Error analysis with uncertainty calculators',
    'Peer review simulators with scientific writing',
    'Research methodology with citation builders'
  ],
  'B. Life Sciences': [
    'Cell organelle builders with function animations',
    'DNA replication simulators with base pair matching',
    'Protein synthesis with codon translation tools',
    'Ecosystem food web builders with energy flow',
    'Evolution simulators with natural selection',
    'Genetics crosses with Punnett square builders',
    'Human body system interconnection maps',
    'Biodiversity calculators with species identification'
  ],
  'C. Physical Sciences': [
    'Newton\'s laws with force vector builders',
    'Wave properties with frequency/amplitude controls',
    'Electric circuit builders with current flow visualization',
    'Optics ray tracers with lens and mirror systems',
    'Thermodynamics with heat engine simulators',
    'Quantum mechanics with particle wave demonstrations',
    'Relativity calculators with time dilation effects',
    'Simple machines with mechanical advantage'
  ],
  'D. Earth & Space Science': [
    'Plate tectonics with boundary interaction simulators',
    'Weather pattern builders with atmospheric pressure maps',
    'Climate change models with greenhouse gas effects',
    'Rock cycle simulators with formation processes',
    'Water cycle with precipitation and evaporation rates',
    'Solar system structure with orbital mechanics',
    'Moon phases with tidal force calculators',
    'Geological time scale with fossil dating'
  ]
};

const subjects = {
  'Math': mathCraftSkills,
  'Chemistry': dunnSolutions24Skills,
  'Science': scienceSkills
};

const gradeRecommendations = {
  'A. Number Sense & Operations': 'Grades K-5',
  'B. Algebra & Functions': 'Grades 6-12', 
  'C. Geometry & Measurement': 'Grades 3-12',
  'D. Statistics & Probability': 'Grades 6-12',
  'A. Atomic Structure & Bonding': 'Grades 9-12',
  'B. Chemical Reactions & Equations': 'Grades 9-12',
  'C. States of Matter & Solutions': 'Grades 8-12',
  'D. Thermodynamics & Kinetics': 'Grades 11-12',
  'A. Scientific Method & Inquiry': 'Grades 3-12',
  'B. Life Sciences': 'Grades 6-12',
  'C. Physical Sciences': 'Grades 8-12',
  'D. Earth & Space Science': 'Grades 5-12'
};

export default function LearningPage() {
  const [activeSubject, setActiveSubject] = useState('Math');
  const [activeStrand, setActiveStrand] = useState(Object.keys(subjects[activeSubject])[0]);

  const handleSubjectChange = (subject) => {
    setActiveSubject(subject);
    setActiveStrand(Object.keys(subjects[subject])[0]);
  };

  const getSkillColor = (subject) => {
    if (subject === 'Math') {
      return 'bg-blue-50 border-blue-200 text-blue-800 hover:border-blue-400';
    } else if (subject === 'Chemistry') {
      return 'bg-red-50 border-red-200 text-red-800 hover:border-red-400';
    } else {
      return 'bg-green-50 border-green-200 text-green-800 hover:border-green-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* IXL-style header */}
      <header className="bg-white border-b-2 border-teal-500 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-6">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3">
              <span className="font-bold text-2xl text-teal-600">I</span>
              <span className="font-bold text-2xl text-yellow-500">XL</span>
              <span className="text-sm text-gray-600 font-medium">CognitiveCloud</span>
            </Link>
            <nav className="hidden md:flex space-x-1">
              <Link href="/learning" className="bg-teal-100 text-teal-700 font-medium px-4 py-2 rounded">Learning</Link>
              <Link href="/diagnostic" className="text-gray-600 hover:text-teal-600 px-4 py-2">Diagnostic</Link>
              <Link href="/analytics" className="text-gray-600 hover:text-teal-600 px-4 py-2">Analytics</Link>
              <Link href="/awards" className="text-gray-600 hover:text-teal-600 px-4 py-2">Awards</Link>
              <Link href="/skill-plans" className="text-gray-600 hover:text-teal-600 px-4 py-2">Skill plans</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-teal-700">CC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-2 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-teal-600">CognitiveCloud Learning</Link>
            <span className="mx-2 text-gray-400">›</span>
            <Link href="/learning" className="hover:text-teal-600">Learning</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-900 font-medium">{activeSubject}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-6">
        {/* Subject selector */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            {Object.keys(subjects).map((subject) => (
              <button
                key={subject}
                onClick={() => handleSubjectChange(subject)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSubject === subject
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        {/* Subject header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{activeSubject} skills</h1>
          <p className="text-gray-600">
            Interactive learning modules with real-time feedback and adaptive difficulty
          </p>
        </div>

        {/* Strand tabs */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white p-1 rounded-lg border border-gray-200">
            {Object.keys(subjects[activeSubject]).map((strand) => {
              const strandLetter = strand.charAt(0);
              const strandName = strand.substring(3);
              return (
                <button
                  key={strand}
                  onClick={() => setActiveStrand(strand)}
                  className={`flex flex-col items-start p-3 text-left border border-transparent rounded ${
                    activeStrand === strand
                      ? 'bg-teal-50 text-teal-700 border-teal-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-bold text-lg">{strandLetter}</div>
                  <div className="text-sm font-medium leading-tight">{strandName}</div>
                  <div className="text-xs text-gray-500 mt-1">{gradeRecommendations[strand]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills for active strand */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{activeStrand}</h2>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>{subjects[activeSubject][activeStrand].length} skills</span>
            <span>•</span>
            <span>{gradeRecommendations[activeStrand]}</span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects[activeSubject][activeStrand].map((skill, index) => (
            <div 
              key={index}
              className={`${getSkillColor(activeSubject)} border transition-all duration-200 hover:shadow-md cursor-pointer p-4 rounded-lg`}
            >
              <Link 
                href={`/learning/${activeSubject.toLowerCase()}/${activeStrand.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}/skill-${index + 1}`}
                className="block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-xs font-medium opacity-70 mb-2">
                      {activeStrand.charAt(0)}.{index + 1}
                    </div>
                    <div className="font-medium text-sm leading-tight">
                      {skill}
                    </div>
                  </div>
                  <div className="ml-3 opacity-40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Progress section */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Progress in {activeStrand}</h3>
              <p className="text-sm text-gray-600">Complete skills to earn SmartScore of 100</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">0</div>
                <div className="text-xs text-gray-500">skills mastered</div>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="3"
                    strokeDasharray="0, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
