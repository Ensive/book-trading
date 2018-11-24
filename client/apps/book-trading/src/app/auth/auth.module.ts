import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@client/material';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, MaterialModule, FormsModule],
  declarations: [SignupComponent, LoginComponent]
})
export class AuthModule {}
