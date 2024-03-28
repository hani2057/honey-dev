import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  // 회원가입
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  // 아이디 중복확인
  checkUsername(username: string) {
    return `This action checks if ${username} is duplicated`;
  }

  // 회원탈퇴
  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  // 로그인
  login(loginDTO: LoginDTO) {
    return 'This action let valid user log in'
  }

  // 로그아웃
  logout() {
    return 'This action let user log out'
  }
}
