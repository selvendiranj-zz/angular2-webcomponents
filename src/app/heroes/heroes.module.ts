import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroFilterComponent } from './components/hero-filter.component';
import { HeroService } from './services/hero.service';
import { HeroSearchComponent } from './components/hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HeroesRoutingModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroFilterComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [DashboardComponent]
})

export class HeroesModule { }
