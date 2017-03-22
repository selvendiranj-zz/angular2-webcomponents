import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextComponent } from './components/filter-text.component';
import { FilterTextService } from './services/filter-text.service';
import { InitCapsPipe } from './pipes/init-caps.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        FilterTextComponent,
        InitCapsPipe
    ],
    providers:
    [
        FilterTextService
    ],
    exports: [
        CommonModule,
        FormsModule,
        FilterTextComponent,
        InitCapsPipe
    ]
})

export class SharedModule { }
