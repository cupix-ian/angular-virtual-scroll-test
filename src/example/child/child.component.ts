import {
  Input,
  Output,
  EventEmitter,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';
import { ChildChildComponent } from '../child-child/child-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ChildChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() item: any;
}
