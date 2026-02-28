# Maybeify Publication House Website

## 📖 Project Overview
Professional publication house website built with React, Tailwind CSS, and Shadcn UI components.

## ✨ Features
- 🎨 Modern, sophisticated design with Navy Blue & Gold color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Smooth scroll navigation
- 📚 Featured Books showcase with Amazon links
- 👥 Featured Authors profiles
- 🏆 LITX AWARDS 2026 contest section
- 💰 3 pricing packages (Starter, Professional, Premium)
- 📧 Contact form with validation
- ⭐ Author testimonials
- 🔗 Social media integration

## 📁 File Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed navigation header
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── About.jsx           # About section with stats
│   │   ├── HowItWorks.jsx      # 6-step publishing process
│   │   ├── Packages.jsx        # Pricing packages
│   │   ├── FeaturedBooks.jsx   # Book showcase
│   │   ├── FeaturedAuthors.jsx # Author profiles
│   │   ├── Contest.jsx         # LITX AWARDS section
│   │   ├── Testimonials.jsx    # Author reviews
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer with links
│   │   └── ui/                 # Shadcn UI components
│   │
│   ├── data/
│   │   └── mock.js             # All mock data
│   │
│   ├── App.js                  # Main app component
│   ├── App.css                 # App styles
│   └── index.css               # Global styles + Tailwind
│
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
└── public/                     # Public assets
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Step 1: Install Dependencies
```bash
cd frontend
yarn install
```

### Step 2: Start Development Server
```bash
yarn start
```

The website will open at `http://localhost:3000`

### Step 3: Build for Production
```bash
yarn build
```

## 🎨 Customization

### Change Colors
Edit `/frontend/src/index.css` - Look for CSS variables:
```css
--primary: 221 83% 22%;      /* Deep Navy Blue */
--accent: 43 89% 58%;        /* Gold */
--secondary: 221 40% 95%;    /* Light Blue */
```

### Update Content
Edit `/frontend/src/data/mock.js`:
- `publishedBooks` - Book details, covers, Amazon links
- `featuredAuthors` - Author profiles
- `testimonials` - Author reviews
- `packages` - Pricing packages
- `contestInfo` - LITX AWARDS details
- `socialMediaLinks` - Social media URLs

### Change Images
Replace image URLs in `mock.js` with your own:
```javascript
coverImage: "YOUR_IMAGE_URL_HERE"
```

## 📧 Contact Information
- **Email**: contestmaybeify@gmail.com
- **Social Media**: 
  - Instagram: instagram.com/maybeify
  - Facebook: facebook.com/maybeify
  - LinkedIn: linkedin.com/company/maybeify

## 🔧 Current Status
✅ **Completed**: Frontend with mock data
⏳ **Pending**: Backend API, Database integration

## 📝 Next Steps (Backend Development)
1. Create FastAPI backend for contact form
2. Setup MongoDB database
3. Implement email notifications
4. Build admin panel for content management
5. Add contest submission system

## 🛠️ Technologies Used
- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Icons**: Lucide React
- **Notifications**: Sonner (toast)

## 📦 Dependencies
All dependencies are listed in `package.json`:
- react: ^19.0.0
- react-dom: ^19.0.0
- tailwindcss: ^3.4.17
- lucide-react: ^0.507.0
- sonner: ^2.0.3
- And more...

## 🌐 Deployment Options
- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo
- **AWS S3 + CloudFront**: Upload build folder

## 📄 License
All rights reserved © 2025 Maybeify Publication House

## 🤝 Support
For any questions or support, contact: contestmaybeify@gmail.com

---

**Built with ❤️ for Maybeify Publication House**
