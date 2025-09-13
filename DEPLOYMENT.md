# Deployment Instructions for migrAItion Landing Page

## Prerequisites
- GitHub repository with the website code
- Access to migraition.app domain DNS settings
- GitHub Pages enabled on the repository

## Quick Deploy Steps

### 1. Push to GitHub
```bash
# From the /biz directory
git add website/
git commit -m "Add landing page for migrAItion"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Source: Deploy from a branch
4. Branch: Select `main`
5. Folder: Select `/website` 
6. Click Save

### 3. Set up GitHub Actions (Already configured)
The `.github/workflows/deploy.yml` file is already set up to:
- Build the Next.js site on push to main
- Export static files
- Deploy to GitHub Pages

### 4. Configure Custom Domain
1. In GitHub Pages settings, add custom domain: `migraition.app`
2. Update DNS records for migraition.app:
   - Add CNAME record pointing to `[your-username].github.io`
   - OR add A records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### 5. Manual Build & Deploy (if needed)
```bash
cd website
npm run build
# The static files will be in the 'out' directory
```

## Testing Locally
```bash
cd website
npm run dev
# Visit http://localhost:3000
```

## Mobile Testing
The site is fully responsive. Test on:
- iPhone (375px width)
- iPad (768px width)
- Desktop (1024px+ width)

## Email Capture
Currently using a simulated form. To activate real email capture:
1. Option 1: Integrate with Google Forms
2. Option 2: Use Formspree.io (add to form action)
3. Option 3: Deploy API endpoint (Vercel Functions or Netlify Functions)

## Performance Optimizations
- Static site generation for fastest loading
- Image optimization with Next.js Image component
- Tailwind CSS for minimal CSS bundle
- No unnecessary JavaScript libraries

## Monitoring
After deployment:
- Check Google PageSpeed Insights
- Test all links and forms
- Verify mobile responsiveness
- Check SEO meta tags

## Support
For issues or questions about deployment, check the GitHub Actions logs or contact the development team.