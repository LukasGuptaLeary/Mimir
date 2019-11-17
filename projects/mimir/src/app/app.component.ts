import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {isPlatformBrowser} from '@angular/common';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mimir';

  constructor(
    private swUpdate: SwUpdate,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.swUpdate.isEnabled) {

        this.swUpdate.available.subscribe(() => {

          if (confirm('New version available. Load New Version?')) {

            window.location.reload();
          }
        });
      }
    }
  }
}
