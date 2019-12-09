# Começando com o git básico

Abra o git na pasta que deseja baixar o projeto. Clique com o direito e selecione o "git bash here".

Você começará o prompt

```git clone https://github.com/brunoguerra/aulas-javascript.git```

Para atualizar, use o comando pull do git
```
git pull origin master
```

Para saber como está agora o seu repositório:

```git status```

Para adicionar todos os arquivos

```git add .```

Para adicionar apenas um arquivo por vez no commit

```git add nome_do_arquivo```
```git add nome_da_pasta```

Faça o commit das alterações, para persistir as informações

```git commit -m "Mensagem complexa"```

Depois de criar uma fotografia da ultima versão do seu código, envie ao servidor

```git push origin master```

# aulas-javascript

JavaScript priemiro residente em um arquivo HTML

# Controle de Execução

```javascript
// If - Else⇵
if ((age >= 14) && (age < 19)) {        // condição lógica
    status = "Elegível.";               // executa se a condição é verdadeira (true)
} else {                                // bloco else é opcional
    status = "Não elegível.";           // executado se a condição foi falso (false)
}
```

# Controle de execução - Switch/case

```javascript
// comando para controle de fluxo Switch
switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
}
```


# ES6 - Declaração de Variável
```javascript
// const apenas uma vez atribuida
const a;                          // variável
const b = "init";                 // string
const c = "Hi" + " " + "Joe";     // = "Hi Joe"
const d = 1 + 2 + "3";            // = "33"
const e = [2,3,5,8];              // array

// posso reusar a varível para outro valor, em uma nova atribuição
let f = false;                  // boolean
let g = /()/;                   // RegEx
let h = function(){};           // function object
let PI = 3.14;                // constant
let a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable
```

# Valores

O tipo da variável é inferida pelo tipo.

```javascript
false, true                     // boolean
18, 3.14, 0b10011, 0xF6, NaN    // number
"flower", 'John'                // string
undefined, null , Infinity      // special
```

# Operadores

```javascript
Operators
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x = 100 % 48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement
```

# Básico

```javascript
// Básico ➤

// Script na página html (dentro da tag head ou body)
<script type="text/javascript">  ...
</script>

// Incluindo um arquivo js
<script src="filename.js"></script>

// Delay de 1 segundo
setTimeout(function () {
	
}, 1000);

// funções = Functions
function addNumbers(a, b) {
    return a + b; ;
}
x = addNumbers(1, 2);
// editar um elemento no DOM (Objetos no browser)
document.getElementById("elementID").innerHTML = "Hello World!";
// saída
console.log(a);             // escreve no console do browser
document.write(a);          // escreve HTML
alert(a);                   // alerta básico (Não muito usado)
confirm("Really?");         // Diálogo sim/não, retorna true/false depende do usuário
prompt("Your age?","0");    // Pede uma entrada do usuário. initial value
// Comments
/* Multi line
   comment */
// One line
```

### Controle de Repetição
```javascript
for (var i = 0; i < 10; i++) {
    document.write(i + ": " + i*3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum + = a[i];
}               // parsing an array
html = "";
for (var i of custOrder) {
    html += "<li>" + i + "</li>";
}
// Laço de repetição com o while (enquanto)
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}

//if que repete?

// do while loop (garante a primeira execução, depois testa se repete)
var i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end

// Break
for (var i = 0; i < 10; i++) {
    if (i == 5) { break; }          // stops and exits the cycle
    document.write(i + ", ");       // last output number is 4
}

// Continue
for (var i = 0; i < 10; i++) {
    if (i == 5) { continue; }       // skips the rest of the cycle
    document.write(i + ", ");       // skips 5
}
```

# Tipo de dados

```javascript

var age = 18;                           // number 
var name = "Jane";                      // string
var name = {first:"Jane", last:"Doe"};  // object
var truth = false;                      // boolean
var sheets = ["HTML","CSS","JS"];       // array
var a; typeof a;                        // undefined
var a = null;                           // value null
Objects
var student = {                 // object name
    firstName:"Jane",           // list of properties and values
    lastName:"Doe",
    age:18,
    height:170,
    fullName : function() {     // object function
       return this.firstName + " " + this.lastName;
    }
}; 
student.age = 19;           // setting value
student[age]++;             // incrementing
name = student.fullName();  // call object function

```
