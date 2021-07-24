import { Controller, Get, Post, Delete, Put, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';


@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService : ItemsService){}

    // @Get()
    // findAll() : string {
    //     return 'Get all Items' 
    // }

    // @Get()
    // findAll() : Item[]{
    //     return this.itemsService.findAll()
    // }


    //this is not really a nest way of doing things 
    // @Get()
    // findAll(@Req() req:Request, @Res () res:Response) : Response {
    //     console.log(req.url)
    //     return res.send('Hello World') 
    // }

    // @Get(':id')
    // findOne(@Param() param){
    //     return `Item ${param.id}`    
    // }

    // @Get(':id')
    // findOne(@Param('id') id){
    //     return `Item ${id}`    
    // }

    // @Get(':id')
    // findOne(@Param('id') id) : Item{
    //     return this.itemsService.findOne(id)
    // }

    // @Delete(':id')
    // delete(@Param('id') id){
    //     return `Delete ${id}`
    // }

//     @Post()
//     create(@Body() createItemDto : CreateItemDto): string{
//      return `Name : ${createItemDto.name} DESC : ${createItemDto.description}`
//    }

//    @Put(':id')
//    update(@Body() createItemDto : CreateItemDto, @Param('id') id) : string{
//     return `Name : ${createItemDto.name} DESC : ${createItemDto.description} ID : ${id}`
//    }
    
    

    //*********************  MONGODB END POINTS  ***************** */
     
    @Get()
    findAll() : Promise<Item[]>{
        return this.itemsService.findAll()
    }


    @Get(':id')
    findOne(@Param('id') id) : Promise<Item>{
        return this.itemsService.findOne(id)
    }

    @Post()
    create(@Body() createItemDto : CreateItemDto): Promise<Item>{
     return this.itemsService.create(createItemDto);
   }
   
   @Delete(':id')
    delete(@Param('id') id) : Promise<Item>{
        return this.itemsService.delete(id )
    }

    @Put(':id')
    update(@Body() createItemDto : CreateItemDto, @Param('id') id) : Promise<Item>{
     return this.itemsService.update(id, createItemDto)
    }
 
    
}
