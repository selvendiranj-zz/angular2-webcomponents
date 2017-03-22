import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDemoComponent } from './com-impl/alert/alert-demo.component';
import { AccordionDemoComponent } from './com-impl/accordion/accordion-demo.component';
import { ButtonDemoComponent } from './com-impl/buttons/button-demo.component';
import { CarouselDemoComponent } from './com-impl/carousel/carousel-demo.component';
import { CollapseDemoComponent } from './com-impl/collapse/collapse-demo.component';
import { DropdownDemoComponent } from './com-impl/dropdown/dropdown-demo.component';
import { ModalDemoComponent } from './com-impl/modal/modal-demo.component';
import { ProgressbarDemoComponent } from './com-impl/progressbar/progressbar-demo.component';
import { RatingDemoComponent } from './com-impl/rating/rating-demo.component';
import { TabsDemoComponent } from './com-impl/tabs/tabs-demo.component';
import { TooltipDemoComponent } from './com-impl/tooltip/tooltip-demo.component';
import { TypeaheadDemoComponent } from './com-impl/typeahead/typeahead-demo.component';
import { DatepickerDemoComponent } from './com-impl/datepicker/datepicker-demo.component';
import { TimepickerDemoComponent } from './com-impl/timepicker/timepicker-demo.component';
import { PaginationDemoComponent } from './com-impl/pagination/pagination-demo.component';
import { GridDemoComponent } from './com-impl/grid/grid-demo.component';
import { GoogleMapsDemoComponent } from './com-impl/googlemaps/googlemaps-demo.component';
import { FileUploadDemoComponent } from './com-impl/fileupload/fileupload-demo.component';

const routes: Routes = [
  { path: '', component: AlertDemoComponent },
  { path: 'alert', component: AlertDemoComponent },
  { path: 'accordion', component: AccordionDemoComponent },
  { path: 'button', component: ButtonDemoComponent },
  { path: 'carousel', component: CarouselDemoComponent },
  { path: 'collapse', component: CollapseDemoComponent },
  { path: 'dropdown', component: DropdownDemoComponent },
  { path: 'modal', component: ModalDemoComponent },
  { path: 'progressbar', component: ProgressbarDemoComponent },
  { path: 'rating', component: RatingDemoComponent },
  { path: 'tabs', component: TabsDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'typeahead', component: TypeaheadDemoComponent },
  { path: 'datepicker', component: DatepickerDemoComponent },
  { path: 'timepicker', component: TimepickerDemoComponent },
  { path: 'pagination', component: PaginationDemoComponent },
  { path: 'grid', component: GridDemoComponent },
  { path: 'googlemaps', component: GoogleMapsDemoComponent },
  { path: 'fileupload', component: FileUploadDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule
{

}
