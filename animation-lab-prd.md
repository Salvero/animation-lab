# PRD: animation-lab Repository Setup

## Overview
Create a public GitHub repository called `animation-lab` for daily JavaScript/CSS animation practice experiments.

## Goals
- Establish a structured repo for daily frontend animation practice
- Maintain consistent GitHub contribution graph (green squares)
- Build a portfolio of animation skills demonstrations

## Repository Structure

```
animation-lab/
├── README.md
├── 001-fade-in/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── 002-bounce/
│   └── ...
└── [NNN-experiment-name]/
```

## Naming Convention
- Folders: `NNN-descriptive-name` (e.g., `001-fade-in`, `002-bounce`)
- Keep names lowercase with hyphens
- Number prefix ensures chronological order

## Daily Workflow
1. Create new numbered folder with: index.html, style.css, script.js
2. Build animation experiment following the established card UI pattern
3. Git add, commit, and push

## Auto-Commit Rule (for Claude)
When user says **"do NNN"**, **"next task"**, or **"do [animation-name]"**:
1. Read this PRD to find the next pending animation from the roadmap
2. Create the folder and all three files (index.html, style.css, script.js)
3. **Automatically** run: `git add . && git commit && git push`
4. Update the roadmap status in this PRD from "Pending" to "✅ Done"

No need to ask for permission to commit/push - just do it automatically.

---

## 3-Week Animation Roadmap

### Week 1: CSS Fundamentals (001-007)
| # | Name | Description | Status |
|---|------|-------------|--------|
| 001 | fade-in | Opacity + translateY entrance | ✅ Done |
| 002 | bounce | Spring bounce with scale effects | ✅ Done |
| 003 | slide-in | Horizontal slide from left | ✅ Done |
| 004 | pulse | Glowing pulse with box-shadow | ✅ Done |
| 005 | rotate-in | Rotation entrance with scale | ✅ Done |
| 006 | shake | Horizontal shake/wiggle effect | ✅ Done |
| 007 | zoom | Scale in from enlarged state | ✅ Done |

### Week 2: Intermediate Animations (008-014)
| # | Name | Description | Status |
|---|------|-------------|--------|
| 008 | typewriter | Text typing effect with cursor | ✅ Done |
| 009 | wave | Staggered wave animation on elements | ✅ Done |
| 010 | morph | Shape morphing with clip-path | ✅ Done |
| 011 | parallax | Scroll-based parallax layers | ✅ Done |
| 012 | hover-lift | 3D hover lift with shadow | Pending |
| 013 | ripple | Material design ripple on click | Pending |
| 014 | skeleton | Loading skeleton shimmer | Pending |

### Week 3: Advanced Effects (015-021)
| # | Name | Description | Status |
|---|------|-------------|--------|
| 015 | particles | Floating particle background | Pending |
| 016 | gradient-shift | Animated gradient background | Pending |
| 017 | stagger-list | Staggered list item animations | Pending |
| 018 | magnetic | Magnetic cursor follow effect | Pending |
| 019 | morphing-text | Text scramble/morph effect | Pending |
| 020 | liquid | Liquid/blob SVG animation | Pending |
| 021 | page-transition | Full page transition effect | Pending |

---

## File Templates

Each experiment follows this structure:

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NNN - Animation Name</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <div class="card [animation-class]">
      <div class="icon">[emoji]</div>
      <h1>[Title]</h1>
      <p>[Description]</p>
      <button id="replay-btn">Replay Animation</button>
    </div>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

**style.css** - Include base reset, centered flexbox layout, glassmorphism card, gradient background (unique color per experiment), and keyframe animation

**script.js** - Replay button functionality using classList toggle and reflow trick

## Commit Message Format
```
NNN: Short description
```

## Success Criteria
- Repo is public and visible on GitHub profile
- Each animation works standalone in browser
- Consistent UI pattern across all experiments
- Daily commits maintain green contribution graph
