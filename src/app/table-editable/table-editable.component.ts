import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-table-editable',
  templateUrl: './table-editable.component.html',
  styleUrls: ['./table-editable.component.scss']
})

export class TableEditableComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  editField: string;
  searchText: string = '';
  previous: string;

  orders: any = [];

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  headElements = ['ID', 'Name', 'Age', 'Company', 'Country', 'City'];
  constructor(private ordersServices: OrdersService) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    // this.personList.push({ id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' });
    // this.personList.push({ id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' });
    // this.personList.push({ id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt' });
    // this.personList.push({ id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' });
    // this.personList.push({ id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' });
    this.ordersServices.fetchOrders();
    this.ordersServices.getOrders().subscribe( data => {
      this.orders = [...data]
      this.mdbTable.setDataSource(this.orders);
      this.orders = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
    });

  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.ordersServices.editOrder(id, property, editField);
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.orders[id]);
    this.orders.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.orders.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.orders = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.orders = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }
}
