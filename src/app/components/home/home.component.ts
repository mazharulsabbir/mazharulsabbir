import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Md Mazharul Islam';
  subtitle = 'Software Engineer | Odoo ERP Specialist | SaaS Architect';
  bio: string = "Senior Software Engineer with 5+ years of experience specializing in Odoo ERP development, SaaS solutions, mobile applications, and backend engineering. Expert in building scalable enterprise solutions with Odoo + Golang microservices architecture, mobile apps, and high-performance APIs.";

  about_me = "ABOUT ME"
  who_am_i = "WHO AM I"
  about_body = "Senior Software Engineer currently working at Genweb2 Limited, specializing in Odoo ERP development, SaaS architecture, custom module creation, and business process automation. Expert in building scalable SaaS solutions using Odoo integrated with Golang microservices. Previously worked at Daffodil Computers Limited, where I led mobile app development initiatives, managed app releases, and developed Odoo-based dashboards using OWL JS. My expertise spans across Odoo ERP, SaaS architecture, Flutter, FastAPI, Golang microservices, mobile development (Android/iOS), CI/CD pipelines, and comprehensive code review and analysis. I'm passionate about solving complex problems, building efficient systems, and mentoring fellow developers."

  currentCompany = {
    name: "Genweb2 Limited",
    role: "Senior Software Engineer",
    duration: "2022 - Present",
    description: "Leading Odoo ERP development projects, SaaS solutions with Odoo + Golang microservices, custom module creation, API integrations, and business process automation"
  }

  contactInfo = {
    mobile: "+8801611594448",
    whatsapp: "+8801611594448",
    email: "mazharulsabbir2@gmail.com",
    fiverr: "https://www.fiverr.com/users/imazharulsabbir",
    website: "https://mazharulsabbir.com"
  }

  previousCompany = {
    name: "Daffodil Computers Limited",
    role: "Software Developer",
    duration: "2021 - 2022",
    description: "Mobile app development, app release management, Odoo API development, dashboard development using Odoo ERP and OWL JS"
  }

  skills = [
    { name: "Odoo ERP", level: 95, category: "ERP/SaaS" },
    { name: "SaaS Architecture", level: 90, category: "Architecture" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "Golang Microservices", level: 85, category: "Backend" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "FastAPI", level: 88, category: "Backend" },
    { name: "Android", level: 85, category: "Mobile" },
    { name: "CI/CD", level: 80, category: "DevOps" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "Docker", level: 78, category: "DevOps" },
    { name: "Angular", level: 75, category: "Frontend" },
    { name: "Microservices", level: 83, category: "Architecture" }
  ]

  expertiseAreas = [
    {
      title: "SaaS Architecture",
      icon: "assets/icons/saas.svg",
      description: "Building scalable SaaS solutions using Odoo ERP integrated with Golang microservices, multi-tenancy, API gateways, and cloud-native architecture"
    },
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
      name: "LinkedIn",
      site_url: "https://www.linkedin.com/in/mazharulsabbir",
      image_url: "assets/social/linkedin-outline.svg"
    },
    {
      name: "Github",
      site_url: "https://github.com/mazharulsabbir",
      image_url: "assets/social/github-outline.svg"
    },
    {
      name: "Fiverr",
      site_url: "https://www.fiverr.com/users/imazharulsabbir",
      image_url: "assets/social/fiverr-outline.svg"
    },
    {
      name: "Twitter",
      site_url: "https://twitter.com/mazharulsabbir",
      image_url: "assets/social/twitter-outline.svg"
    },
    {
      name: "Facebook",
      site_url: "https://facebook.com/mazharulsabbir",
      image_url: "assets/social/facebook-outline.svg"
    }
  ]

  projects = [
    {
      name: "SaaS Platform with Odoo + Golang",
      type: "SaaS | Microservices Architecture",
      desc: "Built scalable multi-tenant SaaS platform using Odoo ERP integrated with Golang microservices for high-performance operations",
      technologies: ["Odoo", "Golang", "Microservices", "PostgreSQL", "Docker", "Kubernetes"],
      img: "assets/project/saas-platform.png"
    },
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
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
