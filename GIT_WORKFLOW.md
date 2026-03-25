# Git Workflow for Thai Tone Trainer Design

## 🔗 Repository Connection

You are currently connected to:  
**GitHub:** `https://github.com/sammythaitiger/ThaiToneDesign.git`  
**Local:** `Thai Tone Designer` folder

## 📁 Current Repository Status
- ✅ Remote `origin` configured to your GitHub repository
- ✅ Local Git initialized
- ✅ Basic project structure created
- ❌ No commits pushed yet

## 🚀 Complete Setup Commands

### 1. First Commit (Initial Project Structure)
```bash
# Add all files to staging
git add .

# Commit with descriptive message
git commit -m "feat: initial project structure for Thai Tone Trainer design"

# Push to GitHub (main branch)
git push -u origin main
```

### 2. Daily Workflow Commands

#### Start working session:
```bash
# Pull latest changes from GitHub
git pull origin main

# Check status
git status
```

#### Make changes and save:
```bash
# After making changes, stage them
git add [filename]          # Add specific file
git add .                   # Add all changes
git add docs/               # Add specific folder

# Commit with descriptive message
git commit -m "type: description"

# Message format:
# docs: update user flow diagrams
# design: add wireframe for tone practice
# feat: create API specification for audio analysis
# fix: correct typo in README
```

#### Push to GitHub:
```bash
# Push your commits
git push origin main

# If you get "non-fast-forward" error, first pull:
git pull origin main --rebase
git push origin main
```

### 3. Branch Workflow (Recommended for Features)

#### Create feature branch:
```bash
git checkout -b design/tone-practice-ui
# Or
git checkout -b docs/user-flows
```

#### Work on branch:
```bash
# Make changes, commit as usual
git add .
git commit -m "design: complete tone practice wireframe"
```

#### Merge back to main:
```bash
# Switch to main
git checkout main

# Pull latest
git pull origin main

# Merge your branch
git merge design/tone-practice-ui

# Push to GitHub
git push origin main

# Delete local branch (optional)
git branch -d design/tone-practice-ui
```

## 💡 Best Practices

### Commit Messages
Use conventional commit format:
- `docs:` documentation changes
- `design:` design files, wireframes, mockups
- `feat:` new features or specifications
- `fix:` bug fixes or corrections
- `chore:` maintenance tasks

### File Organization
```
docs/           # Markdown documentation
design/         # Design assets (Figma links, images)
project/        # Project management files
specs/          # Technical specifications
```

### What to Commit
- ✅ Markdown files (.md)
- ✅ Text documents (.txt)
- ✅ Images for documentation (.png, .jpg)
- ✅ Configuration files (.json, .yml)

### What NOT to Commit (use .gitignore)
- ❌ Binary design files (.psd, .ai) - use cloud storage
- ❌ Large media files - use external links
- ❌ Environment variables (.env)
- ❌ Build artifacts

## 🛠️ Troubleshooting

### "Permission denied" error
```bash
# Check remote URL
git remote -v

# If using HTTPS, you might need to login
# Or use SSH (recommended):
git remote set-url origin git@github.com:sammythaitiger/ThaiToneDesign.git
```

### "Updates were rejected" error
```bash
# Someone else pushed changes
git pull origin main --rebase
# Resolve conflicts if any
git push origin main
```

### "Branch diverged" error
```bash
# Save your work
git stash

# Get latest
git pull origin main

# Restore your work
git stash pop

# Commit and push
git add .
git commit -m "fix: merge conflicts"
git push origin main
```

## 📊 Viewing Repository

### Check status:
```bash
git status
git log --oneline -5  # Last 5 commits
```

### See remote connection:
```bash
git remote -v
```

### See all branches:
```bash
git branch -a
```

## 🔗 Useful Links
- **GitHub Repository:** https://github.com/sammythaitiger/ThaiToneDesign
- **Git Documentation:** https://git-scm.com/doc
- **Conventional Commits:** https://www.conventionalcommits.org/

## 🆘 Need Help?
```bash
# Get help for any command
git help [command]
git [command] --help

# View Git configuration
git config --list
```