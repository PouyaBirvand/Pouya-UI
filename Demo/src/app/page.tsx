'use client'

import { useState } from 'react';
import { Button } from "../../Library/src";

export default function Home() {
  const [activeTab, setActiveTab] = useState('variants');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header with animated gradient */}
      <div className="relative overflow-hidden py-24 px-8 mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              React UI Library
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            A beautiful, modern, and customizable UI component library for React applications
          </p>
        </div>
      </div>

      {/* Component showcase */}
      <div className="max-w-6xl mx-auto px-4 pb-24">
        {/* Navigation tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('variants')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${activeTab === 'variants' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Variants
          </button>
          <button
            onClick={() => setActiveTab('sizes')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${activeTab === 'sizes' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
          >
            Sizes
          </button>
          <button
            onClick={() => setActiveTab('states')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${activeTab === 'states' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-200'}`}
          >
            States
          </button>
        </div>

        {/* Variants section */}
        {activeTab === 'variants' && (
          <div className="grid gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Button Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button className="w-full">Primary</Button>
                  <span className="mt-3 text-sm text-gray-400">Default</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="secondary" className="w-full">Secondary</Button>
                  <span className="mt-3 text-sm text-gray-400">Secondary</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="outline" className="w-full">Outline</Button>
                  <span className="mt-3 text-sm text-gray-400">Outline</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="ghost" className="w-full">Ghost</Button>
                  <span className="mt-3 text-sm text-gray-400">Ghost</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="danger" className="w-full">Danger</Button>
                  <span className="mt-3 text-sm text-gray-400">Danger</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Usage Example</h2>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`import { Button } from 'react-ui-library';

// Primary button (default)
<Button>Primary Button</Button>

// Secondary button
<Button variant="secondary">Secondary Button</Button>

// Other variants
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="danger">Danger Button</Button>`}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Sizes section */}
        {activeTab === 'sizes' && (
          <div className="grid gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Button Sizes</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button size="sm">Small</Button>
                  <span className="mt-3 text-sm text-gray-400">Small</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button>Medium</Button>
                  <span className="mt-3 text-sm text-gray-400">Medium (Default)</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button size="lg">Large</Button>
                  <span className="mt-3 text-sm text-gray-400">Large</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Full Width Button</h2>
              <div className="p-6 bg-gray-900/50 rounded-lg">
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </div>
        )}

        {/* States section */}
        {activeTab === 'states' && (
          <div className="grid gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Button States</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button isLoading>Loading</Button>
                  <span className="mt-3 text-sm text-gray-400">Loading State</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button disabled>Disabled</Button>
                  <span className="mt-3 text-sm text-gray-400">Disabled State</span>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button onClick={() => alert('Button clicked!')}>Interactive</Button>
                  <span className="mt-3 text-sm text-gray-400">With Click Handler</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-200">Variant Combinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="primary" size="lg" className="w-full">
                    Primary Large
                  </Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="secondary" size="sm" className="w-full">
                    Secondary Small
                  </Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="outline" isLoading className="w-full">
                    Outline Loading
                  </Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="ghost" disabled className="w-full">
                    Ghost Disabled
                  </Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="danger" size="lg" className="w-full">
                    Danger Large
                  </Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg">
                  <Button variant="primary" size="sm" isLoading className="w-full">
                    Primary Small Loading
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built with ❤️ using React and Next.js</p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} React UI Library</p>
      </footer>
    </main>
  );
}