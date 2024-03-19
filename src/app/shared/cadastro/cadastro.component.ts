import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss',]
})
export class CadastroComponent {
  cliente = {
    nome: '',
    email: ''
}
clientsForm: any;
cadastro: any;

  submitForm() {

    console.log('Cliente cadastrado:', this.cliente);

    this.cliente = {
      nome: '',
      email: ''
    };
  }
}
