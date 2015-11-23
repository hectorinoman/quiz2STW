var AbstractQuiz = require('../models/abstract_quiz_model.js');
var ShortQuestion = require('../models/question.js');
var LargeQuestion = require('../models/question.js');
var Answer = require('../models/answer.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: '¿Capital de Italia?',
      respuesta: function(x) {
        return (/^\s*roma\s*$/i).exec(x);
      }
    },

    {
      pregunta: '¿Quien reinaba en España cuando se descubrió América?',
      respuesta: function(x) {
        if ((/\b(Isabel\s+y?\s*Fernando)|(Fernando\s+[ey]?\s*Isabel)\b/i).exec(x)) {
          return true;
        }
        if ((/\breyes\s+cat[oó]licos\b/i).exec(x)) { return true; }
        return false;
      },
    },
      
    {
      pregunta: '¿Qué instrumento musical tiene nombre y forma geométricos?',
      respuesta: function(x) {
        return (/^\s*triangulo\s*$/i).exec(x);
      },
    },
    
        {
      pregunta: ' ¿Qué capital española tiene cinco veces la misma vocal "a"? ',
      respuesta: function(x) {
        return (/^\s*guadalajara\s*$/i).exec(x);
      },
    },
    
            {
      pregunta: ' ¿Con qué nombre firmaba Pablo Picasso sus pinturas? ',
      respuesta: function(x) {
        return (/^\s*picasso\s*$/i).exec(x);
      },
    },
            {
      pregunta: ' ¿Cuál es el fruto del roble?  ',
      respuesta: function(x) {
        return (/^\s*bellota\s*$/i).exec(x);
      },
    },
    
            {
      pregunta: ' ¿Qué pie puso primero Neil Amstrong sobre la Luna? ',
      respuesta: function(x) {
        return (/^\s*izquierdo\s*$/i).exec(x);
      },
    },
    
    
    
   
   
    
    
    { /* Código inseguro. ¡No ejecute esta pregunta salvo en un
         entorno en el que el código del "alumno" sea fiable!
       */
      pregunta: 'Escriba una función JavaScript de nombre <tt>square</tt> '+
      'que recibe un número y devuelve el cuadrado',
      respuesta: function(x) {
        try {
          eval(x); /* DANGER DANGER DANGER */
          var z = Math.floor(Math.random()*100);
          return (square(z) == z*z);
        }
        catch(e) {
          return false;
        }
        return false;
      }
    }
  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<1;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+"= ?",
          respuesta: function(x) {
            return (x == n1*n2);
        }
      })
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x) {
  return this.q[x]['pregunta'];
}

module.exports = Quiz;