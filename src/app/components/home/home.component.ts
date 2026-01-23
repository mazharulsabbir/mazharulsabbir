import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Md Mazharul Islam';
  subtitle = 'Software Engineer | Odoo ERP Specialist';
  bio: string = "Senior Software Engineer with 5+ years of experience specializing in Odoo ERP development, mobile applications, and backend engineering. Expert in building scalable enterprise solutions, mobile apps, and high-performance APIs.";

  about_me = "ABOUT ME"
  who_am_i = "WHO AM I"
  about_body = "Senior Software Engineer currently working at Genweb2 Limited, specializing in Odoo ERP development, custom module creation, and business process automation. Previously worked at Daffodil Computers Limited, where I led mobile app development initiatives, managed app releases, and developed Odoo-based dashboards using OWL JS. My expertise spans across Odoo ERP, Flutter, FastAPI, Golang, mobile development (Android/iOS), CI/CD pipelines, and comprehensive code review and analysis. I'm passionate about solving complex problems, building efficient systems, and mentoring fellow developers."

  currentCompany = {
    name: "Genweb2 Limited",
    role: "Software Engineer",
    duration: "2022 - Present",
    description: "Leading Odoo ERP development projects, custom module creation, API integrations, and business process automation"
  }

  previousCompany = {
    name: "Daffodil Computers Limited",
    role: "Software Developer",
    duration: "2021 - 2022",
    description: "Mobile app development, app release management, Odoo API development, dashboard development using Odoo ERP and OWL JS"
  }

  skills = [
    { name: "Odoo ERP", level: 95, category: "ERP" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "FastAPI", level: 88, category: "Backend" },
    { name: "Golang", level: 82, category: "Backend" },
    { name: "Android", level: 85, category: "Mobile" },
    { name: "CI/CD", level: 80, category: "DevOps" },
    { name: "Angular", level: 75, category: "Frontend" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "Docker", level: 78, category: "DevOps" }
  ]

  expertiseAreas = [
    {
      title: "Odoo ERP Development",
      icon: "assets/icons/odoo.svg",
      description: "Custom module development, API integration, business process automation, and ERP implementation for enterprise solutions"
    },
    {
      title: "Mobile Development",
      icon: "assets/icons/mobile.svg",
      description: "Cross-platform apps with Flutter, native Android/iOS development, app release management, and Play Store/App Store optimization"
    },
    {
      title: "Backend Engineering",
      icon: "assets/icons/backend.svg",
      description: "High-performance APIs using FastAPI and Golang, RESTful services, microservices architecture, and database optimization"
    },
    {
      title: "CI/CD & DevOps",
      icon: "assets/icons/devops.svg",
      description: "Automated deployment pipelines, containerization with Docker, version control with Git, and continuous integration workflows"
    }
  ]

  social_media = [
    {
      name: "Twitter",
      site_url: "https://twitter.com/mazharulsabbir",
      image_url: "assets/social/twitter-outline.svg"
    },
    {
      name: "Facebook",
      site_url: "https://facebook.com/mazharulsabbir",
      image_url: "assets/social/facebook-outline.svg"
    }, {
      name: "Github",
      site_url: "https://github.com/mazharulsabbir",
      image_url: "assets/social/github-outline.svg"
    }, {
      name: "LinkedIn",
      site_url: "https://www.linkedin.com/in/mazharulsabbir",
      image_url: "assets/social/linkedin-outline.svg"
    }
  ]

  projects = [
    {
      name: "Odoo ERP Custom Modules",
      type: "Enterprise | ERP Development",
      desc: "Developed custom Odoo modules for inventory management, sales automation, and business intelligence dashboards",
      technologies: ["Odoo", "Python", "PostgreSQL", "OWL JS"],
      img: "assets/project/odoo-erp.png"
    },
    {
      name: "Flutter Mobile Application",
      type: "Mobile App | Cross-Platform",
      desc: "Cross-platform mobile application with real-time data synchronization, offline support, and push notifications",
      technologies: ["Flutter", "Dart", "Firebase", "REST API"],
      img: "assets/project/flutter-app.png"
    },
    {
      name: "FastAPI Backend Service",
      type: "Backend | API Development",
      desc: "High-performance RESTful API service with authentication, rate limiting, and comprehensive documentation",
      technologies: ["FastAPI", "Python", "PostgreSQL", "Docker"],
      img: "assets/project/fastapi.png"
    },
    {
      name: "CI/CD Pipeline Implementation",
      type: "DevOps | Automation",
      desc: "Automated deployment pipeline with testing, building, and deployment stages for multiple environments",
      technologies: ["GitHub Actions", "Docker", "AWS", "Bash"],
      img: "assets/project/cicd.png"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
