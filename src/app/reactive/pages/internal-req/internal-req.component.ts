import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternalService } from '../../services/internal.service';
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
  solicitante: '',
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
  templateUrl: './internal-req.component.html',
  styleUrls: ['../../layouts/request-layout/request-layout.component.scss'],
  host: {'collision-id': 'InternalRequest'},
})
export class InternalReqComponent implements OnInit {

  public panelExpanded: boolean[] = [true];

  public internalForm: FormGroup = this.fb.group({
    nombreSolicitud: ['', [], []],
    productos: this.fb.array([]),
    solicitante: ['', [], []],
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

  private InternalService = inject( InternalService );

  constructor (
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.internalForm.reset(defaultForm);
    this.productos.push(this.getNewProduct());
  }

  get productList(): Vino[] {
    return this.productService.vinos;
  }

  get productos() {
    return this.internalForm.get('productos') as FormArray;
  }

  isValidField( field: string ): boolean | null {
    return this.internalForm.controls[field].errors && this.internalForm.controls[field].touched;
  }

  isValidFieldInArray( formArray: FormArray, i: number ) {
    return formArray.controls[i].errors && formArray.controls[i].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.internalForm.controls[field] ) return null;

    const errors = this.internalForm.controls[field].errors || {};

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

    this.productos.push(this.getNewProduct());
    this.panelExpanded.push(true);

  }

  onDeleteProducto( i: number ):void {
    this.productos.removeAt(i);
    this.panelExpanded.splice(i, 1);
  }

  onSave():void {

    this.internalForm.controls['nombreSolicitud'].setValue(this.buildDate());

    this.InternalService.onSave(this.internalForm.value).subscribe({
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

    this.internalForm.reset(defaultForm);
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

    return `Solicitud_Interna_${year}_${month}_${day}_${hour}${min}${sec}`;
  }


}
