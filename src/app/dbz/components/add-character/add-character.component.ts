import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

const initialForm: Character = {
    id: '',
    name: '',
    power: 0,
};

@Component({
    selector: 'dbz-add-character',
    standalone: false,

    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter();

    character: Character = { ...initialForm };

    private resetForm = () => (this.character = { ...initialForm });

    emitCharacter(): void {
        if (this.character.name.length === 0) return;

        this.onNewCharacter.emit(this.character);
        this.resetForm();
    }
}
