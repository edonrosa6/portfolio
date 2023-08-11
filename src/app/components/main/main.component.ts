import { Component } from '@angular/core';
import { faCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface IProjectsDetails {
  img: string;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
}

interface ISkills {
  name: string;
  icon: IconProp;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  openTab = 1;

  faArrowUp = faArrowUp;
  faEnvelope = faEnvelope;
  faCircle = faCircle;
  faJs = faJs;
  faCode = faHtml5;
  faAngular = faAngular;
  faDownload = faDownload;
  faCoffee = faMugHot;
  faGithub = faGithub;
  faLink = faLink;
  faCheck = faCheckCircle;
  name = "Angular";

  projects: IProjectsDetails[] = [];
  skills: ISkills[] = [];

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
      }
    ];
  }


}
