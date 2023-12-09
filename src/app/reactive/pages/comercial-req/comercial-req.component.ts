import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComercialService } from '../../services/comercial.service';
import Swal from 'sweetalert2';

const defaultForm = {
  productos: [''],
  cantidad: 0,
  formatoBotella: '',
  tipoVino: '',
  anioCosecha: '',
  cepa: '',
  tipoCierre: '',
  etiqueta: '',
  fechaEnvio: '',
  centroCosto: '',
  cuentaContable: '',
  conceptos: '',
  tipoEmbalaje: '',
  clienteNombre: '',
  clienteFono: '',
  clienteEmail: '',
  clientePais: '',
  clienteDireccion: '',
  despachoTransporte: '',
  despachoRetira: '',
  despachoAwb: '',
  despachoCosto: 0,
};

@Component({
  templateUrl: './comercial-req.component.html',
  styleUrls: ['../../layouts/request-layout/request-layout.component.scss']
})
export class ComercialReqComponent {

  public comercialForm: FormGroup = this.fb.group({
    productos: this.fb.array([
      ['', [ Validators.required ], []],
    ]),
    cantidad: [0, [ Validators.required ], []],
    formatoBotella: ['', [], []],
    tipoVino: ['', [], []],
    anioCosecha: ['', [], []],
    cepa: ['', [], []],
    tipoCierre: ['', [], []],
    etiqueta: ['', [], []],
    fechaEnvio: ['', [], []],
    centroCosto: ['', [], []],
    cuentaContable: ['', [], []],
    conceptos: ['', [], []],
    tipoEmbalaje: ['', [], []],
    clienteNombre: ['', [], []],
    clienteFono: ['', [], []],
    clienteEmail: ['', [ Validators.email ], []],
    clientePais: ['', [], []],
    clienteDireccion: ['', [], []],
    despachoTransporte: ['', [], []],
    despachoRetira: ['', [], []],
    despachoAwb: ['', [], []],
    despachoCosto: [0, [], []],
  });

  private ComercialService = inject( ComercialService );

  public newProducto: FormControl = new FormControl('', [ Validators.required ] );

  constructor ( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.comercialForm.reset(defaultForm);
  }

  get productos() {
    return this.comercialForm.get('productos') as FormArray;
  }

  isValidField( field: string ): boolean | null {
    return this.comercialForm.controls[field].errors && this.comercialForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, i: number ) {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.comercialForm.controls[field] ) return null;

    const errors = this.comercialForm.controls[field].errors || {};

    document.getElementById(field)?.scrollIntoView({ behavior: "smooth" });

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Este campo requiere un mínimo de ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  onAddProducto():void {

    // if( this.newProducto.invalid ) return;

    const newProd = this.newProducto.value;
    
    this.productos.push(
      this.fb.control( newProd, Validators.required )
    );

    this.newProducto.reset();

  }

  onDeleteProducto( i: number ):void {
    this.productos.removeAt(i);
  }

  onSave():void {

    if ( this.comercialForm.invalid ) {
      this.comercialForm.markAllAsTouched();
      return;
    };

    console.log(this.comercialForm.value);

    // this.ComercialService.onSave(this.comercialForm.value).subscribe({
    //   next: () => {
    //     Swal.fire({
    //       position: "top-end",
    //       title: 'Solicitud Enviada',
    //       showConfirmButton: false,
    //       icon: 'success',
    //       timerProgressBar: true,
    //       timer: 1500,
    //       didClose: () => window.scrollTo({ top: 0 })
    //     });
    //   },
    //   error: (message) => {
    //     Swal.fire({
    //       title: 'Error',
    //       text: message,
    //       icon: 'error'
    //     });
    //   }
    // });

    // this.comercialForm.reset(defaultForm);

  }
}
