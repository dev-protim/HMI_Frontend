import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

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
