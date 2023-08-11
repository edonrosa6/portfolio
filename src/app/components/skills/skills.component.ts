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

interface ISkills {
  name: string;
  icon: IconProp;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
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
  skills: ISkills[] = [];


  constructor() {
    this.skills = [
      {
        icon: this.faCheck,
        name: "HTML5"
      },
      {
        icon: this.faCheck,
        name: "CSS3"
      },
      {
        icon: this.faCheck,
        name: "Javascript"
      },
      {
        icon: this.faCheck,
        name: "Typescript"
      },
      {
        icon: this.faCheck,
        name: "Angular"
      },
      {
        icon: this.faCheck,
        name: "Tailwind"
      },
      {
        icon: this.faCheck,
        name: "Bootstrap"
      },
      {
        icon: this.faCheck,
        name: "React"
      }
    ]
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
