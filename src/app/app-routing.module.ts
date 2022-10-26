import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from './componentes/paginas/main/main.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';

const routes: Routes =  [
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true , scrollPositionRestoration: 'enabled' }
    )],
    exports: [RouterModule],

})

export class AppRoutingModule { 

}