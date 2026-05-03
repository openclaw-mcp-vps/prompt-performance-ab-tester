import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptAB — A/B Test AI Prompts with Performance Metrics',
  description: 'Compare prompt variants side-by-side with response quality scoring and cost analysis. Built for AI product managers and developers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6b1fa61e-b641-408c-81b6-91a1b1e62c70"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
