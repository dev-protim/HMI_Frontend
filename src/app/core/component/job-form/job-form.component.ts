import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiCallService } from '../../services/api/api-call.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss',
  providers: [ApiCallService]
})
export class JobFormComponent {

  subs = new SubSink();
  myForm = this.fb.group({
    title: [''],
    location: ['']
  })
  @Output() jobResponse = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
    private apiService: ApiCallService
  ) {

  }

  submit(): void {
    let data = {
      title: this.myForm.value.title,
      location: this.myForm.value.location,
      page_size: 10,
      page: 1
    }
    console.log(data, "forms data")
    this.subs.sink = this.apiService.getJobs(data).subscribe((res: any) => {
      console.log(res, 'res');
      this.jobResponse.emit(res);
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
