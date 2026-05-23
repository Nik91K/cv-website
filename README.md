# cv-website

Personal portfolio and resume website built with React and TypeScript. Features a responsive layout, smooth animations, and a project showcase with individual project pages.

**Live demo:** [cv-website-olive-three.vercel.app](https://cv-website-olive-three.vercel.app/)

---

## Tech Stack

| Category   | Technologies                                    |
| ---------- | ----------------------------------------------- |
| Framework  | React 18, TypeScript                            |
| Styling    | Tailwind CSS, Shadcn UI, Motion (Framer Motion) |
| Routing    | React Router v7                                 |
| Build tool | Vite                                            |
| Deployment | Vercel                                          |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nik91K/cv-website.git
cd cv-website

# Install dependencies
npm install
```

### Running locally

```bash
npm run dev
```

---

## Pages & Routing

| Path            | Description                               |
| --------------- | ----------------------------------------- |
| `/`             | Home — hero, about, skills, work sections |
| `/projects/:id` | Individual project detail page            |
| `*`             | 404 Not Found                             |
