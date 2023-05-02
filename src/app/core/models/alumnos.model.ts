export class Alumnos {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
   //  public number: number| null,
     public fechaDeEntregable: Date,
     public  promedio: number,
    ) {}
  }

  export interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    role: string;
    email: string;
    token: string;
  }