import { Prop, Schema, SchemaFactory,  } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{
    // id: string // Mongoose will automatically create an _id field, so we don't need to define it here
    @Prop({
        unique: true,
        index: true,
    })
    name: string

    @Prop({
        unique: true,
        index: true,
    })
    no: number

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);