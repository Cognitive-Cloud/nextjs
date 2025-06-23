'use client'

import { useState } from 'react'
import Link from 'next/link'

const mathCraftSkills = {
  'A. Number Sense & Operations': ['Prime factorization', 'Order of operations'],
  'B. Algebra & Functions': ['Graphing functions', 'Solving equations'],
  'C. Geometry & Measurement': ['Area of triangles', 'Volume of prisms'],
  'D. Statistics & Probability': ['Box plots', 'Probability with dice']
}

const dunnSolutions24Skills = {
  'A. Atomic Structure & Bonding': ['Electron configuration', 'Lewis structures'],
  'B. Chemical Reactions & Equations': ['Balancing reactions', 'Redox'],
  'C. States of Matter & Solutions': ['Gas laws', 'Solubility curves'],
  'D. Thermodynamics & Kinetics': ['Reaction rates', 'Energy diagrams']
}

const scienceSkills = {
  'A. Scientific Method & Inquiry': ['Hypothesis writing', 'Graph interpretation'],
  'B. Life Sciences': ['DNA and RNA', 'Human body systems'],
  'C. Physical Sciences': ['Newton’s Laws', 'Simple machines'],
  'D. Earth & Space Science': ['Phases of the moon', 'Tectonic plates']
}

const subjects = {
  Math: mathCraftSkills,
  Chemistry: dunnSolutions24Skills,
  Science: scienceSkills
}

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
}

export default function Learning() {
  const [activeSubject, setActiveSubject] = useState('Math')
  const [activeStrand, setActiveStrand] = useState(Object.keys(subjects['Math'])[0])

  const strands = Object.keys(subjects[activeSubject])
  const skills = subjects[activeSubject][activeStrand]

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        {activeSubject} Skill Library
      </h1>

      {/* Subject Tabs */}
      <div className="flex justify-center mb-6 space-x-3">
        {Object.keys(subjects).map((subject) => (
          <button
            key={subject}
            onClick={() => {
              setActiveSubject(subject)
              setActiveStrand(Object.keys(subjects[subject])[0])
            }}
            className={`px-4 py-2 rounded font-medium ${
              subject === activeSubject
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            {subject}
          </button>
        ))}
      </div>

      {/* Strand Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {strands.map((strand) => (
          <button
            key={strand}
            onClick={() => setActiveStrand(strand)}
            className={`w-full text-left p-3 rounded shadow-sm ${
              strand === activeStrand
                ? 'bg-blue-100 border-l-4 border-blue-600'
                : 'bg-white'
            }`}
          >
            <div className="text-sm font-semibold">{strand}</div>
            <div className="text-xs text-gray-500">{gradeRecommendations[strand]}</div>
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="p-4 bg-white rounded-lg shadow border border-gray-200 hover:shadow-md transition"
          >
            <Link
              href={`/${activeSubject.toLowerCase()}/${activeStrand
                .replace(/[^a-zA-Z0-9]/g, '')
                .toLowerCase()}/skill-${i + 1}`}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">
                {activeStrand.charAt(0)}.{i + 1}
              </div>
              <div className="font-semibold text-gray-800">{skill}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
