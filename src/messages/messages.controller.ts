import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getOne() {
    return 'all';
  }

  @Get(':id')
  getOneById(@Param('id') messagesId: number) {
    return messagesId;
  }

  @Post()
  createOne() {
    return 'created';
  }
}
