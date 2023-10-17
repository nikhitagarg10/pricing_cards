import { Component } from '@angular/core';
import StaticData from '../assets/data.json';

interface Feature {
  name: string;
  included: boolean;
}
interface Plan {
  type: string;
  price: number;
  features?: Array<Feature>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* Static Data stored in cardDetails */
  cardDetails: Plan[] = StaticData;

  /* Util Function */
  public sayHeyJude = (): void => {
    // console.log('hey jude');
    console.log(this.cardDetails);
  };
}
