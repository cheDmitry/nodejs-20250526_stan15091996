import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
import { UsersModule } from "../users/users.module";
import { NotificationsModule } from "../notifications/notifications.module";

@Module({
  imports: [UsersModule, NotificationsModule.forRoot({senderEmail: 'me@test.test,', smsGateway: 'bla bla'})],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
