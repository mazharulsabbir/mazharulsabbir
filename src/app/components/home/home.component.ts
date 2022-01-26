import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Mazharul Sabbir';
  bio: string = "I am a highly organized and detail-oriented engineering student from the Daffodil\n" +
    "International University, Dhaka interested in the Mobile Apps Development field where I can\n" +
    "build applications for people's needs. Highly motivated Mobile Application Developer with\n" +
    "over 3 plus years of experience in Android and Flutter. Extensive knowledge and hands-on\n" +
    "experience working on Smartphone Applications.";

  about_me = "ABOUT ME"
  who_am_i = "WHO AM I"
  about_body = "Highly motivated Mobile Application Developer with over 3 plus years of experience in\n" +
    "Android and Flutter. Extensive knowledge and hands-on experience working on Smartphone\n" +
    "Applications. Proven ability to interface with customers, understand product requirements,\n" +
    "and design proof of concept prototypes. Experience with several APIs for Android\n" +
    "applications such as Google Maps, Google Places, Google Drive, Facebook, etc."

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
      name: "Rannaghor",
      type: "Personal Project | Web Design",
      desc: "Make your food delicious",
      img: "assets/project/rannaghor.png"
    },
    {
      name: "SnugVPN",
      type: "Personal Project | Web Design",
      desc: "VPN Service",
      img: "assets/project/snug_vpn.jpg"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
