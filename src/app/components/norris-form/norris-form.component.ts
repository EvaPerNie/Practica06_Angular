import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChisteService } from 'src/app/services/chiste.service';

@Component({
  selector: 'norris-form',
  templateUrl: './norris-form.component.html',
  styleUrls: ['./norris-form.component.css']
})
export class NorrisFormComponent implements OnInit {

  public formChistes: FormGroup;
  public categorias: any;
  private categoriaSeleccionada: any;
  public chiste: any;

  // esto está en el html en el form -> [formGroup]="form"
  //categorias: string[];

  constructor(private fb: FormBuilder, private chisteService: ChisteService) {
    this.formChistes = fb.group(
      {
        categoria : fb.control('', Validators.required)
      }
    );
    
   }

  ngOnInit(): void {
    this.chisteService.cargaCategorias().subscribe(res =>{
      this.categorias = res;
    });
  }

  seleccionCategoria(event: any){
    this.categoriaSeleccionada = event.target.value;
    this.cargaChiste();
  }

  cargaChiste(){
    this.chisteService.cargaChiste(this.categoriaSeleccionada)
    .subscribe(res =>{
      this.chiste = res;
      console.log(this.chiste);
    });
  }

}
