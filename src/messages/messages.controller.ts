import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  getOneById(@Param('id') messagesId: string) {
    return this.messagesService.findOne(messagesId);
  }

  @Post()
  createOne(@Body() dto: CreateMessageDto) {
    return this.messagesService.create(dto.content);
  }
}
