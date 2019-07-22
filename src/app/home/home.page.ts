import { Component } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedLanguage:string;
 
  constructor(private translateConfigService: TranslateConfigService){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
 
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
