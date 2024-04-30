import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    @Input()
    public characterList: Character[] = []

    onDeletedCharacterById( id: string ): void {

        this.onDeleteId.emit( id );
    }

}
