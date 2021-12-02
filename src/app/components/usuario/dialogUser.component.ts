import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormBuilder, FormGroup} from "@angular/forms";
import { MatOption } from "@angular/material/core";
import { MatDatepicker } from "@angular/material/datepicker";
import { MatDialog } from "@angular/material/dialog";
import { MatSelectChange } from "@angular/material/select";
import { Subscription } from "rxjs";
import { usuario } from "./usuario.model";
import { departamento } from "../departamentos/departamentos.model";
import { DepartamentosService } from "../departamentos/departamentos.service";
import { UsuarioService } from "./usuario.service";

@Component({
  selector:'app-dialog-user',
  templateUrl:'dialogUser.component.html',
})

export class  DialogUserComponent implements OnInit, OnDestroy{
  selectDepartamento: string;
  selectDepartamentoTexto: string;
  fechaDeNacimiento: string;
  departamentos: departamento[] = [];
  departamentoSuscripcion:Subscription;
  @ ViewChild(MatDatepicker) picker: MatDatepicker<Date>;
 usuario: usuario[];
  usuarioSubscription: Subscription;
  date: string;


constructor(private UsuarioServices:UsuarioService, private DepartamentosServices: DepartamentosService, private dialogUser: MatDialog){

}

ngOnInit(){
  this.DepartamentosServices.obtenerDepartamentos();
 this.departamentoSuscripcion = this.DepartamentosServices
  .obtenerActualListener()
  .subscribe((departamentos:departamento[])=>{
      this.departamentos = departamentos
  });

}

selected(event: MatSelectChange) {
  this.selectDepartamentoTexto = (event.source.selected as MatOption).viewValue;
}


guardarUsuario(form:NgForm){
  const UsuarioRequest ={
    id:0,
    Nombres: form.value.nombres,
    Apellidos: form.value.apellidos,
    Genero: form.value.genero,
    Cedula: form.value.cedula,
    FechaDeNacimiento: new Date (form.value.FechaDeNacimiento),   //.toISOString() ,
    Cargo: form.value.Cargo,
    SupervisorInmediato: form.value.SupervisorInmediato,
    DepartamentosID: parseInt(this.selectDepartamento)
  }

  console.log(UsuarioRequest);
  this.UsuarioServices.guardarUsuario(UsuarioRequest);
this.usuarioSubscription = this.UsuarioServices.getUsuarioListerner()
  .subscribe(()=>{
this.dialogUser.closeAll();
  });


}


ngOnDestroy(){
  this.departamentoSuscripcion.unsubscribe();
  this.usuarioSubscription.unsubscribe();
}
}
