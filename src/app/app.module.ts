import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { HeaderComponent } from './components/header/header.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './components/usuario/usuario.service';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DepartamentosService } from './components/departamentos/departamentos.service';
import { DialogUserComponent } from './components/usuario/dialogUser.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgxMaskModule} from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsuarioComponent,
    DepartamentosComponent,
    DialogUserComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot( )
  ],
  providers: [UsuarioService,DepartamentosService,{provide:MAT_DATE_LOCALE, useValue:'es-ES'}],
  bootstrap: [AppComponent],
  entryComponents:[DialogUserComponent]
})
export class AppModule { }
