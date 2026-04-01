import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('ping')
  handleMessage(@MessageBody() data: string): string {
    console.log('Evento ping recibido:', data);
    return 'pong desde NestJS en Coolify!';
  }
}
