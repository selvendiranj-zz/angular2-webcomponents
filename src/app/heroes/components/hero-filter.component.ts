import { Component, OnInit } from '@angular/core';

import { FilterTextService } from '../../shared/services/filter-text.service';
import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-filter',
    templateUrl: '../views/hero-filter.component.html'
})

export class HeroFilterComponent implements OnInit
{
    heroes: Hero[];
    filteredHeroes: Hero[];

    constructor(
        private filterService: FilterTextService,
        private heroService: HeroService
    ) { }

    ngOnInit(): void
    {
        this.getHeroes();
    }

    getHeroes(): void
    {
        this.heroService.getHeroes().then((heroes) =>
        {
            this.filteredHeroes = this.heroes = heroes;
        });
    }

    filterChanged(searchText: string)
    {
        this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
    }
}
