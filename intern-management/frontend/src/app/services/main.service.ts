import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  userStatus = new EventEmitter<String>();
  Status = new EventEmitter<boolean>();
  dob=true;
  constructor(private http: HttpClient) { }
  registerApi(body: object): Observable<any> {
    console.log(body)
    return this.http.post('/api/register', body, { observe: 'response', withCredentials: true })
  }
  loginApi(body: object): Observable<any> {
    return this.http.post('/api/login', body, { observe: 'response', withCredentials: true })
  }
  statusleave(): Observable<any> {
    return this.http.get('/api/leavestatus')
  }
  addInternApi(body: object): Observable<any> {
    return this.http.post('/api/internadd', body, { observe: 'response', withCredentials: true })
  }
  forgotEmailApi(body: object): Observable<any> {
    return this.http.post('/api/forgotPassword', body, { observe: 'response', withCredentials: true })
  }
  leaveApi(body: object): Observable<any> {
    return this.http.post('/api/leave', body, { observe: 'response', withCredentials: true })
  }
  dprApi(body: object): Observable<any> {
    return this.http.post('/api/dpr', body, { observe: 'response', withCredentials: true })
  }
  adminLeaveApi(): Observable<any> {
    return this.http.get('/api/adminleave')
  }
  getEmployee(): Observable<any> {
    return this.http.get('/api/getEmployee')
  }
  getAllEmployee(): Observable<any> {
    return this.http.get('/api/getAllEmployee')
  }
  getDpr(): Observable<any> {
    return this.http.get('/api/getdpr')
  }
  getMorning(): Observable<any> {
    return this.http.get('/api/getMorning')
  }
  getEvening(): Observable<any> {
    return this.http.get('/api/getEvening')
  }
  getExistApi(body: object) {
    return this.http.post('/api/validEmailUser', body, { observe: 'response', withCredentials: true })

  }
  getUpdateStatus(body: object) {
    return this.http.post('/api/getUpdateStatus', body, { observe: 'response', withCredentials: true })

  }
  leaveDate(body: object): Observable<any> {
    return this.http.post('/api/leaveDate', body, { observe: 'response', withCredentials: true })
  }
  profileUpdate(body: object): Observable<any> {
    return this.http.post('/api/update', body, { observe: 'response', withCredentials: true })
  }
  changepassword(body: object): Observable<any> {
    return this.http.post('/api/changepassword', body, { observe: 'response', withCredentials: true })
  }

  attendance(body: object): Observable<any> {
    return this.http.post('/api/attendance', body, { observe: 'response', withCredentials: true })
  }
  getattendence(): Observable<any> {
    return this.http.get('/api/getattendence')
  }
  getEmployeeAttendance(): Observable<any> {
    return this.http.get('/api/getEmployeeAttendance')
  }

  addTask(body:object):Observable<any> {
    return this.http.post('/api/task',body, { observe: 'response', withCredentials: true })
  }
 
  getTask(): Observable<any> {
    return this.http.get('/api/getTask')
  }

  delTask(): Observable<any> {
    return this.http.delete('/api/deltask')
  }
  addAnn(body:object):Observable<any> {
    return this.http.post('/api/addAnn',body,{ observe: 'response', withCredentials: true })
  }
  getAnn(): Observable<any> {
    return this.http.get('/api/getAnn')
  }

  addQuery(body:object):Observable<any> {
    return this.http.post('/api/query',body, { observe: 'response', withCredentials: true })
  }
  getQuery(): Observable<any> {
    return this.http.get('/api/getquery')
  }

}
