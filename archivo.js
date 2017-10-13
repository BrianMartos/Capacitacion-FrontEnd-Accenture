const elementoNombre=
    document.querySelectorAll('input[name="nombreyapellido"]')
const elementoCorreo=
    document.querySelector('input[name="exampleInputEmail1"]')


function onSubmit() {
    let valido = true;
    if (!elementoNombre.value) {
        valido = false;
    }
    alert("The form was submitted")

    return false
    }