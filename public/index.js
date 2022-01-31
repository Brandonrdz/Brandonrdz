var estudiantes = [
   
    {
    apellidop: "MORALES",
    apellidom: "HERNANDEZ",
    nombre: "JARED",
    edad: 21,
    fechanacimiento: {
    año: 2000,
    mes: "AGOSTO",
    dia: 10
     },
    carrera: "IRYC"
    },
    {
        apellidop: "LEIJA",
        apellidom: "CHAVANA",
        nombre: "EDIEL",
        edad: 21,
        fechanacimiento: {
        año: 2000,
        mes: "SEPTIEMBRE",
        dia: 23
         },
        carrera: "IRYC"
        },
        {
            apellidop: "CRUZ",
            apellidom: "RODRIGUEZ",
            nombre: "BRANDON",
            edad: 23,
            fechanacimiento: {
            año: 1998,
            mes: "MAYO",
            dia: 05
             },
            carrera: "IRYC"
            }
    
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < estudiantes.length; i++) {
    var templ = document.getElementById ('tbodyestudiantes').content.cloneNode(true);
    var celnumero = templ.querySelector("span[name='tbodynumero']");
    var celnombre = templ.querySelector("span[name='tbodynombre']");
    var celedad = templ.querySelector("span[name='tbodyedad']");
    var celcarrera = templ.querySelector("span[name='tbodycarrera']");

    celnumero.innerText = i + 1
    celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
    celedad.innerText = estudiantes[i].edad;
    celcarrera.innerText = estudiantes[i].carrera

    table.append(templ);
}