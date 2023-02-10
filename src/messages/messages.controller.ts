import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getOne() {
    return 'all';
  }

  @Get(':id')
  getOneById(@Param('id') messagesId: string) {
    console.log(messagesId);
    return messagesId;
  }

  @Post()
  createOne(@Body() dto: CreateMessageDto) {
    console.log(dto);
    return 'created';
  }
}
