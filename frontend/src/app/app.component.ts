import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {KidsApiService} from './kids/kids-api.service';
import {Kid} from './kids/kid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  kidsListSubs: Subscription;
  kids: Kid[];

  constructor(
    private kidsApi: KidsApiService
  ) {}

  ngOnInit() {
    this.kidsListSubs = this.kidsApi
      .getKids()
      .subscribe(res => {
          this.kids = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.kidsListSubs.unsubscribe();
  }
}
