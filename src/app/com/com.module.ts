import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap Modules - Start
import { AlertModule } from './alert/alert.module';
import { AccordionModule } from './accordion/accordion.module';
import { ButtonsModule } from './buttons/buttons.module';
import { CarouselModule } from './carousel/carousel.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { ModalModule } from './modal/modal.module';
import { ProgressbarModule } from './progressbar/progressbar.module';
import { RatingModule } from './rating/rating.module';
import { TabsModule } from './tabs/tabs.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { TypeaheadModule } from './typeahead/typeahead.module';
import { CollapseModule } from './collapse/collapse.module';
import { PaginationModule } from './pagination/pagination.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { TimepickerModule } from './timepicker/timepicker.module';
// Bootstrap Modules - End

// Other Modules - Start
import { NgGridModule } from './grid/modules/NgGrid.module'; // grid system
import { AgmCoreModule } from './googlemaps/core'; // google maps
// Other Modules - End

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AlertModule,
        AccordionModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DropdownModule,
        ModalModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
        DatepickerModule,
        TimepickerModule,
        PaginationModule,
        NgGridModule, // grid
        AgmCoreModule.forRoot({
            apiKey: 'Your - > Google-MAPS-API-KEY - here' // google maps api key
        }) // google maps
    ],
    declarations: [

    ],
    exports: [
        AlertModule,
        AccordionModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        DropdownModule,
        ModalModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
        DatepickerModule,
        TimepickerModule,
        PaginationModule,
        NgGridModule,
        AgmCoreModule
    ]
})

export class ComModule
{

}
