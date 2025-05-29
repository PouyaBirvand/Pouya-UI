# Pouya UI Component Library with Next.js Demo
## ⚠️ Development Status
> **Note:** This project is currently under active development. Features may change and improve over time.
>
 <br/>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

## 📂 Complete Project Structure
```
DEMO/
├── next/ # Next.js demo app
│ ├── public/ # Static assets
│ │ └── favicon.ico
│ ├── src/app/ # App router
│ │ ├── globals.css # Global styles
│ │ ├── layout.tsx # Root layout
│ │ └── page.tsx # Demo page
│ ├── next.config.js # Next.js config
│ └── package.json # Next.js dependencies
│
└── Library/ # UI Component Library
├── .storybook/ # Storybook config
│ ├── main.ts # Storybook main config
│ └── preview.ts # Storybook preview config
├── src/
│ ├── components/
│ │ └── Button/ # Button component
│ │ ├── Button.tsx # Component logic
│ │ ├── Button.types.ts # Type definitions
│ │ ├── Button.styles.ts # Style logic
│ │ ├── Button.test.tsx # Unit tests
│ │ ├── Button.stories.tsx # Storybook stories
│ │ └── index.ts # Component export
│ ├── styles/
│ │ ├── Button.css # Component CSS
│ │ └── globals.css # Global CSS
│ └── index.ts # Library entry point
├── babel.config.js # Babel config
├── jest.config.js # Jest config
├── jest.setup.js # Jest setup
├── package.json # Library dependencies
├── rollup.config.js # Rollup config
├── tsconfig.json # TypeScript config
└── vite.config.ts # Vite config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Task.git
cd Task/DEMO
# Install dependencies for both projects
npm install
cd ../Library
npm install
```

## 🛠 Development Workflows

### Running the Next.js Demo

```bash
cd DEMO/next
npm run dev
```

Open http://localhost:3000 to view the demo app.

### Developing the UI Library

```bash
cd Library
npm run dev
```

### Running Storybook

```bash
cd Library
npm run storybook
```

Open http://localhost:6006 to view component documentation.

### Running Tests

```bash
cd Library
npm test          # Run all tests
npm run test:cov  # Run tests with coverage
```

## 📦 Using Components in Next.js

The demo Next.js app is pre-configured to import components directly from the library. Example usage in DEMO/next/src/app/page.tsx:

```tsx
'use client'
import { Button } from "../../../Library/src";

export default function Home() {
  return (
    <div className="p-8">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" className="ml-4">Secondary</Button>
    </div>
  )
}
```

## 🎨 Component Architecture

### Button Component Structure

Each component follows this pattern:
- Button.tsx - Main component logic
- Button.types.ts - TypeScript interfaces
- Button.styles.ts - Style configuration
- Button.test.tsx - Unit tests
- Button.stories.tsx - Storybook documentation

### Example Button Implementation

```tsx
// Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { getButtonClasses } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  ...props
}) => {
  const buttonClasses = getButtonClasses(variant, size);
  
  return (
    <button className={buttonClasses} {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
```

## 🧪 Testing Strategy

### Unit Tests

Tests use Jest and React Testing Library:

```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders primary button by default', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText('Click')).toHaveClass('sg-button-primary');
  });
});
```

### Storybook Stories

Interactive documentation:

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  },
};
```

## 📦 Building for Production

### Build the Library

```bash
cd Library
npm run build
```

This creates production-ready bundles in:
- dist/cjs/ - CommonJS format
- dist/esm/ - ES Modules format
- dist/types/ - TypeScript declarations

### Build the Demo

```bash
cd DEMO/next
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

MIT © [Pouya]
