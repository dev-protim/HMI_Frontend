import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, JobFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLanguageClicked: boolean = false;
  activeLanguage: string = "English";
  languageList: any = [
    {
      name: "English",
      isActive: true
    },
    {
      name: "German",
      isActive: false
    },
    {
      name: "Bengali",
      isActive: false
    }
  ]

  ngOnInit(): void {}

  clickLanguageSwitcher(): void {
    this.isLanguageClicked = !this.isLanguageClicked;
  }
}
