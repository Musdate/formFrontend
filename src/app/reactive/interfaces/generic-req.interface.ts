import { Product } from "./product.interface";

export interface GenericRequest {
    _id:                string;
    nombreSolicitud:    string;
    productos:          Product[];
    solicitante:        string;
    fechaEnvio:         string;
    centroCosto:        string;
    cuentaContable:     string;
    conceptos:          string;
    tipoEmbalaje?:      string;
    clienteNombre:      string;
    clienteFono:        string;
    clienteEmail:       string;
    clientePais?:       string;
    clienteDireccion:   string;
    despachoTransporte: string;
    despachoRetira:     string;
    despachoAwb:        string;
    despachoCosto:      number;
}