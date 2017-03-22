import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../models/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: '../views/hero-detail.component.html',
    styleUrls: ['../styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit
{
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void
    {
        this.route.params
            .switchMap((params: Params) =>
            {
                return this.heroService.getHero(+params['id']);
            })
            .subscribe((hero: Hero) =>
            {
                this.hero = hero;
            });
    }

    goBack(): void
    {
        this.location.back();
    }

    save(): void
    {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}
