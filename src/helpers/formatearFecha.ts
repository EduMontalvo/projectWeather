
export const formatearFecha = (fechaOriginal: string): string => {
    /*     const fechaHora = new Date(fechaOriginal); */
    const fecha = new Date(fechaOriginal);

    const dia = fecha.getDate();
    const mes = fecha.toLocaleDateString('default', { month: 'long' });
    const anio = fecha.getFullYear()

    const hora = fecha.toLocaleTimeString();

    const [horas, minuto, segundo] = hora.split(':');

    console.log(hora);
    let horasInt = parseInt(horas,10);
    console.log(horasInt);
    let periodo = '';

    

    if (horasInt > 12) {
        horasInt -= 12;
        periodo = 'PM';
    } else {
        periodo = 'AM';
    }



    console.log(horasInt, periodo);


    /* const fecha = fechaHora.toLocaleDateString();
    const hora = fechaHora.toLocaleTimeString(); */

    /* const fechaActual = new Date(fecha);
    const dia = fechaActual.getDate();
    const mes = fechaActual.toLocaleDateString('default',{month:'long'});
    const anio = fechaActual.getFullYear(); */

    console.log('dia', dia);
    console.log('de ', mes);
    console.log('del ', anio);
    console.log(hora);
    console.log(parseInt(horas));
}
