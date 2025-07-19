import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule]
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  showThemeButton = false;
  showScrollTop = false;
  private scrollTimer: any;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 200;

    this.showThemeButton = true;

    if (this.scrollTimer) {
      clearTimeout(this.scrollTimer);
    }

    // Hide button after 2.5s of no scroll
    this.scrollTimer = setTimeout(() => {
      this.showThemeButton = false;
    }, 2500);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
