import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { TicketsModule } from './tickets/tickets.module';
import { MessagesModule } from './messages/messages.module';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, OrganizationModule, UserModule, TicketsModule, MessagesModule, ArticlesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
