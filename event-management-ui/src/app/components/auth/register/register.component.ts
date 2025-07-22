import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/auth.model';
//import { RegisterRequest } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerRequest: RegisterRequest = { email: '', password: '', firstName: '', lastName: '', role: 'PARTICIPANT' };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.registerRequest).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => this.error = 'Registration failed'
    });
  }
}