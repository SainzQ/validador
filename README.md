
# INTEGRANTES
  Alonso Daniel Lopez Silva
  Cristopher Alexis Miranda Diaz
  Jose Regino Gonzalez

# Descripción del Proyecto
  Este proyecto implementa la validación de CURP y RFC utilizando Angular y PrimeNG. La lógica está estructurada en dos componentes principales: uno para validar CURP y otro   para validar RFC. Ambos componentes se encargan de verificar la integridad y el formato de los datos ingresados según las reglas establecidas para cada uno.

# Componentes
1. ValidarCURPComponent
  Este componente permite la validación de una CURP ingresada por el usuario. Implementa varias validaciones para asegurar que la CURP cumpla con el formato oficial.

# Principales validaciones:

  Formato CURP: Asegura que el CURP tenga 18 caracteres y siga la estructura adecuada: cuatro letras, seis números (fecha de nacimiento), seis letras y números, y dos       caracteres adicionales.
  Sexo: Verifica que el carácter en la posición 11 del CURP sea 'H' o 'M', lo que indica el sexo.
  Estado: Asegura que el identificador del estado sea uno válido dentro de la lista de códigos oficiales.
  Fecha de nacimiento: Comprueba que el año, mes y día en el CURP correspondan a una fecha válida, considerando incluso los años bisiestos.
  Edad: Calcula la edad de la persona a partir de la fecha de nacimiento proporcionada en el CURP.
Cuando se valida correctamente, se emite un evento para informar al componente padre que el CURP ha sido validado.

2. ValidarRFCComponent
Este componente permite la validación del RFC, comparándolo también con el CURP validado previamente.

# Principales validaciones:

  Formato RFC: El RFC debe tener exactamente 13 caracteres y seguir un formato de cuatro letras, seis números, y tres caracteres adicionales.
  Coincidencia con CURP: Los primeros 10 caracteres del RFC deben coincidir con los primeros 10 caracteres del CURP previamente validado.
  Código Destacado
  Validación de la fecha del CURP:
  private validarFechaCURP(curp: string): boolean {
    const fecha = curp.substr(4, 6);
    const año = parseInt(fecha.substr(0, 2));
    const mes = parseInt(fecha.substr(2, 2));
    const dia = parseInt(fecha.substr(4, 2));

      if (mes < 1 || mes > 12) return false;
        if (dia < 1 || dia > 31) return false;

    const añoActual = new Date().getFullYear();
      const siglo = año > (añoActual - 2000) ? 19 : 20;
        const anioCompleto = siglo * 100 + año;

    const esBisiesto = (año: number) => (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    const diasPorMes = [31, esBisiesto(anioCompleto) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return dia <= diasPorMes[mes - 1];
  }
  Este fragmento verifica si la fecha de nacimiento en el CURP es válida considerando reglas de formato, límites de día y mes, y años bisiestos.

# Tecnologías Utilizadas
  Angular: Framework principal para el desarrollo del frontend.
  PrimeNG: Librería de componentes de UI utilizada para mostrar mensajes de éxito y error.
  TypeScript: Lenguaje utilizado para la lógica de validación.
  
 # Instalación y Uso
  Ejecutar npm install para instalar las dependencias.
  Ejecutar ng serve para levantar el servidor de desarrollo.
  Este proyecto permite validar correctamente CURP y RFC, asegurando que ambos cumplen con los requisitos oficiales y que el RFC coincide con la CURP proporcionada.
