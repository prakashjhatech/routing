import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dataInParentwhichIsCollectionHome:any=
  [
    {name:'james',age:'24',job:'Designer'},
    {name:'khali',age:'46',job:'Fighter'},
    {name:'prakash',age:'26',job:'googleCEO'}
  ];

  headerCollection=[
    {key:'name',label:'Name'},
    {key:'job',label:'Job'},
    {key:'age',label:'Age'}
  ];

}
