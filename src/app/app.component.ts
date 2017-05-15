import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(
    public translate: TranslateService
  ){};

  ngOnInit() {
    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("Browser Language>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang: 'zh');
  }

}
