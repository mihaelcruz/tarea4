const inquirer = require('inquirer');
require('colors');

const preguntas=[
{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
        {
            value:'1',
            name:'1. Crear tarea'
        },
        {
            value:'2',
            name:'2. Listar tarea'
        },
        {
            value:'0',
            name:'0. Salir'
        },
    ]
}
];

const inquirerMenu = async()=>{
    console.clear();
    console.log("=======================".green);
    console.log("Seleccione un Opcion".green);
    console.log("=======================\n".green);
    const {opcion} = await inquirer.prompt (preguntas);
    return opcion;
 }

 const pausa = async()=>{
    const question=[
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ]
 }


 module.exports={
    inquirerMenu
 }
