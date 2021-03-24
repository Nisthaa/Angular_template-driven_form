import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent{
    siteKey:string;
    constructor(){
        this.siteKey = '6LfzvYsaAAAAACwxS6pUNrgnQOSH3MSaBIc_fUYo';
    }
  validate(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo(0,0);
      }
    form.classList.add('was-validated');
  }
  

  onSubmit(){
      Swal.fire("Success!", "Form Submitted!", "success")
      .then (function(){ 
        window.location.reload();
    });
      
  }

  

  
/*
  captcha() {
    const equations = ["+", "-", "*", "/"];
    let expectedOutput: number;
    let capEqu = "";
    generateCapEqu();
    function generateCapEqu() {
        var operation = generateRandomOp();
        var num1 = genRandomNo(100);
        var num2 = genRandomNo(10);
        var division = check(operation, num1, num2);
        if (division != 0) {
            num1 = division;
        }
        capEqu = num1 + " " + operation + " " + num2;
        document.getElementById("#captcha_equ").textContent = capEqu;
        expectedOutput = (calOut(num1, num2, operation));
        console.log(expectedOutput);  //print expected output of equation
    }
    function check(operation: string, num1: number, num2: number) {
        if (operation == '/') {
            if (num1 / num2 == 0) {
                return 0;
            }
            else {
                var a = (num1 / num2);
                return num2 * a;
            }
        }
        else {
            return 0;
        }

    }
    function calOut(num1: number, num2: number, operation: string) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return (num1 / num2);
        }
    }
    function generateRandomOp() {
        const index = Math.floor(Math.random() * 10) % 4;
        return equations[index];
    }
    function genRandomNo(num: number) {
        return Math.floor(Math.random() * num) + Math.floor(Math.random() * 10);
    }


    document.getElementById("#answer").onkeyup = message;
    function message(){

        var input:number = Number((<HTMLInputElement>document.getElementById("#answer")).value);
        var slideSpeed = 200;

        document.getElementById("#message").style.display = 'none';
        //$('#message').hide();

        if (input == expectedOutput) {

            // $('button[type=submit]').removeAttr('disabled');
            slideDown(document.getElementById("#success"));
            slideUp(document.getElementById("#fail"));

            // $('#success').slideDown(slideSpeed);
            // $('#fail').slideUp(slideSpeed);

        } else {

            // $('button[type=submit]').attr('disabled', 'disabled');
            // $('#fail').slideDown(slideSpeed);
            // $('#success').slideUp(slideSpeed);
            slideDown(document.getElementById("#fail"));
            slideUp(document.getElementById("#sucess"));

        }

    };

    function slideUp(el) {
      var elem = document.getElementById(el);
      elem.style.transition = "all 2s ease-in-out";
      elem.style.height = "0px";
    }
    function slideDown(el) {
      var elem = document.getElementById(el);
      elem.style.transition = "all 2s ease-in-out";
      elem.style.height = "20px";
    }

    document.getElementById('.reset').onclick = reset;
    function reset () {
        generateCapEqu();
        // $("#answer").val('');
        document.getElementById("#answer").textContent = '';
        // var slideSpeed = 200;
        // $('#message').slideDown(slideSpeed);
        // $('#fail').slideUp(slideSpeed);
        // $('#success').slideUp(slideSpeed);
        // $('button[type=submit]').attr('disabled', 'disabled');
        slideDown(document.getElementById("#message"));
        slideUp(document.getElementById("#fail"));
        slideUp(document.getElementById("#sucess"));

    };

}*/
  

}
