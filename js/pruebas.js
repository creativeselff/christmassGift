function probarValidarNombre() {
  console.assert(
      validarNombre("") === "Este campo debe tener al menos 1 caracter",
      "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
      validarNombre(
          "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
          ) === "Este campo debe tener menos de 50 caracteres",
      "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("123123") === "El campo nombre solo acepta letras",
    "Validar nombre no valido que el nombre solo tenga letras"
  )

  console.assert(
      validarNombre("Federico") === "",
      "validarNombre fallo con un nombre valido"
  );
}




function probarValidarCiudad() {

console.assert(
    validarCiudad("Buenos Aires") === "",
        "Validar ciudad no funciono con un nombre de ciudad valido"
    );

    console.assert(
        validarCiudad("") === "El Este campo debe tener al menos 1 caracter",
        "Validar ciudad no mostro un error cuando la ciudad es vacia"
    );
}


function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === 
        "El campo descripcion no puede estar vacio",
        "La funcion validar descripcion regalo no valido que el campo no este vacio"
    );
        console.assert (
            validarDescripcionRegalo("asdasldkasdnhlajsdlnalsdjnasljndlasjnldsnaljsdaljnldsanlandjalsjndjansdlnasdnljasndljnasljdnljasndljasnldjnasldnasljndasljnljdnlasnldnaslnjdasnljdljasndljnasljdnjansdnlasjldnaljsndljnaljsndljansdjlnaslndansljdnajlsndlnalsjndlajnsdasndlnasdljasljndlasnadsnjadslnjadlnsjadnsljdnasljasdlnjdnasljdasnljasdlnjasdnljadslnjsdalnjdsnljsalndnasljdnalkjbasdhbsahbdbashdsahkbjsndásjdaljsbnqbnwljeqwljbebwqj"
            ) === "El campo descripcion es muy largo",
                "La funcion validar descripcion regalo no validó que el campo no sea muy largo"
            );

        console.assert(
            validarDescripcionRegalo("Regalo") === "",
            "La funcion validar descripcion regalo no funciono con una descripcion correcta"
        );

        console.assert(
             validarDescripcionRegalo(",.,.,.,.,.,.,.,.,") === "El campo descripcion solo puede tener numeros y letras",
             "La funcion validar descripcion regalo no valido que fuera solo numeros y letras"
        )
    
}



probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();