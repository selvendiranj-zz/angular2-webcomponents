import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Component({
    moduleId: module.id,
    selector: 'toh-nav',
    templateUrl: '../views/nav.component.html',
    styleUrls: ['../styles/nav.component.css'],
})

export class NavComponent implements OnInit
{
    menuItems: MenuItem[];

    constructor() { }

    ngOnInit()
    {
        this.menuItems = [
            { name: 'Dashboard', uri: '/heroes/dashboard' },
            { name: 'Heroes', uri: '/heroes' },
            { name: 'Villains', uri: '/villains' },
            { name: 'Other', uri: '/other' },
            { name: 'alert', uri: '/alert' },
            { name: 'accordion', uri: '/accordion' },
            { name: 'button', uri: '/button' },
            { name: 'carousel', uri: '/carousel' },
            { name: 'collapse', uri: '/collapse' },
            { name: 'dropdown', uri: '/dropdown' },
            { name: 'modal', uri: '/modal' },
            { name: 'progressbar', uri: '/progressbar' },
            { name: 'rating', uri: '/rating' },
            { name: 'tabs', uri: '/tabs' },
            { name: 'tooltip', uri: '/tooltip' },
            { name: 'typeahead', uri: '/typeahead' },
            { name: 'datepicker', uri: '/datepicker' },
            { name: 'timepicker', uri: '/timepicker' },
            { name: 'pagination', uri: '/pagination' },
            { name: 'grid', uri: '/grid' },
            { name: 'fileupload', uri: '/fileupload' },
            { name: 'googlemaps', uri: '/googlemaps' }
        ];
    }
}
