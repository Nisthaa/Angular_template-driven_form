import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent{
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
  

}
