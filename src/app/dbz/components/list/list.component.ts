import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'dbz-list',
    standalone: false,

    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {
    @Output()
    // onDelete: EventEmitter<number> = new EventEmitter();
    onDelete = new EventEmitter<Character['id']>();

    @Input()
    public characterList: Character[] = [
        { id: uuid(), name: 'Trunks', power: 10 },
    ];

    onDeleteCharacter(id: Character['id']): void {
        if (id === undefined || id === null) return;

        this.onDelete.emit(id);
    }
}
