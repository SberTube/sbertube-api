import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import {
	ConfigService,
	jwtSettings,
	DBConnection,
	serveStaticOptions,
} from '@shared';
import * as dotenv from 'dotenv';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { CommentModule } from './comment/comment.module';
import {} from './shared/settings/app';
dotenv.config();

@Module({
	imports: [
		AuthModule,
		UserModule,
		VideoModule,
		CommentModule,
		ServeStaticModule.forRoot(serveStaticOptions),
		JwtModule.register(jwtSettings),
		TypeOrmModule.forRoot(DBConnection),
	],
	controllers: [AppController],
	providers: [AppService, ConfigService],
})
export class AppModule {}
