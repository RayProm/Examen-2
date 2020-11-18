const btnLoggin = document.getElementById('btnLoggin')
const btnRegist = document.getElementById('btnRegist')
const btnprod1 = document.getElementById('prod1')
const btnprod2 = document.querySelector('#prod2')
const btnprod3 = document.querySelector('#prod3')
const cerrarSesion = document.querySelector('#cerrar')
const stock1 = document.getElementById('stock1')
const stock2 = document.getElementById('stock2')
const stock3 = document.getElementById('stock3')
const compra = document.getElementById('compra')

const usuarios = []
let option;
let emailActual;
let email;
let password;
const contenedor = document.getElementById('idCarrito');

const usuarioExistente = function(emailR) {
	for(let user in usuarios) {
	 if (emailR == (usuarios[user].email)) 
	 	return true;
	}
}

const revisarUsuario = function(emailU, passwordU) {
	for(let user in usuarios) {
	 if (emailU === (usuarios[user].email) && passwordU === (usuarios[user].contraseña)) 
	 	return true;
	}
}

const añadirUsuario = function(nombre, apellido, email, contraseña) {
  let user = new usuario(nombre, apellido, email, contraseña)
  usuarios.push(user);
}
class usuario {
	constructor (nombre, apellido, email, contraseña) {
		this.name = name
		this.apellido = apellido
		this.emai = email
		this.contraseña = contraseña
		this.carrito = []	
	}
	addProduct (producto) {
		this.carrito.push(producto)
	}
  	getProducts () {
    	return this.carrito;
	}
}

const producto1 = {
	nombre: 'Dulce de higo',
	precio: '88.90'
}

const producto2 = {
	nombre: 'Mermelada de higos',
	precio: '45.50'
}

const producto3 = {
	nombre: 'Galletas con relleno de higo',
	precio: '30.22'
}

if(contenedor) {
	
}

const agregar = function(producto){
	const n = document.createElement('div')
	n.textContent = (producto.nombre + ' $' + producto.precio);
	n.classList.add('textoNombre')
	contenedor.appendChild(n)
}



if(btnLoggin) {
	btnLoggin.addEventListener('click',() =>{
	email = document.getElementById('email-e')
	password = document.getElementById('contraseña-e')
	let acceso;
	if(email == '' || password == '')
		window.alert("Todos los campos deben estar llenos")
	else
		acceso = revisarUsuario(email, password)
		if(acceso == true)
			{
				emailActual = email
				var a = document.createElement('a');
				a.href = "inicio.html";
				a.click();
			}
		else
			window.alert("Algun campo esta incorrecto o no esta registrado");
	})
}

if(btnRegist) {
	btnRegist.addEventListener('click',() =>{
	
	const name = document.querySelector('#nombre-r')
	const lName = document.querySelector('#apellido-r')
	const email = document.querySelector('#email-r')
	const password = document.querySelector('#contraseña-r')
	if(email === '' || password === '' || name === '' || lName === '')
		alert("Todos los campos deben estar llenos")
	else
		if(usuarioExistente(email))
			alert("El email ya esta registrado")
		else
			{
			añadirUsuario(name, lName, email, password);
			localStorage.setItem('usuarios', JSON.stringify(usuarios));
			var a = document.createElement('a');
				a.href = "inicio.html";
				a.click();
			}
	})
}

const buscarUsuario = function(producto){
	for(let user in usuarios) {
	 if (emailActual === (usuarios[user].email)) 
	 	usuarios[user].email
	}
}
const costo = function(){
	let total = 0;
	for(let user in usuarios) {
	 if (emailActual === (usuarios[user].email)) 
	 	for (var i = 0; i < usuarios[user].carrito.length; i++) {
	 		total = total + usuarios[user].carrito[i].precio;
	 	}
	}
	compra.textContent = ('$' + total);
}
if(cerrarSesion){
	cerrarSesion.addEventListener('click', function (){
	localStorage.removeItem('usuarios')
	})
}
if(btnprod1){
	btnprod1.addEventListener('click', function (){	
	let f = 0;
	f = parseInt(stock1.textContent)
	if(f>0){
		if(producto1){
			agregar(producto1);
			costo();
			stock1.textContent = (f-1);
		}
	}
	else
		window.alert("No hay stock")
	})
}
if(btnprod2){
	btnprod2.addEventListener('click', function (){
	let f = 0;
	f = parseInt(stock2.textContent())
	if(f>0){
		stock2.textContent = (f-1);
		agregar(producto2);
		costo();
	}
	else
		window.alert("No hay stock")
	
	})
}
if(btnprod3){
	btnprod3.addEventListener('click', function (){
	let f = 0;
	f = parseInt(stock3.textContent())
	if(f>0){
		stock3.textContent = (f-1);
		agregar(producto3);
		costo();
	}
	else
		window.alert("No hay stock")
})
}

if(compra){
	compra.addEventListener('click', function (){
	for(let user in usuarios) {
	 if (emailActual === (usuarios[user].email)) 
	 	usuarios[user].carrito.splice();	
	}
	})
}
