import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestMethod,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {detail} from './detail';
import {OptionsPage} from '../options/options';
import { comp_details } from './comp_details';
//import { ModalController } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';
@Injectable()

export class userservice{

  constructor(private http:Http)
  {

  }
  emplist : detail[];
  comp_list : comp_details [];
  postEmployee(emp : detail)
   {
     var body = JSON.stringify(emp);
     var headerOptions = new Headers({'Content-type':'application/json'});
     var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
     return this.http.post('http://mapp.ntpc.co.in/roop_ocms/api/employee',body,requestOptions).map(x => x.json());
     //console.log("hello");
  }
  login(username,password)
  {
  var url = "https://mapp.ntpc.co.in/roop_ocms/api/login";
  var body = {"username":username,"password":password};
  var headerOptions = new Headers({'Content-type':'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  return this.http.post(url,body,requestOptions).map(x => x.json());
  }
  putEmplyoee(id,emp)
    {
      var body = JSON.stringify(emp);
      var headerOptions = new Headers({'Content-type':'application/json'});
      var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headerOptions});
      return this.http.put('https://mapp.ntpc.co.in/roop_ocms/api/employee/'+id,body,requestOptions).map(x => x.json());
    }
    postcomp(comp : comp_details)
    {
      var body = JSON.stringify(comp);
     var headerOptions = new Headers({'Content-type':'application/json'});
     var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
     return this.http.post('https://mapp.ntpc.co.in/roop_ocms/api/complaints',body,requestOptions).map(x => x.json());
    }
    getcomp(empid)
    {
      this.http.get('https://mapp.ntpc.co.in/roop_ocms/api/complaints?empid='+empid).map((data:Response)=>{
        return data.json() as comp_details[];
      }).toPromise().then(x=>{
        this.comp_list = x;
      });

    }
}
