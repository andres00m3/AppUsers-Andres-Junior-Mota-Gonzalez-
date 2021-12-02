import { departamento } from "../departamentos/departamentos.model";
export interface usuario{
  id:number;
  Nombres: string;
  Apellidos:String;
  Genero:string;
  Cedula:string;
  FechaDeNacimiento: Date;
  Cargo:string;
  SupervisorInmediato:string;
  DepartamentosID: number;
}
