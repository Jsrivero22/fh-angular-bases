import { Injectable } from '@angular/core';

/* import third party packages  */
import { v4 as uuid } from 'uuid';

console.log( uuid() );

import { Character } from '../interface/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [
        { id: uuid(), name: 'Goku', power: 10000 },
        { id: uuid(), name: 'Vegeta', power: 9000 },
        { id: uuid(), name: 'Trunks', power: 8000 },
        { id: uuid(), name: 'Gohan', power: 7000 },
        { id: uuid(), name: 'Piccolo', power: 6000 }
    ];

    addCharacter( character: Character ): void {

        const newCharacter: Character = { ...character, id: uuid() };
        this.characters.push( newCharacter );
    }

    deletedCharacterById( id: string ): void {
        this.characters = this.characters.filter( character => character.id !== id );
    }

}
