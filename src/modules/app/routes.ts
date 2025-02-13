import { Routes } from '@nestjs/core';
import { AuthModule } from '../auth';
export const routes: Routes = [
  {
    path: '/auth',
    module: AuthModule,
  },
];
