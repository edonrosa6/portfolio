import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface IProjectsDetails {
  img: string;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: IProjectsDetails[] = [];
  faGithub = faGithub;
  faLink = faLink;
  faCheck = faCheckCircle;

  constructor() {
    const baseAddressGithub: string = "https://github.com/edonrosa6/";

    this.projects = [
      {
        img: "assets/app-clima.webp",
        url: "https://edson-clima-app.netlify.app/",
        title: "Clima APP",
        description: "Aplicación web que te da el clima por tu ciudad hecha en React.",
        githubUrl: `${baseAddressGithub}clima-app`
      },
      {
        img: "assets/website-modern.webp",
        url: "https://edonrosa6.github.io/website-modern/",
        title: "Website Modern",
        description: "Un diseño de una página web con un diseño único y moderno.",
        githubUrl: `${baseAddressGithub}website-modern`
      },
      {
        img: "assets/sistema-ventas.png",
        url: "http://dev.casas-omni.com/",
        title: "Sistema de Gestión de Ventas",
        description: "Sistema web para gestionar las ventas de una empresa.",
      },
      {
        img: "assets/mediapp.png",
        url: "https://medi-app.vercel.app",
        title: "Social Media App",
        description: "Red social realizada en React con Next Js 13",
        githubUrl: `${baseAddressGithub}mediAPP`
      },
      {
        img: "assets/techwebsite.png",
        url: "https://tech-edson-rosales.netlify.app/",
        title: "Tech Website",
        description: "Sitio web de venta de periféricos para PC",
        githubUrl: `${baseAddressGithub}tech`
      }
    ];
  }
}
