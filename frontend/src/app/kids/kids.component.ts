import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Kid} from "./kid.model";
import {KidsApiService} from "./kids-api.service";

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.sass']
})
export class KidsComponent implements OnInit {
  kid: Kid;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private kidsApi: KidsApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getKid();
    });
    this.getKid();
  }

  getKid(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.kidsApi.getKid(id).subscribe(kid => this.kid = kid);
    } else {
      this.kid = new Kid({});
    }
  }

  save(): void {
    if (this.kid.id) {
      this.kidsApi.saveKid(this.kid).subscribe();
    } else {
      this.kidsApi.addKid(this.kid).subscribe();
    }
  }
}
