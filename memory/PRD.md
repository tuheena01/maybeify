# Maybeify Publication House - Product Requirements Document

## Project Overview
**Project Name:** Maybeify Publication House Website  
**Type:** Professional publication house website with full-stack capabilities  
**Start Date:** December 2025  
**Status:** Frontend Complete with Mock Data

## Original Problem Statement
Building a professional website for Maybeify publication house to showcase services, published books, authors, and attract new writers. The website needs to look authentic, modern, and help authors find the publication house online.

## User Information
- **Publication House:** Maybeify
- **Contact Email:** contestmaybeify@gmail.com
- **Genres:** All genres (Fiction, Non-Fiction, Poetry, Academic, etc.)
- **Social Media:** Instagram, Facebook, LinkedIn

## Core Features

### Implemented (Frontend with Mock Data) ✅
1. **Hero Section** - Elegant library background with compelling CTA buttons
2. **Header Navigation** - Fixed header with smooth scroll navigation
3. **About Us** - Company overview with impressive statistics (500+ books, 300+ authors)
4. **How It Works** - 6-step publishing process visualization
5. **Packages** - 3 pricing tiers (Starter ₹15,999, Professional ₹29,999, Premium ₹49,999)
6. **Featured Books/Best Sellers** - Book showcase with Amazon links
7. **Featured Authors** - Author profiles with bios and publication counts
8. **LITX AWARDS 2026** - Contest section with prizes (1st: ₹1,500, 2nd: ₹700, 3rd: ₹300)
9. **Testimonials** - Author reviews and ratings
10. **Contact Form** - Full contact form with business hours
11. **Footer** - Social media links, quick navigation, scroll-to-top
12. **Responsive Design** - Mobile and desktop optimized

### Design System
- **Colors:** Deep Navy Blue (#1a3a6b), Burgundy, Gold (#D4A54E)
- **Typography:** Professional sans-serif with clear hierarchy
- **Components:** Shadcn UI components
- **Animations:** Smooth hover effects, scroll animations

## Architecture

### Frontend
- **Framework:** React 19
- **Styling:** Tailwind CSS with custom theme
- **Components:** Shadcn UI
- **Key Files:**
  - `/app/frontend/src/components/` - All page sections
  - `/app/frontend/src/data/mock.js` - Mock data for all content

### Backend (Not Yet Implemented)
- **Framework:** FastAPI
- **Database:** MongoDB
- **Planned APIs:**
  - Contact form submission
  - Newsletter signup
  - Contest entry management
  - Book/Author management (admin)

## Next Steps (Priority Order)

### P0 - Critical
1. Backend API development for contact form
2. Database models for contacts and contest entries
3. Email notification system for form submissions

### P1 - Important
4. Admin panel for managing books and authors
5. Contest submission system with file upload
6. Newsletter subscription functionality
7. Analytics integration

### P2 - Enhancement
8. SEO optimization
9. Blog/News section
10. Author portal for tracking submissions
11. Payment gateway for package purchases

## Technical Notes
- Mock data currently stored in `/app/frontend/src/data/mock.js`
- All social media links point to placeholder URLs (need real URLs)
- Contact form has frontend validation, needs backend integration
- Amazon book links are placeholders

## User Personas
1. **Aspiring Authors** - Looking for professional publishing services
2. **Contest Participants** - Interested in LITX AWARDS 2026
3. **Readers** - Browsing published books and author profiles
4. **Publication House Admin** - Managing content and submissions
