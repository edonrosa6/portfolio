import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems: any[] = [
    {
      name: "Home",
      url: "#home"
    },
    {
      name: "Sobre mí",
      url: "#aboutme"
    },
    {
      name: "Habilidades",
      url: "#skills"
    },
    {
      name: "Proyectos",
      url: "#projects"
    },
    {
      name: "Experiencia",
      url: "#xp"
    },
    {
      name: "Contacto",
      url: "#contact"
    }
  ]
}
