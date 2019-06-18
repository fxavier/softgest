import { Categoria } from './../../model/categoria';
import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-categorias-pesquisa',
  templateUrl: './categorias-pesquisa.component.html',
  styleUrls: ['./categorias-pesquisa.component.scss']
})
export class CategoriasPesquisaComponent implements OnInit {

  categoria: Categoria;
  settings: Settings;

  displayedColumns = ['codigo', 'nome', 'accoes'];

  constructor() { }

  ngOnInit() {
  }

}
