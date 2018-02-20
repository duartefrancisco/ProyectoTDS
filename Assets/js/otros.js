$(document).ready(function() {
    $('select').material_select();
  });

  function mostrar(muestra) 
  {
    if(muestra.checked && muestra.value === "conyugesi")
     {
        document.getElementById("SectionConyuge").style.display = "block";
        
     }else if(muestra.checked && muestra.value === "hijossi")
     {
            document.getElementById("SectionCantidad").style.display = "block";
      }
      else if(muestra.checked && muestra.value === "conyugeno")
     {
            document.getElementById("SectionConyuge").style.display = "none";
      }
      else if(muestra.checked && muestra.value === "hijosno")
     {
            document.getElementById("SectionCantidad").style.display = "none";
      }
  }

  function OcultarSolicitud(ocultar)
  {
    if(ocultar)
    {
      document.getElementById("Formulario").style.display = "none";
      document.getElementById("Cotizacion").style.display = "block";
    }
    else
    {
      document.getElementById("Formulario").style.display = "block";
      document.getElementById("Cotizacion").style.display = "none";
    }
  }
