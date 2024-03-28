import { Controller, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDTO } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 회원가입
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  // 아이디 중복확인
  @Put('checkUsername')
  checkUsername(@Body() username: string) {
    return this.authService.checkUsername(username)
  }

  // 회원탈퇴
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }

  // 로그인
  @Post('login')
  login(@Body() loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }

  // 로그아웃
  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
