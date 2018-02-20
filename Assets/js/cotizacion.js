//Comienza mi código
//#region Variables y Datos
    var nombreCompleto;
    var diaNacimiento;
    var mesNacimiento;
    var anioNacimiento;
    var conyuge;
    var diaNacimientoConyuge;
    var mesNacimientoConyuge;
    var anioNacimientoConyuge;
    var hijos;
    var cantidadHijos;


const precioBase = 250;


comision = precioBase * 0.30;

// El siguiente es un comentario.
// Por favor no elimine los caracteres // que se encuentran al inicio.

// En la siguiente variable usted debe calcular los cargos correspondientes.
// Puede crear la cantidad de variables necesarias para calcular cada uno
// de los recargos que sean necesarios
recargos = 0;


var totalPagar;
//document.write(totalPagar);
//#endregion Variables y Datos

//#region Validaciones por edad

//Validación de mayor de edad
//Determinar la edad de la persona
function EsMayor()
{
    var hoy = new Date();
    var edad = hoy.getFullYear() - anioNacimiento;
    var m = hoy.getMonth() - mesNacimiento;

    if (m < 0 || (m === 0 && hoy.getDate() < diaNacimiento)) 
    {
        edad--;
    }

    return edad;
}

//Validación es menor de 21
//Sin recargo
function MenosDe21()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad > 18) && (edad < 21))
    {
        _recargo = 0;
    }

    return _recargo;
}

//Validación entre 21 y 25
//Recargo de 1%
function Entre21Y25()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad >= 21) && (edad < 25))
    {
        _recargo = precioBase * 0.01;
    }

    return _recargo;
}

//Validacdion entre 25 y 30
//Recargo de 2%
function Entre25Y30()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad >= 25) && (edad < 30))
    {
        _recargo = precioBase * 0.02;
    }

    return _recargo;
}

//Validacion entre 30 y 40
//Recargo de 5%
function Entre30Y40()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad >= 30) && (edad < 40))
    {
        _recargo = precioBase * 0.05;
    }

    return _recargo;
}

//Validacion entre 40 y 50
//Recargo de 8%
function Entre40Y50()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad >= 40) && (edad < 50))
    {
        _recargo = precioBase * 0.08;
    }

    return _recargo;
}

//Validacion entre 50 y 65
//Recargo 12%
function Entre50Y65()
{
    var edad = EsMayor();
    var _recargo = 0;

    if((edad >= 50) && (edad < 65))
    {
        _recargo = precioBase * 0.12;
    }

    return _recargo;
}

//Validacion mayor de 65
//No se asegura
function MayorDe65()
{
    var edad = EsMayor();
    var asegurado = true;

    if(edad >= 65)
    {
        asegurado = false;
    }

    return asegurado;
}

//#endregion Validaciones por edad

//#region Validaciones por conyuge

//Edad conyuge
function EdadConyuge()
{
    var hoy = new Date();
    var edad = hoy.getFullYear() - anioNacimientoConyuge;
    var m = hoy.getMonth() - mesNacimientoConyuge;

    if (m < 0 || (m === 0 && hoy.getDate() < diaNacimientoConyuge)) 
    {
        edad--;
    }

    return edad;
}

//Validacion Menor a 30
//Recargo de 1%
function MenorA30()
{
    var edad = EdadConyuge();
    var _recargo = 0;

    if(edad < 30)
    {
        _recargo = precioBase * 0.01;
    }

    return _recargo;
}

//Validacion entre 30 y 40
//Recargo de 2%
function ConyugeEntre30Y40()
{
    var edad = EdadConyuge();
    var _recargo = 0;

    if((edad >= 30) && (edad < 40))
    {
        _recargo = precioBase * 0.02;
    }

    return _recargo;
}

//Validacion entre 40 y 50
//Recargo de 3%
function ConyugeEntre40Y50()
{
    var edad = EdadConyuge();
    var _recargo = 0;

    if((edad >= 40) && (edad < 50))
    {
        _recargo = precioBase * 0.03;
    }

    return _recargo;
}

