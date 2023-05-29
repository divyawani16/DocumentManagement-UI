import { Component, OnInit } from '@angular/core';
import { TenantPropertyService } from './tenant-property.service';
import { Document } from './tenant-property.model';
@Component({
  selector: 'app-tenant-property',
  templateUrl: './tenant-property.component.html',
  styleUrls: ['./tenant-property.component.scss']
})
export class TenantPropertyComponent implements OnInit {
  Propertylist: Document[] | undefined;
  constructor(
    private TenantPropertyService:TenantPropertyService
  ) { }

  ngOnInit(): void {
    try{
      this.TenantPropertyService.getProperty()
      .subscribe(property => this.Propertylist = property);
      console.log('Propertylist:', this.Propertylist);
    }catch(err){
      console.log(err)
    }
  }

}
