import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  idLog = 'HomeComponent';
  superherosById: Array<any> = [];
  superherosBySkill: Array<any> = [];
  totalHeros: Array<any> = [];
  ids: Array<any> = [1];
  canFly: Array<any> = [
    { text: 'Si', value: true },
    { text: 'No', value: false }
  ];
  filter = {
    id: 1,
    fly: true
  };
  flags = {
    loadId: false,
    selectedId: false,
    loadFly: false,
    selectedFly: false,
    loadTotal: false,
    selectedTotal: true
  };

  constructor(private api: ApiService, private logger: LoggerService) { }

  ngOnInit(): void {
    this.getAllSuperheros();
    this.filterSuperheroById();
    this.filterSuperherosFly();
  }

  getAllSuperheros(){
    this.api.get('v1/test/superheroes').subscribe(res => {
      if (res && res.data && res.data.length > 0) {
        this.ids = res.data.map(d => d.id);
      }
      this.logger.info(this.idLog, 'getAllSuperheros', {info: 'Success', response: res});
    }, err => {
      this.logger.error(this.idLog, 'getAllSuperheros', {info: 'Error', error: err});
    });
  }

  filterSuperheroById(){
    this.flags.selectedId = true;
    this.flags.loadId = true;
    this.api.get(`v1/test/superheroes/${this.filter.id}`).subscribe(res => {
        this.flags.loadId = false;
        if (res && res.data){
          this.superherosById = [res.data];
          this.totalHeros = this.superherosById.concat(this.superherosBySkill);
        }
        this.logger.info(this.idLog, 'filterSuperheroById', {info: 'Success', response: res});
      });
  }

  filterSuperherosFly(){
    this.flags.loadFly = true;
    this.flags.selectedFly = true;
    this.api.get(`v1/test/superheroes/`).subscribe(res => {
      const isTrue = (this.filter.fly.toString() == 'true');
      if (res && res.data && res.data.length > 0) {
        this.superherosBySkill = res.data.filter(s => s.puedeVolar == isTrue);
        this.totalHeros = this.superherosById.concat(this.superherosBySkill);
      }
      this.flags.loadFly = false;
      this.logger.info(this.idLog, 'getAllSuperheros', {info: 'Success', response: res, totalHeros: this.totalHeros});
    }, err => {
      this.flags.loadFly = false;
      this.logger.error(this.idLog, 'getAllSuperheros', {info: 'Error', error: err});
    });
  }
}