//Validacion entre 50 y 70
//Recargo de 5%
function ConyugeEntre50Y70()
{
    var edad = EdadConyuge();
    var _recargo = 0;

    if((edad >= 50) && (edad < 70))
    {
        _recargo = precioBase * 0.05;
    }

    return _recargo;
}

//#endregion Validacion por conyuge

//#region Validacion por hijos

//Validacion menores de 21
//Recargo de 1%
function RecargoHijos()
{
    var _recargo = 0;

    if((hijos === true) && (cantidadHijos > 0))
    {
        _recargo = precioBase * 0.01;
        _recargo = _recargo * cantidadHijos;
    }

    return _recargo;
}

//#endregion Validacion por hijos

//#region Otras funciones

function ObtenerDatos()
{
    nombreCompleto  = document.getElementById("nombreCompleto").value;
    diaNacimiento  = document.getElementById("diaNacimiento").value;
    mesNacimiento  = document.getElementById("mesNacimiento").value;
    anioNacimiento  = document.getElementById("anioNacimiento").value;
    conyuge  = false;
    diaNacimientoConyuge = document.getElementById("diaNacimientoConyuge").value;
    mesNacimientoConyuge = document.getElementById("mesNacimientoConyuge").value;
    anioNacimientoConyuge = document.getElementById("anioNacimientoConyuge").value;
    hijos = false;
    cantidadHijos = document.getElementById("cantidadHijos").value;

    var elementos = document.getElementsByName("conyuge");
    
    for(var i=0; i<elementos.length; i++) 
    {
        if(elementos[i].checked && elementos[i].value === "conyugesi" )
        {
            conyuge = elementos[i].checked;
        }
    }

    elementos = document.getElementsByName("hijos");
    
    for(var i=0; i<elementos.length; i++) 
    {
        if(elementos[i].checked && elementos[i].value === "hijossi")
        {
            hijos = elementos[i].checked;
        }
    }
}

function ConstruirCotizacion()
{
    ObtenerDatos();

    if((EsMayor() < 18) || (!MayorDe65()))
    {
        alert("No se puede asegurar. Asegurese que la persona es mayor de edad o tiene menos de 65 años");
        OcultarSolicitud(false);
    }
    else
    {
        //Recargos de asegurado principales
        recargos = MenosDe21() + Entre21Y25() + Entre25Y30() + Entre30Y40() + Entre40Y50() + Entre50Y65();

        //Recargos de conyuge asegurado
        recargos = recargos + MenorA30() + ConyugeEntre30Y40() + ConyugeEntre40Y50() + ConyugeEntre50Y70();

        //Recargos de hijos asegurado
        recargos = recargos + RecargoHijos();
    }

    totalPagar = precioBase + comision + recargos;

    var nombre = "Asegurado principal: " + nombreCompleto;
    var cs = (conyuge) ? "Si" : "No";
    var tieneConyuge = "Tiene conyuge: " + cs;
    var hs = (hijos) ? "Si" : "No";
    var tieneHijos = "Tiene hijos: " + hs;

    //Datos cotizacion
    document.getElementById("nombreAsegurado").innerHTML = nombre;
    document.getElementById("conyugeA").innerHTML = tieneConyuge;
    document.getElementById("hijosA").innerHTML = tieneHijos;

    //Recargos cotizacion
    document.getElementById("t1").innerHTML = MenosDe21();
    document.getElementById("t2").innerHTML = Entre21Y25();
    document.getElementById("t3").innerHTML = Entre25Y30();
    document.getElementById("t4").innerHTML = Entre30Y40();
    document.getElementById("t5").innerHTML = Entre40Y50();
    document.getElementById("t6").innerHTML = Entre50Y65();
    document.getElementById("t7").innerHTML = MenorA30();
    document.getElementById("t8").innerHTML = ConyugeEntre30Y40();
    document.getElementById("t9").innerHTML = ConyugeEntre40Y50();
    document.getElementById("t10").innerHTML = ConyugeEntre50Y70();
    document.getElementById("t11").innerHTML = RecargoHijos();
    document.getElementById("t12").innerHTML = comision;
    document.getElementById("t13").innerHTML = totalPagar;
}
//#endregion Otras funciones