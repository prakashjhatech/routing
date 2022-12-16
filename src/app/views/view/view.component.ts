import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

stats=[
  {value:22,label:'# of users'},
  {value:900,label:'revenue'},
  {value:50,label:'reviews '},
]


  constructor() { }

  ngOnInit(): void {
  }

}
