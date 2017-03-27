import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComModule } from '../com/com.module';

// Demo Component Bootstrap- Start
import { AccordionDemoComponent } from './accordion/accordion-demo.component';
import { AlertDemoComponent } from './alert/alert-demo.component';
import { ButtonDemoComponent } from './buttons/button-demo.component';
import { CarouselDemoComponent } from './carousel/carousel-demo.component';
import { CollapseDemoComponent } from './collapse/collapse-demo.component';
import { DropdownDemoComponent } from './dropdown/dropdown-demo.component';
import { ModalDemoComponent } from './modal/modal-demo.component';
import { ProgressbarDemoComponent } from './progressbar/progressbar-demo.component';
import { RatingDemoComponent } from './rating/rating-demo.component';
import { TabsDemoComponent } from './tabs/tabs-demo.component';
import { TooltipDemoComponent } from './tooltip/tooltip-demo.component';
import { TypeaheadDemoComponent } from './typeahead/typeahead-demo.component';
import { PaginationDemoComponent } from './pagination/pagination-demo.component';
import { DatepickerDemoComponent } from './datepicker/datepicker-demo.component';
import { TimepickerDemoComponent } from './timepicker/timepicker-demo.component';
// Demo Component Bootstrap- End

// Demo Other Modules  Components - Start
import { GridDemoComponent } from './grid/grid-demo.component'; // grid system demo
import { GoogleMapsDemoComponent } from './googlemaps/googlemaps-demo.component'; // google maps demo
import { FileUploadDemoComponent } from './fileupload/fileupload-demo.component'; // google maps demo
// Demo Other Modules  Components - End

import { UPLOAD_DIRECTIVES } from '../com/fileupload/ng2-uploader';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComModule,
    ],
    declarations: [
        UPLOAD_DIRECTIVES,
        AccordionDemoComponent,
        AlertDemoComponent,
        ButtonDemoComponent,
        CarouselDemoComponent,
        CollapseDemoComponent,
        DropdownDemoComponent,
        ModalDemoComponent,
        ProgressbarDemoComponent,
        RatingDemoComponent,
        TabsDemoComponent,
        TooltipDemoComponent,
        TypeaheadDemoComponent,
        DatepickerDemoComponent,
        TimepickerDemoComponent,
        PaginationDemoComponent,
        GridDemoComponent,
        GoogleMapsDemoComponent,
        FileUploadDemoComponent
    ]
})

export class ComImplModule
{

}
