import { Component } from '@angular/core';
import { faSignInAlt, faEnvelope, faGlasses, faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  signInIcon = faSignInAlt;
  mailIcon = faEnvelope;
  accessabilityIcon = faGlasses;
  mapIcon = faMap;
}
