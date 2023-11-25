import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const defaultForm = {
  solicitante: '',
  producto: '',
  cubaMezcla: '',
  fechaEntrega: '',
  observaciones: ''
};

@Component({
  templateUrl: './generic-req.component.html',
  styleUrls: ['../../layouts/request-layout/request-layout.component.scss']
})
export class GenericReqComponent {

  public genericForm: FormGroup = this.fb.group({
    solicitante:    ['', [ Validators.required, Validators.minLength(3) ], []],
    producto:       ['', [ Validators.required, Validators.minLength(3) ], []],
    cubaMezcla:     ['', [ Validators.required, Validators.minLength(3) ], []],
    fechaEntrega:   ['', [ Validators.required, Validators.minLength(3) ], []],
    observaciones:  ['', [ Validators.required, Validators.minLength(3) ], []]
  });

  constructor ( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.genericForm.reset(defaultForm);
  }

  isValidField( field: string ): boolean | null {
    return this.genericForm.controls[field].errors && this.genericForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {
    if ( !this.genericForm.controls[field] ) return null;

    const errors = this.genericForm.controls[field].errors || {};

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

  onSave():void {

    if ( this.genericForm.invalid ) {
      this.genericForm.markAllAsTouched();
      return;
    };

    console.log(this.genericForm.value);

    this.genericForm.reset(defaultForm);
  }

}
