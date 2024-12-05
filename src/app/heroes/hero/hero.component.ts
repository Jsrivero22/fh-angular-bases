import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    standalone: false,

    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
})
export class HeroComponent {
    public name: string = 'ironman';
    public age: number = 45;
    public formReset = false;

    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getHeroDescription(): string {
        return `${ this.name } - ${ this.age }`;
    }

    changeHero(): void {
        this.name = 'spiderman';
        this.formReset = true;
    }

    changeAge(): void {
        this.age = 25;
        this.formReset = true;
    }

    resetForm(): void {
        this.name = 'ironman';
        this.age = 45;
        this.formReset = false;
    }
}
