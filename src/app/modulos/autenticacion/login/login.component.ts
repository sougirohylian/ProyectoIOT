import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDto } from 'src/app/models/UsuarioDto';

import Swal from 'sweetalert2'
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  public usuario: UsuarioDto;
  public formulario: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router) {

    this.usuario = new UsuarioDto();

  }

  ngOnInit(): void {
    this.validarFormulario();
  }



  get ValidarEmail() {
    return this.formulario.get('email').invalid && this.formulario.get('email').touched;
  }

  get ValidarContrasena() {
    return this.formulario.get('contrasena').invalid && this.formulario.get('contrasena').touched;
  }



  public validarFormulario() {

    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena: ['', [Validators.required, Validators.pattern('')]],


    });

  }

  public login() {

    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach(control => {

        control.markAsTouched();

      });
    } else {
      if (this.formulario.valid) {
        this.usuario.email = this.formulario.value.email;
        this.usuario.contrasena = this.formulario.value.contrasena;

        if (this.usuario.email == 'andres.ibarra.ajc@gmail.com' && this.usuario.contrasena == '12345') {

          this.alertaConfirmacion(this.usuario);
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'UNIAJC dice',
            text: "Usuario o contaseña no valida, verifique e intente de nuevo",
            showConfirmButton: false,
            timer: 4000
          });
        }
      }
    }
  }


  public alertaConfirmacion(usuario: UsuarioDto) {

    Swal.fire({
      title: 'UNIAJC dice:',
      text: "Inicio se sesión exitoso",
      icon: 'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {


            this.router.navigateByUrl('/temperatura');

          }


    })
  }

}
