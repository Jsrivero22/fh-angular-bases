import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>{{ counter }}</p>

        <button (click)="increaseBy( 1 )">+1</button>
        <button (click)="resetCounter( 10 )" >Reset</button>
        <button (click)="decreaseBy( 1 )" >-1</button>
    `
})

export class CounterComponent {

    public counter:number = 10;

    constructor() { }

    increaseBy( value:number ):void {
        this.counter += value;
    }

    decreaseBy( value:number ):void {

        if(this.counter <= 0 || (this.counter - value) < 0) return;

        this.counter -= value;
    }

    resetCounter( value:number ):void {
        this.counter = value;
    }

}
