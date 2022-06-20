import { Component, OnInit } from '@angular/core';
import { HeaderModel, IModel } from 'src/app/core/models';
import { TableConfigService } from './table.config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData: Array<IModel> | undefined;
  tableHeaders: Array<HeaderModel> = [{
    name: 'Product Name',
    state: 'ASC',
    key: "name"
  },
  {
    name: 'Price',
    state: 'ASC',
    key: "price"
  }, {
    name: 'Category',
    state: 'ASC',
    key: "category"
  }];
  constructor(public coreService: TableConfigService) { }

  ngOnInit(): void {
    this.coreService.getData().subscribe((data: any) => {
      this.tableData = data?.cookies;
    });

  }



}
