import {ApiOperation, ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.com', description: 'unique email'})
  readonly email: string;
  @ApiProperty({example: '1234', description: 'password'})
  readonly password: string
}
