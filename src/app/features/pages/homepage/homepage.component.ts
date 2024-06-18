import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../core/component/header/header.component';
import { JobCardComponent } from '../../../core/component/job-card/job-card.component';
import { ApiCallService } from '../../../core/services/api/api-call.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SubSink } from 'subsink';
import { Job } from '../../../core/models/job'

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, JobCardComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  providers: [ApiCallService]
})
export class HomepageComponent implements OnInit {

  subs = new SubSink();
  latestJobs$: Job[] = [];
  latestJob: any;
  allJobs: any[] = [];
  totalJobs: any;
  jobType: string = "Latest ";

  constructor(public apiService: ApiCallService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getData();
      
  }

  getData(): any {
    // this.latestJobs$ = this.apiService.recentJobs();
    this.subs.sink = this.apiService.recentJobs().subscribe((response: any) => {
      this.latestJob = response;
      this.totalJobs = this.latestJob.total_jobs;
      this.allJobs = this.latestJob.jobs;
      // console.log(response);
    });
  }

  getSearchResult(data: any): void {
    this.totalJobs = data.total_jobs;
    this.allJobs = data.jobs;
    this.jobType = "All ";
    console.log(data, 'data')
  }

  ngOnDestroy(): void {
    // this.subs.unsubscribe();
  }
}
