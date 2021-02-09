import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  createUser(obj: any) {
    console.log(obj);
    return this._http.post('/api/public/users/createUser', {
      first: obj.Name,
      last: obj.lastName,
      email: obj.email,
    });
  }

  updateUser(obj: any, id: any) {
    console.log(obj);
    console.log(id);

    return this._http.put('/api/public/users/updateUser', {
      _id: id,
      first: obj.Name,
      last: obj.lastName,
      email: obj.email,
    });
  }

  getUser() {
    return this._http.get('/api/public/users/getUsers');
  }

  getSingleUser(item: string) {
    console.log(item);
    let params = new HttpParams().set('id', item);
    return this._http.get(`/api/public/users/getSingleUser`, { params });
  }

  deleteUser(id: any) {
    console.log(id);

    let params = new HttpParams().set('id', id);
    return this._http.delete(`/api/public/users/deleteUser`, {
      params,
    });
  }
}
