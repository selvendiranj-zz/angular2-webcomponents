import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './services/logger.service';
import { SpinnerService } from './services/spinner.service';
import { NavComponent } from './components/nav.component';
import { SpinnerComponent } from './components/spinner.component';
import { throwIfAlreadyLoaded } from './shared/module-import-guard';

@NgModule({
    imports: [
        CommonModule, // we use ngFor
        RouterModule
    ],
    exports: [
        NavComponent,
        SpinnerComponent
    ],
    declarations: [
        NavComponent,
        SpinnerComponent
    ],
    providers: [
        LoggerService,
        SpinnerService
    ]
})

export class CoreModule
{
    constructor( @Optional() @SkipSelf() parentModule: CoreModule)
    {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
