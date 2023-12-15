import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComercialService } from '../../services/comercial.service';
import Swal from 'sweetalert2';

const defaultForm = {
  nombreSolicitud: '',
  productos: [{
    cantidad: 0,
    formatoBotella: '',
    tipoVino: '',
    anioCosecha: '',
    cepa: '',
    tipoCierre: '',
    etiqueta: '',
  }],
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
  
  public panelExpanded: boolean[] = [true];

  public comercialForm: FormGroup = this.fb.group({
    nombreSolicitud: ['', [], []],
    productos: this.fb.array([]),
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

  public productsList = [
    {id: 'ER_Icone', desc: 'Escudo Rojo Icone'},
    {id: 'ER_Origine', desc: 'Escudo Rojo Origine'},
    {id: 'ER_Grande_R', desc: 'Escudo Rojo Grande Réserve'},
    {id: 'ER_Reserve', desc: 'Escudo Rojo Réserve'},
    {id: 'Mapu_GR', desc: 'Mapu Gran Reserva'},
    {id: 'Mapu_R', desc: 'Mapu Reserva'},
    {id: 'Mapu', desc: 'Mapu'},
    {id: 'Andes_GR', desc: 'Mas Andes Gran Reserva'},
    {id: 'Andes_R', desc: 'Mas Andes Reserva < Cambio'},
    {id: 'Andes', desc: 'Mas Andes'},
    {id: 'Anderra', desc: 'Anderra'},
    {id: 'Reserva', desc: 'Reserva'},
    {id: 'Reserva_E', desc: 'Reserva Especial'},
    {id: 'Mapa_R', desc: 'Mapa Reserva'},
    {id: 'Mapa', desc: 'Mapa'},
    {id: 'Varietal_B', desc: 'Varietal Beige'},
    {id: 'ND_Andes', desc: 'ND23 Mas Andes'},
    {id: 'ND_Andes_R', desc: 'ND23 Mas Andes Reserva'},
    {id: 'ND_Andes_GR', desc: 'ND23 Mas Andes Gran Reserva'},
    {id: 'ND_Andes_PLTO', desc: 'ND23 Mas Andes PLTO'}
  ];

  private ComercialService = inject( ComercialService );

  constructor ( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.comercialForm.reset(defaultForm);
    this.comercialForm.controls['nombreSolicitud'].setValue(this.buildDate())
    this.productos.push(this.getNewProduct());
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

  getNewProduct() {
    return this.fb.group({
      producto: ['', [], []],
      cantidad: [0, [ Validators.required ], []],
      formatoBotella: ['', [], []],
      tipoVino: ['', [], []],
      anioCosecha: ['', [], []],
      cepa: ['', [], []],
      tipoCierre: ['', [], []],
      etiqueta: ['', [], []],
    })
  }

  onAddProducto():void {

    // if( this.newProducto.invalid ) return;

    this.productos.push(this.getNewProduct());
    this.panelExpanded.push(true);

    // this.newProducto.reset();

  }

  onDeleteProducto( i: number ):void {
    this.productos.removeAt(i);
    this.panelExpanded.splice(i, 1);
  }

  onSave():void {

    // if ( this.comercialForm.invalid ) {
    //   this.comercialForm.markAllAsTouched();
    //   return;
    // };

    this.ComercialService.onSave(this.comercialForm.value).subscribe({
      next: () => {
        Swal.fire({
          position: "top-end",
          title: 'Solicitud Enviada',
          showConfirmButton: false,
          icon: 'success',
          timerProgressBar: true,
          timer: 1500,
          didClose: () => window.scrollTo({ top: 0 })
        });
      },
      error: (message) => {
        Swal.fire({
          title: 'Error',
          text: message,
          icon: 'error'
        });
      }
    });

    this.comercialForm.reset(defaultForm);

  }

  toggleData(i: number):void {
    this.panelExpanded[i] = !this.panelExpanded[i];
  }

  buildDate():string {
    const today = new Date();
    return `Solicitud_Comercial_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}_${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  }

}
