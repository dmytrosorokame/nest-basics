import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');

    const messages = JSON.parse(contents) ?? {};

    let newId = 1;

    if (Object.keys(messages).length) {
      newId = Math.max(...Object.keys(messages).map((key) => +key)) + 1;
    }

    const newMessage = { content, id: newId };

    messages[newId] = newMessage;

    await writeFile('messages.json', JSON.stringify(messages));

    return newMessage;
  }
}
