import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library-test';
  fakeData: any[] = [
    {Grupo: 1, Abreviatura: 'Hydrogen', Nombre: 1.0079},
    {Grupo: 2, Abreviatura: 'Helium', Nombre: 4.0026},
    {Grupo: 3, Abreviatura: 'Lithium', Nombre: 6.941},
    {Grupo: 4, Abreviatura: 'Beryllium', Nombre: 9.0122},
    {Grupo: 5, Abreviatura: 'Boron', Nombre: 10.811},
    {Grupo: 6, Abreviatura: 'Carbon', Nombre: 12.0107},
    {Grupo: 7, Abreviatura: 'Nitrogen', Nombre: 14.0067},
    {Grupo: 8, Abreviatura: 'Oxygen', Nombre: 15.9994},
    {Grupo: 9, Abreviatura: 'Fluorine', Nombre: 18.9984},
    {Grupo: 10, Abreviatura: 'Neon', Nombre: 20.1797},
  ];
  columns: any[] = [
    {
      name:'Grupo',  
      show: true
    },
    {
      name:'Abreviatura',
      show: true
    },
    {
      name:'Nombre',   
      show: true
    },
  ];
}
