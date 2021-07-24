import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}
    
    // private readonly items : Item[] = [
    //     {
    //         id: "73837", 
    //         name: "Item One",
    //         Qty : 100,
    //         description : 'This is Item One'
    //     },
    //     {
    //         id: "7333", 
    //         name: "Item Two",
    //         Qty : 200,
    //         description : 'This is Item Two'
    //     }

    // ];


    // findAll() : Item[] {
    //     return this.items
    // }

    async findAll() : Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findOne(id:string) : Promise<Item> {
        return await this.itemModel.findOne({_id:id})
    }

    async create(item:Item) : Promise<Item>{
        const newItem = new this.itemModel(item);
        return await newItem.save()
    }

    async delete(id:string):Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id)
    }

    async update(id:string, item:Item) : Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item, {new : true})
    }

    // async findOne(id:string) : Item{
    //     return this.items.find(item => item.id === id)
    // }

}
