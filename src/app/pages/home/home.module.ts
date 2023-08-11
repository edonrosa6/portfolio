import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { HomeIndexComponent } from "./home-index/home-index.component";

const routes: Route[] = [{
    path: '',
    component: HomeIndexComponent
}]

@NgModule({
    declarations: [
        HomeIndexComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        ComponentsModule
    ]
})

export class HomeModule { }