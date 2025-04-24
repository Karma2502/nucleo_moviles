import 'package:flutter/material.dart';

class Formulario extends StatelessWidget {
  const Formulario({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(children: [
        Text("FORMULARIO"),
        formularioUser(context)
      ],),
    );
  }
}

Widget formularioUser (context){
  TextEditingController nombre = TextEditingController();
  TextEditingController edad = TextEditingController();
  return Column(
    children: [
      TextField(
        controller: nombre,
        decoration: InputDecoration(
          border: OutlineInputBorder()
        ),
      ),

      TextField(
        controller: edad,
        decoration: InputDecoration(
          border: OutlineInputBorder()
        ),
      ),
      FilledButton(onPressed: ()=>saludo(nombre, edad, context), child: Text("Aceptar"))
    ],
  );
}

Future saludo( nombre, edad, context ){
  return showDialog(context: context, builder: (BuildContext context ){
    return AlertDialog(
      title: Text("Saludo"),
      content: Text("Hola "+ nombre.text + "tienes "+ edad.text + " años"),
    );
  } );


}