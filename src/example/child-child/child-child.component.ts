import {
  Input,
  Output,
  EventEmitter,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-child-child',
  standalone: true,
  imports: [],
  templateUrl: './child-child.component.html',
  styleUrl: './child-child.component.scss',
})
export class ChildChildComponent {
  @Input() item: any;

  // @Input() selected: string = '';

  // @Input() text: string = '';

  get text() {
    return this.item.text;
  }

  @Output() clickedEvent = new EventEmitter();

  @HostBinding('class.highlight')
  get isHighlighted() {
    return this.item.selected;
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.clickedEvent.emit();
  }
}
