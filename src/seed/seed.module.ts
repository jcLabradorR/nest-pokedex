import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
<<<<<<< HEAD
import { CommonModule } from 'src/common/common.module';
=======
>>>>>>> d88c6a8f07436d5ba9f85457377aeaac6be66f4e

@Module({
  controllers: [SeedController],
  providers: [SeedService],
<<<<<<< HEAD
  imports: [PokemonModule, CommonModule],
=======
  imports: [PokemonModule]
>>>>>>> d88c6a8f07436d5ba9f85457377aeaac6be66f4e
})
export class SeedModule {}
