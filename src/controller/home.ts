import { Controller, Get, Post } from '@midwayjs/decorator';

@Controller('/')
export class HomeController {
  @Get('/')
  async home() {
    return 'Hello Midwayjs!';
  }

  @Post('/update')
  async updated() {
    return 'update Midway';
  }
}
