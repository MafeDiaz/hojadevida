import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
    ){

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
    })


  }

  ngOnInit() {
  }

  async ingresar() {
    if (this.formularioLogin.valid) {
      // Acciones a realizar cuando el formulario es válido
      const nombre = this.formularioLogin.value.nombre;
      const password = this.formularioLogin.value.password;

      // Lógica de validación de credenciales
      if (nombre === "mafediaz" && password === "25034") {
        // Credenciales válidas
        console.log("Credenciales válidas");
          this.router.navigate(['/inicio']);
        // Aquí puedes redirigir a la página deseada o realizar otras acciones

      } else {
        // Credenciales inválidas
        console.log("Credenciales inválidas");
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales inválidas. Por favor, inténtalo nuevamente.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      // El formulario no es válido
      console.log("Formulario inválido");

  
    }

  }
}