// pages/index.js
'use client';

import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <ThemeToggle />
      {/* Rest of your page content */}
    </div>
  );
}