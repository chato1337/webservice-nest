import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UsersService) {}

  @Get()
  getUsers(
    @Query('limit') limit = 10,
    @Query('offse') offset = 0
  ) {
    return 'user list'
  }

  @Get(':id')
  getUserDetails(@Param('id') id: string) {
    return `id: ${id}`
  }

  @Post()
  createUser(@Body() data: any) {
    return data
  }

  @Put(':id')
  editUser(@Param('id') id: string, @Body() payload: any) {
    return `user to edit ${id}`
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return id
  }
}
