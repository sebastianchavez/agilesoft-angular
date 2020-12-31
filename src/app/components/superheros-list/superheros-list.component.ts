import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-superheros-list',
  templateUrl: './superheros-list.component.html',
  styleUrls: ['./superheros-list.component.scss']
})
export class SuperherosListComponent implements OnInit {

  @Input() superheros: Array<any> = [];
  @Input() load = false;
  @Input() selected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
