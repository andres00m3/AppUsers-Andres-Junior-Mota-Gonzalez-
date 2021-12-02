import { AfterViewInit, Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartamentosService } from './departamentos.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { departamento } from './departamentos.model';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent implements OnInit, AfterViewInit {
  private DepartamentosSubscription: Subscription;
  constructor(private departamentosService:DepartamentosService){}
    desplegarColumnas = ['id','nombre', 'codigo'];
    dataSource = new MatTableDataSource<departamento>();
    @ViewChild(MatSort) ordenamiento: MatSort;


    ngOnInit():void{
  this.departamentosService.obtenerDepartamentos();
    this.DepartamentosSubscription = this.departamentosService
    .obtenerActualListener()
    .subscribe((departamentos:departamento[])=>{
       this.dataSource.data = departamentos;
    });
  }

    ngAfterViewInit(){
      this.dataSource.sort = this.ordenamiento;
    }
    ngOnDestroy(){
      this.DepartamentosSubscription.unsubscribe();

      }

}

