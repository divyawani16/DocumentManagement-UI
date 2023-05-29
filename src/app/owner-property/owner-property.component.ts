import { Component, OnInit } from '@angular/core';
import { OwnerPropertyService } from './owner-property.service';
import { Document } from './owner-property.model';

@Component({
  selector: 'app-owner-property',
  templateUrl: './owner-property.component.html',
  styleUrls: ['./owner-property.component.scss']
})
export class OwnerPropertyComponent implements OnInit {
  Propertylist: Document[] | undefined;
  constructor(
    private OwnerPropertyService:OwnerPropertyService
  ) { }

  ngOnInit(): void {
    try{
      this.OwnerPropertyService.getProperty()
      .subscribe(property => this.Propertylist = property);
      console.log('Propertylist:', this.Propertylist);
    }catch(err){
      console.log(err)
    }
  }

}
