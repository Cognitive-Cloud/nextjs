'use client';

import { useState } from 'react';
import Link from 'next/link';

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
  ]
  // ... add other math sections as needed
};

export default function HomePage() {
  const [selectedSubject, setSelectedSubject] = useState<'Math' | null>('Math');

  return (
    <main className="p-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🧠 CognitiveCloud.ai</h1>
      <h2 className="text-xl mb-2">Featured: MathCraft</h2>

      {selectedSubject && (
        <div className="space-y-4">
          {Object.entries(mathCraftSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mt-4">{category}</h3>
              <ul className="list-disc ml-6 text-sm text-gray-700">
                {skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#4B0082' }}>🧠 Welcome to CognitiveCloud.ai</h1>
      <p style={{ fontSize: '1.25rem' }}>Your gateway to MathCraft, Dunn Solutions 24, and interactive science simulations.</p>
      <ul>
        {Object.entries(subjects).map(([subject, sections]) => (
          <li key={subject}>
            <strong>{subject}</strong>
            <ul>
              {Object.entries(sections).map(([section, tools]) => (
                <li key={section}>{section}: {tools.length} tools</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
