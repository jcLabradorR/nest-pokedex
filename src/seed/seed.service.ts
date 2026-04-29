import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance} from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon, PokemonSchema } from 'src/pokemon/entities/pokemon.entity';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance =axios;

  constructor(
      @InjectModel(Pokemon.name)
      private readonly pokemonModel: Model<Pokemon>
    ) {}

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');

    data.results.forEach(async ({ name, url }) => {
      const segment = url.split('/');
      console.log(segment);
      const no:number = +segment[segment.length - 2];
      
      const pokemon = await this.pokemonModel.create({ name, no });
    });

    return "seed executed";
  }
}