# Resumate 🚀

**AI-Powered Resume Analysis Platform**

Resumate is a modern web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS). Get instant, comprehensive feedback on your resume with AI-powered analysis covering ATS compatibility, content quality, structure, tone, and skills presentation.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-2.86.2-green?style=flat&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)

## ✨ Features

- 🤖 **AI-Powered Analysis**: Uses Google Gemini AI to provide comprehensive resume feedback
- 📊 **ATS Compatibility Scoring**: Evaluates how well your resume performs in Applicant Tracking Systems
- 📝 **Multi-Dimensional Feedback**: Get scores and tips for:
  - Overall Resume Quality
  - ATS Compatibility
  - Content Quality
  - Structure & Formatting
  - Tone & Style
  - Skills Presentation
- 🔐 **Secure Authentication**: User registration and login with Supabase Auth
- 📁 **File Management**: Secure PDF upload and storage
- 🎨 **Modern UI**: Beautiful, responsive design built with Tailwind CSS


## 🛠️ Tech Stack

### Frontend
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **RTK Query** - Data fetching and caching

### Backend & Services
- **Supabase** - Authentication and file storage
- **Google Gemini AI** - AI-powered resume analysis
- **Next.js API Routes** - Server-side API endpoints

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **React Dropzone** - File upload component


## 🔌 API Endpoints

### Authentication

#### Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

```

#### Logout
```http
POST /api/auth/logout

```

### File Upload

#### Upload Resume
```http
POST /api/upload
Content-Type: multipart/form-data

file: <PDF file>
```

**Constraints:**
- Format: PDF only
- Max Size: 20MB

### AI Feedback

#### Get Resume Feedback
```http
POST /api/ai/feedback
Content-Type: application/json

```


### Development Workflow

1. Make changes to the code
2. Save and commit changes
3. The development server will automatically reload
4. Test your changes thoroughly


----



**Made with ❤️ for job seekers everywhere**
