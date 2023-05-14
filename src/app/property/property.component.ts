import { Component, OnInit } from '@angular/core';
import { Document } from './property.model';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  Propertylist: Document[] | undefined;

  constructor(private PropertyService : PropertyService) { }

  ngOnInit() {
    try{
      this.PropertyService.getProperty()
      .subscribe(property => this.Propertylist = property);
    }catch(err){
      console.log(err)
    }
  }
  }
