# New Website Project Checklist

## Initial Setup
1. Create a new directory with the new project name
2. Copy template files you want to reuse:
   - index.html
   - styles.css
   - script.js
   - (but NOT the .git folder!)

## Before Git Init
1. In index.html:
   - Change the title tag
   - Update meta descriptions
   - Update all content
   - Change image references
   - Update links and URLs

2. In styles.css:
   - Update any project-specific colors
   - Adjust any specific styling

3. Update README.md with new project info

## Git Setup
1. Initialize new git repository:
   ```bash
   git init
   ```

2. Add the new remote:
   ```bash
   git remote add origin https://github.com/JBell2003/NEW-PROJECT-NAME.git
   ```

3. Create and switch to gh-pages branch:
   ```bash
   git checkout -b gh-pages
   ```

4. Add and commit files:
   ```bash
   git add .
   git commit -m "Initial commit for NEW PROJECT"
   git push -u origin gh-pages
   ```

## GitHub Setup
1. Go to repository settings
2. Navigate to Pages section
3. Set source to gh-pages branch
4. Save and wait for deployment

## Final Checks
1. Verify all old website references are removed
2. Test all links and images
3. Confirm GitHub Pages is working
4. Test the website on different devices 