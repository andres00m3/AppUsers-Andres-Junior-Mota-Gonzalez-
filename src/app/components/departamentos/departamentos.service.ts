import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { departamento } from "./departamentos.model";

@Injectable({
  providedIn:'root'
})

export class DepartamentosService{
baseUrl = environment.baseUrl;
private DepartamentosLista:departamento[] = []
private DepartamentosSubject = new Subject<departamento[]>();
constructor(private http: HttpClient){}


obtenerDepartamentos(){
  this.http.get<departamento[]>(this.baseUrl + 'api/Departamentos')
  .subscribe((data)=>{
    this.DepartamentosLista = data;
    this.DepartamentosSubject.next([...this.DepartamentosLista])
  });
}

obtenerActualListener(){
  return this.DepartamentosSubject.asObservable();
}
}
