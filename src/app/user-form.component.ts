import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  success = '';
  error = '';
  loading = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['', Validators.required]
    });
  }

  submit(): void {
    if (this.userForm.invalid) return;
    this.loading = true;
    this.success = '';
    this.error = '';
    this.userService.createUser(this.userForm.value).subscribe({
      next: () => {
        this.success = 'Usuario registrado exitosamente';
        this.userForm.reset();
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al registrar usuario';
        this.loading = false;
      }
    });
  }
}
