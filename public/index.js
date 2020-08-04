$("select").on("change", function() {
      /*obtengo el producto elegido*/
      var opcion = $(this).val();
      switch (opcion) {
        case "1":
          $("img").attr("src", "imagenes/enero.jpg");
          break;
        case "2":
          $("img").attr("src", "imagenes/febrero.jpg");
          break;
        case "3":
          $("img").attr("src", "imagenes/marzo.jpg");
          break;

        case "4":
          $("img").attr("src", "imagenes/abril.jpg");
          break;
        case "5":
          $("img").attr("src", "imagenes/mayo.jpg");
          break;
        case "6":
          $("img").attr("src", "imagenes/junio.jpg");
          break;
        case "7":
          $("img").attr("src", "imagenes/julio.jpg");
          break;
        case "8":
          $("img").attr("src", "imagenes/agosto.jpg");
          break;
        case "9":
          $("img").attr("src", "imagenes/septiembre.jpg");
          break;
        case "10":
          $("img").attr("src", "imagenes/octubre.jpg");
          break;
        case "11":
          $("img").attr("src", "imagenes/noviembre.jpg");
          break;
        case "12":
          $("img").attr("src", "imagenes/diciembre.jpg");
          break;
          default:
            $("img").attr("src", "imagenes/principal.jpg");
            break;
      }
    });
