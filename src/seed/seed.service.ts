import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
<<<<<<< HEAD
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
=======
import { Pokemon, PokemonSchema } from 'src/pokemon/entities/pokemon.entity';
>>>>>>> d88c6a8f07436d5ba9f85457377aeaac6be66f4e

@Injectable()
export class SeedService {
  

   constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  constructor(
      @InjectModel(Pokemon.name)
      private readonly pokemonModel: Model<Pokemon>
    ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(({ name, url }) => {

      const segment = url.split('/');
      const no:number = +segment[segment.length - 2];
<<<<<<< HEAD

      pokemonToInsert.push({ name, no });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
=======
      
      const pokemon = await this.pokemonModel.create({ name, no });
    });

    return "seed executed";
>>>>>>> d88c6a8f07436d5ba9f85457377aeaac6be66f4e
  }
}