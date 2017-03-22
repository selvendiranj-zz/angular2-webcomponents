import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/heroes/dashboard', pathMatch: 'full' },
    { path: 'heroes/dashboard', component: DashboardComponent },
    { path: 'heroes/detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class HeroesRoutingModule { }
