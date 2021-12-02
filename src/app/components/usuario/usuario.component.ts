import { AfterViewInit, Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { departamento } from '../departamentos/departamentos.model';
import { DialogUserComponent } from './dialogUser.component';
import { usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  private usuarioSubscription: Subscription;
constructor(private UsuarioService:UsuarioService, private MatDialog: MatDialog){}
  desplegarColumnas = ['id','nombres', 'apellidos', 'genero', 'cedula','fechaDeNacimiento','cargo','SupervisorInmediato'];
  dataSource = new MatTableDataSource<usuario>();
  @ViewChild(MatSort) ordenamiento: MatSort;

  abrirDialog(){
   const DialogControl = this.MatDialog.open(DialogUserComponent,{
      width:'450px',
    });

    DialogControl.afterClosed()
    .subscribe(()=>{
    this.UsuarioService.obtenerUsuarios()
    });
  }

  ngOnInit():void{
this.UsuarioService.obtenerUsuarios();
  this.usuarioSubscription = this.UsuarioService
  .obtenerActualListenerData()
  .subscribe((usuario:usuario[])=>{
     this.dataSource.data = usuario;
  });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
  }
  ngOnDestroy(){
    this.usuarioSubscription.unsubscribe;

    }
}
