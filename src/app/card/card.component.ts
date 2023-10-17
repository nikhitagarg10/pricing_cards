import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// INTERFACES for card data
interface Feature {
  name: string;
  included: boolean;
}
interface Plan {
  type?: string;
  price?: number;
  features?: Array<Feature>;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public plan?: Plan;

  // Font Awesome Icons
  faCheck: IconDefinition = faCheck;
  faTimes: IconDefinition = faTimes;
}