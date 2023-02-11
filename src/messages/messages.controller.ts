import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
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
  async getOneById(@Param('id') messagesId: string) {
    const message = await this.messagesService.findOne(messagesId);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  @Post()
  createOne(@Body() dto: CreateMessageDto) {
    return this.messagesService.create(dto.content);
  }
}
