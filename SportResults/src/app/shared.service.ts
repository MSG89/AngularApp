import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:64650/api";
  
  constructor(private http:HttpClient) { }

//todo
  getTopFiveOffTeams():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TopFiveOffTeams');
  }

  //todo
  getTopFiveDefTeams():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/TopFiveDefTeams');
  }

  getMatchResults():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Matches');
  }

  getTeamNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Teams')
  }

  getHighlightMatch():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/HighlightMatch')
  }
}
