import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericService } from '../../services/generic.service';
import { ProductService } from '../../services/product.service';
import { Vino } from '../../interfaces/product.interface';
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
  clienteNombre: '',
  clienteFono: '',
  clienteEmail: '',
  clienteDireccion: '',
  despachoTransporte: '',
  despachoRetira: '',
  despachoAwb: '',
  despachoCosto: 0,
};

@Component({
  templateUrl: './generic-req.component.html',
  styleUrls: ['../../layouts/request-layout/request-layout.component.scss'],
  host: {'collision-id': 'GenericRequest'},
})
export class GenericReqComponent {

  public panelExpanded: boolean[] = [true];

  public genericForm: FormGroup = this.fb.group({
    nombreSolicitud: ['', [], []],
    productos: this.fb.array([]),
    fechaEnvio: ['', [], []],
    centroCosto: ['', [], []],
    cuentaContable: ['', [], []],
    conceptos: ['', [], []],
    clienteNombre: ['', [], []],
    clienteFono: ['', [], []],
    clienteEmail: ['', [ Validators.email ], []],
    clienteDireccion: ['', [], []],
    despachoTransporte: ['', [], []],
    despachoRetira: ['', [], []],
    despachoAwb: ['', [], []],
    despachoCosto: [0, [], []],
  });

  private GenericService = inject( GenericService );

  constructor (
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.genericForm.reset(defaultForm);
    this.productos.push(this.getNewProduct());
  }

  get productList(): Vino[] {
    return this.productService.vinos;
  }

  get productos() {
    return this.genericForm.get('productos') as FormArray;
  }

  isValidField( field: string ): boolean | null {
    return this.genericForm.controls[field].errors && this.genericForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, i: number ) {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.genericForm.controls[field] ) return null;

    const errors = this.genericForm.controls[field].errors || {};

    // document.getElementById(field)?.scrollIntoView({ behavior: "smooth" });

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

    // if ( this.genericForm.invalid ) {
    //   this.genericForm.markAllAsTouched();
    //   return;
    // };

    this.genericForm.controls['nombreSolicitud'].setValue(this.buildDate());

    this.GenericService.onSave(this.genericForm.value).subscribe({
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

    this.genericForm.reset(defaultForm);
  }

  toggleData(i: number):void {
    this.panelExpanded[i] = !this.panelExpanded[i];
  }

  buildDate():string {
    const today = new Date();
    const year  = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day   = ('0' + today.getDate()).slice(-2);
    const hour  = ('0' + today.getHours()).slice(-2);
    const min   = ('0' + today.getMinutes()).slice(-2);
    const sec   = ('0' + today.getSeconds()).slice(-2);

    return `Solicitud_Generica_${year}_${month}_${day}_${hour}${min}${sec}`;
  }

}
