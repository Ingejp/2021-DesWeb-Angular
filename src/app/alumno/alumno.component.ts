import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  public titulo: string;
  public nombre: string;
  @Input() public correo: string;
  public listaAlumnos: string[]

  constructor() {
    this.titulo="Componente Alumno"
    this.nombre='Alumno de prueba'
    this.correo='correo@correo.com'
    this.listaAlumnos=['Juan Pablo', 'Jorge Mario','Milton Josué']
  }

  mostrarMensaje(): string{
    let mensaje = "Su correo es " + this.correo;
    return mensaje
  }

  mostrarAlerta(): void{
    alert("Evento click con mensaje")
  }

  ngOnInit(): void {

  }

}
