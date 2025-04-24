import 'package:app_01/screens/FormularioScreens.dart';
import 'package:flutter/material.dart';

voidmain(){
  runApp( MiAplicacion());
}

class MiAplicacion extends StatelessWidget {
  const MiAplicacion({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home:Cuerpo(),
    );
  }
}

class Cuerpo extends StatefulWidget {
  const Cuerpo({super.key});

  @override
  State<Cuerpo> createState() => _CuerpoState();
}

class _CuerpoState extends State<Cuerpo> {
  int indice = 0;
  final List <Widget> paginas = [ Formulario(), Text("Pagina 2") ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar( title: Text("Aplicacion 1"),),
      body: paginas[indice],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: indice,
        onTap: (value) {
          setState(() {
            indice = value;
          });
        },
        
        items: [
        BottomNavigationBarItem(icon: Icon(Icons.data_exploration), label: "Formulario"),
        BottomNavigationBarItem(icon: Icon(Icons.picture_in_picture), label:"Imagenes")
      ]),
    );
  }
}