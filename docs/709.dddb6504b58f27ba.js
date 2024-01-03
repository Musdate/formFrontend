"use strict";(self.webpackChunkform_frontend=self.webpackChunkform_frontend||[]).push([[709],{3709:(le,p,c)=>{c.r(p),c.d(p,{ReactiveModule:()=>ae});var d=c(6814),s=c(7664),t=c(95),e=c(4946);function f(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("producto")," ")}}function C(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cosecha")," ")}}function h(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("formato")," ")}}function Z(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoBotella")," ")}}function x(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoCierre")," ")}}function b(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("contraEtiquetas")," ")}}function v(o,a){1&o&&(e.TgZ(0,"span",23),e._uU(1," La Cantidad debe ser mayor a cero "),e.qZA())}function q(o,a){if(1&o&&(e.TgZ(0,"span",23),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("observaciones")," ")}}const m={producto:"",cosecha:"",formato:"",tipoBotella:"",tipoCierre:"",etiqueta:"",contraEtiquetas:"",cantidad:0,observaciones:""};let T=(()=>{class o{constructor(n){this.fb=n,this.internalForm=this.fb.group({producto:["",[t.kI.required,t.kI.minLength(3)],[]],cosecha:["",[t.kI.required,t.kI.minLength(3)],[]],formato:["",[t.kI.required,t.kI.minLength(3)],[]],tipoBotella:["",[t.kI.required,t.kI.minLength(3)],[]],tipoCierre:["",[t.kI.required,t.kI.minLength(3)],[]],etiqueta:["",[t.kI.required,t.kI.minLength(3)],[]],contraEtiquetas:["",[t.kI.required,t.kI.minLength(3)],[]],cantidad:[0,[t.kI.min(0)],[]],observaciones:["",[t.kI.required,t.kI.minLength(3)],[]]})}ngOnInit(){this.internalForm.reset(m)}isValidField(n){return this.internalForm.controls[n].errors&&this.internalForm.controls[n].touched}getFieldError(n){if(!this.internalForm.controls[n])return null;const i=this.internalForm.controls[n].errors||{};for(const r of Object.keys(i))switch(r){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${i.minlength.requiredLength} caracteres.`}return null}onSave(){this.internalForm.invalid?this.internalForm.markAllAsTouched():(console.log(this.internalForm.value),this.internalForm.reset(m))}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:59,vars:9,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],[1,"campo"],["for","producto"],[1,"campo-interno"],["id","producto","type","text","formControlName","producto","placeholder","Nombre del producto"],["class","text-danger",4,"ngIf"],["for","cosecha"],["id","cosecha","type","text","formControlName","cosecha","placeholder","Cosecha del producto"],["for","formato"],["id","formato","type","text","formControlName","formato","placeholder","Formato del producto"],["for","tipoBotella"],["id","tipoBotella","type","text","formControlName","tipoBotella","placeholder","Tipo Botella"],["for","tipoCierre"],["id","tipoCierre","type","text","formControlName","tipoCierre","placeholder","Tipo de Cierre"],["for","contraEtiquetas"],["id","contraEtiquetas","type","text","formControlName","contraEtiquetas","placeholder","Contra Etiquetas"],["for","cantidad"],["id","cantidad","type","number","formControlName","cantidad","placeholder","Cantidad"],["for","observaciones"],["id","observaciones","type","text","formControlName","observaciones","placeholder","Observaciones","cols","20","rows","10"],["type","submit","value","Enviar",1,"btn","btn-form"],[1,"text-danger"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Interna"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Datos"),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Producto / Marca: "),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"input",6),e.YNc(15,f,2,1,"span",7),e.qZA()(),e.TgZ(16,"div",3)(17,"label",8),e._uU(18,"Cosecha: "),e.qZA(),e.TgZ(19,"div",5),e._UZ(20,"input",9),e.YNc(21,C,2,1,"span",7),e.qZA()(),e.TgZ(22,"div",3)(23,"label",10),e._uU(24,"Formato: "),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"input",11),e.YNc(27,h,2,1,"span",7),e.qZA()(),e.TgZ(28,"div",3)(29,"label",12),e._uU(30,"Tipo Botella: "),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"input",13),e.YNc(33,Z,2,1,"span",7),e.qZA()(),e.TgZ(34,"div",3)(35,"label",14),e._uU(36,"Tipo de Cierre: "),e.qZA(),e.TgZ(37,"div",5),e._UZ(38,"input",15),e.YNc(39,x,2,1,"span",7),e.qZA()(),e.TgZ(40,"div",3)(41,"label",16),e._uU(42,"Contra Etiquetas: "),e.qZA(),e.TgZ(43,"div",5),e._UZ(44,"input",17),e.YNc(45,b,2,1,"span",7),e.qZA()(),e.TgZ(46,"div",3)(47,"label",18),e._uU(48,"Cantidad: "),e.qZA(),e.TgZ(49,"div",5),e._UZ(50,"input",19),e.YNc(51,v,2,0,"span",7),e.qZA()(),e.TgZ(52,"div",3)(53,"label",20),e._uU(54,"Observaciones: "),e.qZA(),e.TgZ(55,"div",5),e._UZ(56,"textarea",21),e.YNc(57,q,2,1,"span",7),e.qZA()()(),e._UZ(58,"input",22),e.qZA()),2&i&&(e.xp6(6),e.Q6J("formGroup",r.internalForm),e.xp6(9),e.Q6J("ngIf",r.isValidField("producto")),e.xp6(6),e.Q6J("ngIf",r.isValidField("cosecha")),e.xp6(6),e.Q6J("ngIf",r.isValidField("formato")),e.xp6(6),e.Q6J("ngIf",r.isValidField("tipoBotella")),e.xp6(6),e.Q6J("ngIf",r.isValidField("tipoCierre")),e.xp6(6),e.Q6J("ngIf",r.isValidField("contraEtiquetas")),e.xp6(6),e.Q6J("ngIf",r.isValidField("cantidad")),e.xp6(6),e.Q6J("ngIf",r.isValidField("observaciones")))},dependencies:[d.O5,t._Y,t.Fj,t.wV,t.JJ,t.JL,t.sg,t.u],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding:1rem}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2rem 0 0}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-grow:1;height:6rem}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}.btn-add[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#275995;color:#fff;font-size:5rem;padding:1rem;transition:background-color .3s ease-out;text-align:center;border:none;width:6rem;height:6rem}.btn-add[_ngcontent-%COMP%]:hover{background-color:#1c6bc9;cursor:pointer}.campo-array[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #e8e3d9;padding:1rem}.prod-btn[_ngcontent-%COMP%]{color:#000}.prod-btn[_ngcontent-%COMP%]:hover{color:#2795b6;cursor:pointer}.btn-del[_ngcontent-%COMP%]{color:#000;margin:0 0 0 2rem}.btn-del[_ngcontent-%COMP%]:hover{color:#dc3545;cursor:pointer}.prod-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 1rem 1rem 0}.close-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 0 0}.close-row[_ngcontent-%COMP%]:hover{cursor:pointer}.title-row[_ngcontent-%COMP%]{font-weight:700}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:13rem;padding:0 1rem 0 0}.notify-text[_ngcontent-%COMP%]{margin:0 0 0 13rem}}"]})}return o})();var M=c(9413),P=c(9862);let O=(()=>{class o{constructor(){this.baseUrl=M.N.baseUrl,this.http=(0,e.f3M)(P.eN)}onSave(n){return this.http.post(`${this.baseUrl}/comercial-req`,n)}static#e=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var A=c(3519),g=c.n(A);function F(o,a){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const n=e.oxw().$implicit;e.xp6(1),e.AsE(" ",n.value.cantidad," - ",n.value.producto," ")}}function E(o,a){if(1&o&&e._uU(0),2&o){const n=e.oxw().$implicit;e.hij(" ",n.value.producto," ")}}function y(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"a",47),e.NdJ("click",function(){e.CHM(n);const r=e.oxw().index,l=e.oxw();return e.KtG(l.onDeleteProducto(r))}),e._uU(1,"Eliminar"),e.qZA()}}function U(o,a){1&o&&e._UZ(0,"option",70),2&o&&e.s9C("value",a.$implicit.desc)}function w(o,a){if(1&o&&(e.TgZ(0,"div")(1,"div",6)(2,"label",48),e._uU(3,"Producto / Marca: "),e.qZA(),e.TgZ(4,"div",8),e._UZ(5,"input",49),e.TgZ(6,"datalist",50),e.YNc(7,U,1,1,"option",51),e.qZA()()(),e.TgZ(8,"div",6)(9,"label",52),e._uU(10,"Cantidad: "),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"input",53),e.qZA()(),e.TgZ(13,"div",6)(14,"label",54),e._uU(15,"Formato de Botella: "),e.qZA(),e.TgZ(16,"div",8),e._UZ(17,"input",55),e.qZA()(),e.TgZ(18,"div",6)(19,"label",56),e._uU(20,"Tipo de Vino: "),e.qZA(),e.TgZ(21,"div",8),e._UZ(22,"input",57),e.qZA()(),e.TgZ(23,"div",6)(24,"label",58),e._uU(25,"A\xf1o Cosecha: "),e.qZA(),e.TgZ(26,"div",8),e._UZ(27,"input",59),e.qZA()(),e.TgZ(28,"div",6)(29,"label",60),e._uU(30,"Cepa: "),e.qZA(),e.TgZ(31,"div",8),e._UZ(32,"input",61),e.qZA()(),e.TgZ(33,"div",6)(34,"label",62),e._uU(35,"Tipo de Cierre: "),e.qZA(),e.TgZ(36,"div",63),e._UZ(37,"input",64),e.TgZ(38,"label",65),e._uU(39,"Corcho "),e.qZA()(),e.TgZ(40,"div",63),e._UZ(41,"input",66),e.TgZ(42,"label",67),e._uU(43,"Rosca "),e.qZA()()(),e.TgZ(44,"div",6)(45,"label",68),e._uU(46,"Etiqueta / Contra etiqueta: "),e.qZA(),e.TgZ(47,"div",8),e._UZ(48,"input",69),e.qZA()()()),2&o){const n=e.oxw(2);e.xp6(7),e.Q6J("ngForOf",n.productsList)}}function N(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",38)(1,"div",39)(2,"div",40),e.NdJ("click",function(){const l=e.CHM(n).index,ce=e.oxw();return e.KtG(ce.toggleData(l))}),e.TgZ(3,"div",41),e.YNc(4,F,2,2,"div",42),e.YNc(5,E,1,1,"ng-template",null,43,e.W1O),e.qZA(),e.TgZ(7,"div")(8,"a",44),e._uU(9),e.qZA(),e.YNc(10,y,2,0,"a",45),e.qZA()(),e.YNc(11,w,49,1,"div",46),e.qZA(),e._UZ(12,"br"),e.qZA()}if(2&o){const n=a.$implicit,i=a.index,r=e.MAs(6),l=e.oxw();e.xp6(1),e.Q6J("formGroupName",i),e.xp6(3),e.Q6J("ngIf",n.value.cantidad>0)("ngIfElse",r),e.xp6(5),e.hij(" ",l.panelExpanded[i]?"Contraer":"Expandir"," "),e.xp6(1),e.Q6J("ngIf",i>0),e.xp6(1),e.Q6J("ngIf",l.panelExpanded[i])}}function R(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("fechaEnvio")," ")}}function I(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("centroCosto")," ")}}function k(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("cuentaContable")," ")}}function j(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("conceptos")," ")}}function J(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("tipoEmbalaje")," ")}}function V(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteNombre")," ")}}function D(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteFono")," ")}}function Y(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteEmail")," ")}}function S(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clientePais")," ")}}function Q(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("clienteDireccion")," ")}}function L(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoTransporte")," ")}}function B(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoRetira")," ")}}function G(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoAwb")," ")}}function $(o,a){if(1&o&&(e.TgZ(0,"span",71),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("despachoCosto")," ")}}const u={nombreSolicitud:"",productos:[{cantidad:0,formatoBotella:"",tipoVino:"",anioCosecha:"",cepa:"",tipoCierre:"",etiqueta:""}],fechaEnvio:"",centroCosto:"",cuentaContable:"",conceptos:"",tipoEmbalaje:"",clienteNombre:"",clienteFono:"",clienteEmail:"",clientePais:"",clienteDireccion:"",despachoTransporte:"",despachoRetira:"",despachoAwb:"",despachoCosto:0};let z=(()=>{class o{constructor(n){this.fb=n,this.panelExpanded=[!0],this.comercialForm=this.fb.group({nombreSolicitud:["",[],[]],productos:this.fb.array([]),fechaEnvio:["",[],[]],centroCosto:["",[],[]],cuentaContable:["",[],[]],conceptos:["",[],[]],tipoEmbalaje:["",[],[]],clienteNombre:["",[],[]],clienteFono:["",[],[]],clienteEmail:["",[t.kI.email],[]],clientePais:["",[],[]],clienteDireccion:["",[],[]],despachoTransporte:["",[],[]],despachoRetira:["",[],[]],despachoAwb:["",[],[]],despachoCosto:[0,[],[]]}),this.productsList=[{id:"ER_Icone",desc:"Escudo Rojo Icone"},{id:"ER_Origine",desc:"Escudo Rojo Origine"},{id:"ER_Grande_R",desc:"Escudo Rojo Grande R\xe9serve"},{id:"ER_Reserve",desc:"Escudo Rojo R\xe9serve"},{id:"Mapu_GR",desc:"Mapu Gran Reserva"},{id:"Mapu_R",desc:"Mapu Reserva"},{id:"Mapu",desc:"Mapu"},{id:"Andes_GR",desc:"Mas Andes Gran Reserva"},{id:"Andes_R",desc:"Mas Andes Reserva < Cambio"},{id:"Andes",desc:"Mas Andes"},{id:"Anderra",desc:"Anderra"},{id:"Reserva",desc:"Reserva"},{id:"Reserva_E",desc:"Reserva Especial"},{id:"Mapa_R",desc:"Mapa Reserva"},{id:"Mapa",desc:"Mapa"},{id:"Varietal_B",desc:"Varietal Beige"},{id:"ND_Andes",desc:"ND23 Mas Andes"},{id:"ND_Andes_R",desc:"ND23 Mas Andes Reserva"},{id:"ND_Andes_GR",desc:"ND23 Mas Andes Gran Reserva"},{id:"ND_Andes_PLTO",desc:"ND23 Mas Andes PLTO"}],this.ComercialService=(0,e.f3M)(O)}ngOnInit(){this.comercialForm.reset(u),this.comercialForm.controls.nombreSolicitud.setValue(this.buildDate()),this.productos.push(this.getNewProduct())}get productos(){return this.comercialForm.get("productos")}isValidField(n){return this.comercialForm.controls[n].errors&&this.comercialForm.controls[n].touched}isValidFieldInArray(n,i){return n.controls[i].errors&&n.controls[i].touched}getFieldError(n){if(!this.comercialForm.controls[n])return null;const i=this.comercialForm.controls[n].errors||{};document.getElementById(n)?.scrollIntoView({behavior:"smooth"});for(const r of Object.keys(i))switch(r){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${i.minlength.requiredLength} caracteres.`}return null}getNewProduct(){return this.fb.group({producto:["",[],[]],cantidad:[0,[t.kI.required],[]],formatoBotella:["",[],[]],tipoVino:["",[],[]],anioCosecha:["",[],[]],cepa:["",[],[]],tipoCierre:["",[],[]],etiqueta:["",[],[]]})}onAddProducto(){this.productos.push(this.getNewProduct()),this.panelExpanded.push(!0)}onDeleteProducto(n){this.productos.removeAt(n),this.panelExpanded.splice(n,1)}onSave(){this.ComercialService.onSave(this.comercialForm.value).subscribe({next:()=>{g().fire({position:"top-end",title:"Solicitud Enviada",showConfirmButton:!1,icon:"success",timerProgressBar:!0,timer:1500,didClose:()=>window.scrollTo({top:0})})},error:n=>{g().fire({title:"Error",text:n,icon:"error"})}}),this.comercialForm.reset(u)}toggleData(n){this.panelExpanded[n]=!this.panelExpanded[n]}buildDate(){const n=new Date;return`Solicitud_Comercial_${n.getFullYear()}_${n.getMonth()}_${n.getDate()}_${n.getHours()}${n.getMinutes()}${n.getSeconds()}`}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:108,vars:16,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],["formArrayName","productos",4,"ngFor","ngForOf"],[1,"prod-row"],[1,"prod-btn",3,"click"],[1,"campo"],["for","fechaEnvio"],[1,"campo-interno"],["id","fechaEnvio","type","text","formControlName","fechaEnvio","placeholder","Fecha de env\xedo"],["class","text-danger",4,"ngIf"],["for","centroCosto"],["id","centroCosto","type","text","formControlName","centroCosto","placeholder","Centro de costo (C.C)"],["for","cuentaContable"],["id","cuentaContable","type","text","formControlName","cuentaContable","placeholder","Cuenta Contable (CTA)"],["for","conceptos"],["id","conceptos","type","text","formControlName","conceptos","placeholder","Conceptos"],["for","tipoEmbalaje"],["id","tipoEmbalaje","type","text","formControlName","tipoEmbalaje","placeholder","Tipo de Embalaje"],["for","clienteNombre"],["id","clienteNombre","type","text","formControlName","clienteNombre","placeholder","Nombre o Raz\xf3n Social"],["for","clienteFono"],["id","clienteFono","type","tel","formControlName","clienteFono","placeholder","Fono del Cliente"],["for","clienteEmail"],["id","clienteEmail","type","email","formControlName","clienteEmail","placeholder","Email del Cliente"],["for","clientePais"],["id","clientePais","type","text","formControlName","clientePais","placeholder","Pa\xeds del Cliente"],["for","clienteDireccion"],["id","clienteDireccion","type","text","formControlName","clienteDireccion","placeholder","Direcci\xf3n del Cliente"],["for","despachoTransporte"],["id","despachoTransporte","type","text","formControlName","despachoTransporte","placeholder","Medio de Transporte / Despacho"],["for","despachoRetira"],["id","despachoRetira","type","text","formControlName","despachoRetira","placeholder","Nombre de la Persona que Retira"],["for","despachoAwb"],["id","despachoAwb","type","text","formControlName","despachoAwb","placeholder","AWB#"],["for","despachoCosto"],["id","despachoCosto","type","number","formControlName","despachoCosto","placeholder","Costo de Env\xedo"],["type","submit","value","Enviar",1,"btn","btn-form"],["formArrayName","productos"],[1,"campo-array",3,"formGroupName"],[1,"close-row",3,"click"],[1,"title-row"],[4,"ngIf","ngIfElse"],["tagCantidad",""],[1,"prod-btn"],["class","btn-del",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn-del",3,"click"],["for","producto"],["list","producto","formControlName","producto"],["id","producto"],[3,"value",4,"ngFor","ngForOf"],["for","cantidad"],["id","cantidad","type","number","formControlName","cantidad","placeholder","Cantidad"],["for","formatoBotella"],["id","formatoBotella","type","text","formControlName","formatoBotella","placeholder","Formato de Botella"],["for","tipoVino"],["id","tipoVino","type","text","formControlName","tipoVino","placeholder","Tipo de Vino"],["for","anioCosecha"],["id","anioCosecha","type","text","formControlName","anioCosecha","placeholder","A\xf1o Cosecha"],["for","cepa"],["id","cepa","type","text","formControlName","cepa","placeholder","Cepa"],["for","tipoCierre"],[1,"campo-radio"],["id","corcho","type","radio","name","tipoCierre","formControlName","tipoCierre","value","corcho","checked","checked",1,"campo-radio-input"],["for","corcho"],["id","rosca","type","radio","name","tipoCierre","formControlName","tipoCierre","value","rosca",1,"campo-radio-input"],["for","rosca"],["for","etiqueta"],["id","etiqueta","type","text","formControlName","etiqueta","placeholder","Etiqueta / Contra etiqueta"],[3,"value"],[1,"text-danger"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Comercial"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Productos"),e.qZA(),e.YNc(10,N,13,6,"div",3),e.TgZ(11,"div",4)(12,"a",5),e.NdJ("click",function(){return r.onAddProducto()}),e._uU(13,"Nuevo Producto"),e.qZA()()(),e.TgZ(14,"fieldset")(15,"legend"),e._uU(16,"Datos de Env\xedo"),e.qZA(),e.TgZ(17,"div",6)(18,"label",7),e._uU(19,"Fecha de env\xedo: "),e.qZA(),e.TgZ(20,"div",8),e._UZ(21,"input",9),e.YNc(22,R,2,1,"span",10),e.qZA()(),e.TgZ(23,"div",6)(24,"label",11),e._uU(25,"Centro de costo (C.C): "),e.qZA(),e.TgZ(26,"div",8),e._UZ(27,"input",12),e.YNc(28,I,2,1,"span",10),e.qZA()(),e.TgZ(29,"div",6)(30,"label",13),e._uU(31,"Cuenta Contable (CTA): "),e.qZA(),e.TgZ(32,"div",8),e._UZ(33,"input",14),e.YNc(34,k,2,1,"span",10),e.qZA()(),e.TgZ(35,"div",6)(36,"label",15),e._uU(37,"Conceptos: "),e.qZA(),e.TgZ(38,"div",8),e._UZ(39,"input",16),e.YNc(40,j,2,1,"span",10),e.qZA()(),e.TgZ(41,"div",6)(42,"label",17),e._uU(43,"Tipo de Embalaje: "),e.qZA(),e.TgZ(44,"div",8),e._UZ(45,"input",18),e.YNc(46,J,2,1,"span",10),e.qZA()()(),e.TgZ(47,"fieldset")(48,"legend"),e._uU(49,"Datos del Cliente"),e.qZA(),e.TgZ(50,"div",6)(51,"label",19),e._uU(52,"Nombre / Raz\xf3n Social: "),e.qZA(),e.TgZ(53,"div",8),e._UZ(54,"input",20),e.YNc(55,V,2,1,"span",10),e.qZA()(),e.TgZ(56,"div",6)(57,"label",21),e._uU(58,"Fono: "),e.qZA(),e.TgZ(59,"div",8),e._UZ(60,"input",22),e.YNc(61,D,2,1,"span",10),e.qZA()(),e.TgZ(62,"div",6)(63,"label",23),e._uU(64,"Email: "),e.qZA(),e.TgZ(65,"div",8),e._UZ(66,"input",24),e.YNc(67,Y,2,1,"span",10),e.qZA()(),e.TgZ(68,"div",6)(69,"label",25),e._uU(70,"Pa\xeds: "),e.qZA(),e.TgZ(71,"div",8),e._UZ(72,"input",26),e.YNc(73,S,2,1,"span",10),e.qZA()(),e.TgZ(74,"div",6)(75,"label",27),e._uU(76,"Direcci\xf3n: "),e.qZA(),e.TgZ(77,"div",8),e._UZ(78,"input",28),e.YNc(79,Q,2,1,"span",10),e.qZA()()(),e.TgZ(80,"fieldset")(81,"legend"),e._uU(82,"Datos del Despacho"),e.qZA(),e.TgZ(83,"div",6)(84,"label",29),e._uU(85,"Transporte / Despacho: "),e.qZA(),e.TgZ(86,"div",8),e._UZ(87,"input",30),e.YNc(88,L,2,1,"span",10),e.qZA()(),e.TgZ(89,"div",6)(90,"label",31),e._uU(91,"Despachador: "),e.qZA(),e.TgZ(92,"div",8),e._UZ(93,"input",32),e.YNc(94,B,2,1,"span",10),e.qZA()(),e.TgZ(95,"div",6)(96,"label",33),e._uU(97,"AWB#: "),e.qZA(),e.TgZ(98,"div",8),e._UZ(99,"input",34),e.YNc(100,G,2,1,"span",10),e.qZA()(),e.TgZ(101,"div",6)(102,"label",35),e._uU(103,"Costo de Env\xedo: "),e.qZA(),e.TgZ(104,"div",8),e._UZ(105,"input",36),e.YNc(106,$,2,1,"span",10),e.qZA()()(),e._UZ(107,"input",37),e.qZA()),2&i&&(e.xp6(6),e.Q6J("formGroup",r.comercialForm),e.xp6(4),e.Q6J("ngForOf",r.productos.controls),e.xp6(12),e.Q6J("ngIf",r.isValidField("fechaEnvio")),e.xp6(6),e.Q6J("ngIf",r.isValidField("centroCosto")),e.xp6(6),e.Q6J("ngIf",r.isValidField("cuentaContable")),e.xp6(6),e.Q6J("ngIf",r.isValidField("conceptos")),e.xp6(6),e.Q6J("ngIf",r.isValidField("tipoEmbalaje")),e.xp6(9),e.Q6J("ngIf",r.isValidField("clienteNombre")),e.xp6(6),e.Q6J("ngIf",r.isValidField("clienteFono")),e.xp6(6),e.Q6J("ngIf",r.isValidField("clienteEmail")),e.xp6(6),e.Q6J("ngIf",r.isValidField("clientePais")),e.xp6(6),e.Q6J("ngIf",r.isValidField("clienteDireccion")),e.xp6(9),e.Q6J("ngIf",r.isValidField("despachoTransporte")),e.xp6(6),e.Q6J("ngIf",r.isValidField("despachoRetira")),e.xp6(6),e.Q6J("ngIf",r.isValidField("despachoAwb")),e.xp6(6),e.Q6J("ngIf",r.isValidField("despachoCosto")))},dependencies:[d.sg,d.O5,t._Y,t.YN,t.Kr,t.Fj,t.wV,t._,t.JJ,t.JL,t.sg,t.u,t.x0,t.CE],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding:1rem}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2rem 0 0}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-grow:1;height:6rem}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}.btn-add[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#275995;color:#fff;font-size:5rem;padding:1rem;transition:background-color .3s ease-out;text-align:center;border:none;width:6rem;height:6rem}.btn-add[_ngcontent-%COMP%]:hover{background-color:#1c6bc9;cursor:pointer}.campo-array[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #e8e3d9;padding:1rem}.prod-btn[_ngcontent-%COMP%]{color:#000}.prod-btn[_ngcontent-%COMP%]:hover{color:#2795b6;cursor:pointer}.btn-del[_ngcontent-%COMP%]{color:#000;margin:0 0 0 2rem}.btn-del[_ngcontent-%COMP%]:hover{color:#dc3545;cursor:pointer}.prod-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 1rem 1rem 0}.close-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 0 0}.close-row[_ngcontent-%COMP%]:hover{cursor:pointer}.title-row[_ngcontent-%COMP%]{font-weight:700}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:13rem;padding:0 1rem 0 0}.notify-text[_ngcontent-%COMP%]{margin:0 0 0 13rem}}"]})}return o})();function X(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("solicitante")," ")}}function H(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("producto")," ")}}function K(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("fechaEntrega")," ")}}function W(o,a){if(1&o&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.hij(" ",n.getFieldError("observaciones")," ")}}const _={solicitante:"",producto:"",cubaMezcla:"",fechaEntrega:"",observaciones:""};let ee=(()=>{class o{constructor(n){this.fb=n,this.genericForm=this.fb.group({solicitante:["",[t.kI.required,t.kI.minLength(3)],[]],producto:["",[t.kI.required,t.kI.minLength(3)],[]],cubaMezcla:["",[t.kI.required,t.kI.minLength(3)],[]],fechaEntrega:["",[t.kI.required,t.kI.minLength(3)],[]],observaciones:["",[t.kI.required,t.kI.minLength(3)],[]]})}ngOnInit(){this.genericForm.reset(_)}isValidField(n){return this.genericForm.controls[n].errors&&this.genericForm.controls[n].touched}getFieldError(n){if(!this.genericForm.controls[n])return null;const i=this.genericForm.controls[n].errors||{};for(const r of Object.keys(i))switch(r){case"required":return"Este campo es requerido.";case"minlength":return`Este campo requiere un m\xednimo de ${i.minlength.requiredLength} caracteres.`}return null}onSave(){this.genericForm.invalid?this.genericForm.markAllAsTouched():(console.log(this.genericForm.value),this.genericForm.reset(_))}static#e=this.\u0275fac=function(i){return new(i||o)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:35,vars:5,consts:[[1,"form-banner"],[1,"container"],["autocomplete","off",1,"formulario","container",3,"formGroup","ngSubmit"],[1,"campo"],["for","solicitante"],[1,"campo-interno"],["id","solicitante","type","text","formControlName","solicitante","placeholder","Solicitante"],["class","text-danger",4,"ngIf"],["for","producto"],["id","producto","type","text","formControlName","producto","placeholder","Producto / Vino"],["for","fechaEntrega"],["id","fechaEntrega","type","date","formControlName","fechaEntrega","placeholder","Fecha de Entrega"],["for","observaciones"],["id","observaciones","type","text","formControlName","observaciones","placeholder","Observaciones","cols","20","rows","10"],["type","submit","value","Enviar",1,"btn","btn-form"],[1,"text-danger"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3,"Solicitud Gen\xe9rica"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Esta Solicitud Entregara un vino que se encuentre en Stock. En observaciones puede incluir informaci\xf3n para seleccionar alguna alternativa disponible. "),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(7,"fieldset")(8,"legend"),e._uU(9,"Datos"),e.qZA(),e.TgZ(10,"div",3)(11,"label",4),e._uU(12,"Solicitante: "),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"input",6),e.YNc(15,X,2,1,"span",7),e.qZA()(),e.TgZ(16,"div",3)(17,"label",8),e._uU(18,"Producto / Vino: "),e.qZA(),e.TgZ(19,"div",5),e._UZ(20,"input",9),e.YNc(21,H,2,1,"span",7),e.qZA()(),e.TgZ(22,"div",3)(23,"label",10),e._uU(24,"Fecha de Entrega: "),e.qZA(),e.TgZ(25,"div",5),e._UZ(26,"input",11),e.YNc(27,K,2,1,"span",7),e.qZA()(),e.TgZ(28,"div",3)(29,"label",12),e._uU(30,"Observaciones: "),e.qZA(),e.TgZ(31,"div",5),e._UZ(32,"textarea",13),e.YNc(33,W,2,1,"span",7),e.qZA()()(),e._UZ(34,"input",14),e.qZA()),2&i&&(e.xp6(6),e.Q6J("formGroup",r.genericForm),e.xp6(9),e.Q6J("ngIf",r.isValidField("solicitante")),e.xp6(6),e.Q6J("ngIf",r.isValidField("producto")),e.xp6(6),e.Q6J("ngIf",r.isValidField("fechaEntrega")),e.xp6(6),e.Q6J("ngIf",r.isValidField("observaciones")))},dependencies:[d.O5,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding:1rem}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2rem 0 0}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-grow:1;height:6rem}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}.btn-add[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#275995;color:#fff;font-size:5rem;padding:1rem;transition:background-color .3s ease-out;text-align:center;border:none;width:6rem;height:6rem}.btn-add[_ngcontent-%COMP%]:hover{background-color:#1c6bc9;cursor:pointer}.campo-array[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #e8e3d9;padding:1rem}.prod-btn[_ngcontent-%COMP%]{color:#000}.prod-btn[_ngcontent-%COMP%]:hover{color:#2795b6;cursor:pointer}.btn-del[_ngcontent-%COMP%]{color:#000;margin:0 0 0 2rem}.btn-del[_ngcontent-%COMP%]:hover{color:#dc3545;cursor:pointer}.prod-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 1rem 1rem 0}.close-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 0 0}.close-row[_ngcontent-%COMP%]:hover{cursor:pointer}.title-row[_ngcontent-%COMP%]{font-weight:700}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:13rem;padding:0 1rem 0 0}.notify-text[_ngcontent-%COMP%]{margin:0 0 0 13rem}}"]})}return o})();var oe=c(4270),ne=c(8014);const te=[{path:"",component:(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],hostAttrs:["collision-id","RequestLayout"],decls:3,vars:0,template:function(i,r){1&i&&e._UZ(0,"app-nav-bar")(1,"router-outlet")(2,"app-footer")},dependencies:[s.lC,oe.w,ne.c],styles:["h2[_ngcontent-%COMP%]{margin-bottom:1rem}.contenido-principal[_ngcontent-%COMP%]{display:grid;padding:5rem 0 0}.form-banner[_ngcontent-%COMP%]{display:flex;background-color:#e8e3d9;min-height:25rem;align-items:center;margin:0 0 2rem}.formulario[_ngcontent-%COMP%]{max-width:60rem;margin:0 auto}.formulario[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{background-color:#675145;color:#fff;width:100%;text-align:center;font-weight:700;padding:1rem}.formulario[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]{border:1px solid #000000;margin:0 0 2rem;padding:1rem}.campo[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:2rem 0 0}.campo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=radio]), .campo[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .campo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{flex:1;border:1px solid #e1e1e1;padding:1rem}.campo-interno[_ngcontent-%COMP%]{display:flex;flex-grow:1;height:6rem}.campo-radio[_ngcontent-%COMP%]{margin:0 2rem 0 0}.campo-radio-input[_ngcontent-%COMP%]{margin:0 1rem 0 0}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.btn-form[_ngcontent-%COMP%]{margin:2rem 0}.btn-add[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#275995;color:#fff;font-size:5rem;padding:1rem;transition:background-color .3s ease-out;text-align:center;border:none;width:6rem;height:6rem}.btn-add[_ngcontent-%COMP%]:hover{background-color:#1c6bc9;cursor:pointer}.campo-array[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #e8e3d9;padding:1rem}.prod-btn[_ngcontent-%COMP%]{color:#000}.prod-btn[_ngcontent-%COMP%]:hover{color:#2795b6;cursor:pointer}.btn-del[_ngcontent-%COMP%]{color:#000;margin:0 0 0 2rem}.btn-del[_ngcontent-%COMP%]:hover{color:#dc3545;cursor:pointer}.prod-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:0 1rem 1rem 0}.close-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 1rem 0 0}.close-row[_ngcontent-%COMP%]:hover{cursor:pointer}.title-row[_ngcontent-%COMP%]{font-weight:700}@media (min-width: 768px){.formulario[_ngcontent-%COMP%]{max-width:120rem}.campo[_ngcontent-%COMP%]{flex-direction:row}.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:13rem;padding:0 1rem 0 0}.notify-text[_ngcontent-%COMP%]{margin:0 0 0 13rem}}"]})}return o})(),children:[{path:"internal",component:T},{path:"comercial",component:z},{path:"generic",component:ee},{path:"**",redirectTo:"internal"}]}];let re=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[s.Bz.forChild(te),s.Bz]})}return o})();var ie=c(6208);let ae=(()=>{class o{static#e=this.\u0275fac=function(i){return new(i||o)};static#o=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[d.ez,re,t.UX,ie.m]})}return o})()}}]);