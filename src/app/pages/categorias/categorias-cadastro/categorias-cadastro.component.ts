import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-cadastro',
  templateUrl: './categorias-cadastro.component.html',
  styleUrls: ['./categorias-cadastro.component.scss']
})
export class CategoriasCadastroComponent implements OnInit {

  categoriaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoriaForm = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

}
