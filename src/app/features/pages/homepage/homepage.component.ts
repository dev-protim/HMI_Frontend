import { Component } from '@angular/core';
import { JobFormComponent } from '../../../core/component/job-form/job-form.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [JobFormComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
