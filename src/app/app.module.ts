import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComImplModule } from './com-impl/com-impl.module';

import { AppComponent } from './app.component';

// Routing Modules - Start
import { AppRoutingModule } from './app-routing.module';
// Routing Modules - End

// Core and Heroes Modules - Start
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
// Core and Heroes Modules - End

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CoreModule,
        ComImplModule,
        HeroesModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule
{

}
