import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';

import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({

//pagina de inicio statica
  imports: [

    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
}),

//crear la conexion a la base de datos
    MongooseModule.forRoot(process.env.MONGODB!, {
      dbName: 'nest-pokemon',
    }),

    PokemonModule,

    CommonModule,

    SeedModule
  ],
})
export class AppModule {}
