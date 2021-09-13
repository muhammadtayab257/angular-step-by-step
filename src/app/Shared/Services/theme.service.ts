import { Injectable } from '@angular/core';
import { Theme, dark, light } from '../Themes/theme';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() { }

  private active: Theme = dark;
  private availableThemes: Theme[] = [light, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      console.log(property);

      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
