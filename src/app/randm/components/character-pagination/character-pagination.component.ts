import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Info } from '../../services/dtos/character.dto';

@Component({
  selector: 'app-character-pagination',
  templateUrl: './character-pagination.component.html',
  styleUrls: ['./character-pagination.component.css'],
})
export class CharacterPaginationComponent {
  @Input() infoPagination!: Info;
  @Output() pageEvent = new EventEmitter<string>();

  emmitPageEvent(page: string) {
    this.pageEvent.emit(page);
  }

  nextPage() {
    this.emmitPageEvent(this.infoPagination.next);
  }

  prevPage() {
    this.emmitPageEvent(this.infoPagination.prev);
  }
}
