import { Component } from '@angular/core';
import { HeaderComponent } from '../../../core/component/header/header.component';
import { JobCardComponent } from '../../../core/component/job-card/job-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, JobCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
