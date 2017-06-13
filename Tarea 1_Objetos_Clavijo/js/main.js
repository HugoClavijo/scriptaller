var listaUsuarios = {administradores:[], candidatos:[], votantes:[]};

class Usuario {
    constructor (user, pass, name, id){
        this.user = user;
        this.pass = pass;
        this.name = name;
        this.id = id;
    }
}

class Administrador extends Usuario{
    constructor (user, pass, name, id, cel, email){
        super(user, pass, name, id);
        this.cel = cel;
        this.email = email;
    }
    
     static listarTodo(listaUsuarios) {
        var body = document.getElementsByTagName("body")[0];
        var title = document.createElement('h1');
        var tablaUsuarios = document.createElement('table');
        var strTabla = "<thead><th>Role</th><th>User</th><th>Pass</th><th>Name</th></thead><tbody>";
        
        for (var userType in listaUsuarios){
            for (var user of listaUsuarios[userType]){
                strTabla += "<tr><td>" + userType + "</td><td>" + user.user + "</td><td>" + user.pass + "</td><td>" + user.name + "</td>"
            } 
        }
        strTabla += "</tbody>";
        title.innerHTML = "Lista De Usuarios";
        tablaUsuarios.innerHTML = strTabla;
        body.appendChild(title);
        body.appendChild(tablaUsuarios);
    }
    
    
    static ordenarPorNombre(listaUsuarios) {
        for (var userType in listaUsuarios){
            listaUsuarios[userType].sort((a, b) => a.name > b.name);
        }
    }
    
}
    

class Votante extends Usuario{
    constructor (user, pass, name, id, cedula){
        super(user, pass, name, id);
        this.cedula = cedula;
    }
    
    votar(candidato) {
        candidato.votos++;
    }
}

class CandidatoPresidencial extends Usuario{
    constructor (user, pass, name, id, partido, numeroDeLista){
        super(user, pass, name, id);
        this.partido = partido;
        this.numeroDeLista = numeroDeLista;
        this.votos = 0;
    }
}


function listar() {
    listaUsuarios.administradores.push(
        new Administrador('batman', 'gotham','Bruce Wayne', '1', '+593-888-8888', 'BruceWayne@WayneEnterprises.com'));
    
    listaUsuarios.candidatos.push(
        new CandidatoPresidencial('jgordon', '123', 'James Gordon', '1', 'GCPD', '20'),
        new CandidatoPresidencial('hdent', '456', 'harvey Dent', '2', 'GCDA', '11'));
    
    listaUsuarios.votantes.push(
        new Votante('hugoc', '1234', 'Hugo Clavijo', '1', '0999999999'), 
        new Votante('juank', '5678', 'Juan Carlos', '2', '0888888888'), 
        new Votante('nate', 'abcd', 'Natan Cordova', '3', '0777777777'));
    
    Administrador.listarTodo(listaUsuarios);
    
    listaUsuarios.candidatos[0].mostrarVotos();
    listaUsuarios.candidatos[1].mostrarVotos();
    
    listaUsuarios.votantes[0].votar(listaUsuarios.candidatos[0]);
    listaUsuarios.votantes[1].votar(listaUsuarios.candidatos[0]);
    listaUsuarios.votantes[2].votar(listaUsuarios.candidatos[1]);
    
    listaUsuarios.candidatos[0].mostrarVotos();
    listaUsuarios.candidatos[1].mostrarVotos();
    
    Administrador.ordenarPorNombre(listaUsuarios);
    Administrador.listarTodo(listaUsuarios);
    
    document.getElementById('A').disabled=true;
    document.bt1.disabled = true;
} 

function hide_fun() {
        document.getElementById('link').innerHTML = " "; 
        listar();
      }


