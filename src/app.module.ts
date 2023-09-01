import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { PostgresConfigService } from './config/postgres.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    UsuarioModule,
    ConfigModule.forRoot({
      isGlobal:true,      


    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService
      ]
    })
  ],
})
export class AppModule {}
