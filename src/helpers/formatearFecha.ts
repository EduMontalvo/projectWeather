
export const formatearFecha = (fechaOriginal: string): { horaFormateada: string, fechaFormateada: string } => {
    /*     const fechaHora = new Date(fechaOriginal); */
    const fecha = new Date(fechaOriginal);

    const dia = fecha.getDate();
    const mes = fecha.toLocaleDateString('default', { month: 'long' });
    const anio = fecha.getFullYear()

    const hora = fecha.toLocaleTimeString();

    const [horas, minuto] = hora.split(':');

    let horasInt = parseInt(horas, 10);
    let periodo = '';

    horasInt > 12 ? periodo = 'pm' : periodo = 'am';

    horasInt > 12 ? horasInt -= 12 : (horasInt === 0 ? horasInt = 12 : horasInt)

    const horaFormateada = horasInt + ':' + minuto +' '+ periodo;
    const fechaFormateada = dia + ' de ' + mes + ' del ' + anio

    return {
        horaFormateada,
        fechaFormateada
    };

}
