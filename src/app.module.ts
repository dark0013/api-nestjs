import { Module, NestModule, RequestMethod } from '@nestjs/common';

import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { LoggerMiddleware } from './users/logger/logger.middleware';
import { AuthMiddleware } from './users/auth/auth.middleware';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer) {
     consumer
       .apply(LoggerMiddleware)
       .forRoutes({ path: '/users', method: RequestMethod.GET },{ path: '/users', method: RequestMethod.POST })
       .apply(AuthMiddleware)
       .forRoutes('users')
  //  .forRoutes({ path: 'hello', method: RequestMethod.GET })
     //  .forRoutes({'*'});
  }
}
