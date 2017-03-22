import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoggerService } from '../services/logger.service';
import { SpinnerState, SpinnerService } from '../services/spinner.service';

@Component({
    moduleId: module.id,
    selector: 'toh-spinner',
    templateUrl: '../views/spinner.component.html',
    styleUrls: ['../styles/spinner.component.css']
})

export class SpinnerComponent implements OnDestroy, OnInit
{
    visible = false;
    private spinnerStateChanged: Subscription;

    constructor(
        private loggerService: LoggerService,
        private spinnerService: SpinnerService
    ) { }

    ngOnInit()
    {
        console.log(this.visible);
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe((state: SpinnerState) =>
            {
                this.visible = state.show;
                this.loggerService.log(`visible=${this.visible}`);
            });
    }

    ngOnDestroy()
    {
        this.spinnerStateChanged.unsubscribe();
    }
}
