import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders = [];
  ordersSub;
  constructor(private http: HttpClient) {
    // Read more about subscriptions
    this.ordersSub = new BehaviorSubject<any[]>(this.orders);
  }
  fetchOrders() {
    this.http.get<any[]>('/api/orders').subscribe(data => {
      this.orders = [...data];
      this.ordersSub.next([...this.orders]);
    });
  }
  getOrders() {
    return this.ordersSub.asObservable();
  }

  editOrder(id: number, property: string, editField: any): Promise<void | String> {
    const putUrl = '/api/orders/' + id;
    const putOrder = this.orders.find(obj => {
      return obj.id === id;
    });
    putOrder[property] = editField;
    return this.http.put(putUrl, putOrder).toPromise().
    then(() => { console.log('works'); })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
