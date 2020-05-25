import '../css/componentes.css';

export const saludar = (nombre) => {
    console.log('Creadno etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, cómo te va?`;

    document.body.append(h1);
}