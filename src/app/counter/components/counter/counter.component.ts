import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <div style="text-align: center;">
            <h3 style="font-size: 40px; margin: 20px 0;">{{ counter }}</h3>
            <button
                style="padding: 5px 30px; background-color:brown; border-radius: 10px; border: 0; color: white; font-weight:bold; font-size: 15px; cursor: pointer;"
                (click)="decreaseBy(1)"
            >
                -1
            </button>
            <button
                style="padding: 5px 30px; background-color:rgb(4, 4, 112); border-radius: 10px; border: 0; margin-left: 10px; color: white; font-weight:bold; font-size: 15px; cursor: pointer;"
                (click)="resetCounter()"
            >
                Reset
            </button>
            <button
                style="padding: 5px 30px; background-color:darkgreen; border-radius: 10px; border: 0; margin-left: 10px; color: white; font-weight:bold; font-size: 15px; cursor: pointer;"
                (click)="increaseBy(1)"
            >
                +1
            </button>
        </div>
    `,
    standalone: false,
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
        this.counter += value;
    }

    decreaseBy(value: number): void {
        if (this.counter === 0) return;
        this.counter -= value;
    }

    resetCounter(): void {
        this.counter = 10;
    }
}
