'use client';

import { useState } from 'react';
import Link from 'next/link';

const subjects = {
  Math: {
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
  },
  Chemistry: {
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
  },
  Science: {
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
  }
};

// MAIN COMPONENT
export default function HomePage() {
  const [activeSubject, setActiveSubject] = useState<keyof typeof subjects>('Math');

  return (
    <main className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">Cognitive Cloud Programs</h1>
      <div className="mb-6 space-x-4">
        {Object.keys(subjects).map((subject) => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject as keyof typeof subjects)}
            className={`px-4 py-2 rounded ${
              activeSubject === subject ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div>
        {Object.entries(subjects[activeSubject]).map(([unit, skills]) => (
          <div key={unit} className="mb-4">
            <h2 className="text-xl font-semibold text-indigo-600">{unit}</h2>
            <ul className="list-disc list-inside ml-4 mt-1">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-800">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
