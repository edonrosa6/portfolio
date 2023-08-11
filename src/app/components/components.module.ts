import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    XpComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class ComponentsModule { }
