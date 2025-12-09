import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';
import { BoardService } from './board.service';

export class CreatePostDto {
  @ApiProperty({
    example: 'Title',
    description: '게시글 제목',
  })
  title: string;

  @ApiProperty({
    example: 'Contents',
    description: '게시글 내용',
  })
  content: string;
}

export class UpdatePostDto {
  @ApiProperty({
    example: '수정된 제목',
    description: '새로운 게시글 제목',
  })
  title: string;

  @ApiProperty({
    example: '수정된 게시글 내용입니다.',
    description: '새로운 게시글 내용',
  })
  content: string;
}

class BoardPost {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // 모든 게시글 조회
  @Get()
  @ApiOperation({
    summary: '모든 게시글 조회',
    description: '전체 게시글 목록을 반환합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공적으로 게시글을 조회했습니다.',
    type: [BoardPost],
  })
  getAllPost() {
    return this.boardService.getAllPost();
  }

  // 특정 게시글 조회
  @Get(':id')
  @ApiOperation({
    summary: '특정 게시글 조회',
    description: '게시글 ID로 단일 게시글을 조회합니다.',
  })
  @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
  @ApiResponse({
    status: 200,
    description: '성공적으로 게시글을 조회했습니다.',
    type: BoardPost,
  })
  getPost(@Param('id') id: string) {
    return this.boardService.getPost(Number(id));
  }

  // 게시글 생성
  @Post()
  @ApiOperation({
    summary: '게시글 생성',
    description: '새로운 게시글을 작성합니다.',
  })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({
    status: 201,
    description: '게시글이 성공적으로 생성되었습니다.',
    type: BoardPost,
  })
  createPost(@Body() body: CreatePostDto) {
    const { title, content } = body;
    return this.boardService.createPost(title, content);
  }

  // 게시글 수정
  @Patch(':id')
  @ApiOperation({
    summary: '게시글 수정',
    description: '기존 게시글의 제목 및 내용을 수정합니다.',
  })
  @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
  @ApiBody({ type: UpdatePostDto })
  @ApiResponse({
    status: 200,
    description: '게시글이 성공적으로 수정되었습니다.',
    type: BoardPost,
  })
  updatePost(@Param('id') id: string, @Body() body: UpdatePostDto) {
    const { title, content } = body;
    return this.boardService.updatePost(Number(id), title, content);
  }

  // 게시글 삭제
  @Delete(':id')
  @ApiOperation({
    summary: '게시글 삭제',
    description: '게시글 ID를 기준으로 삭제합니다.',
  })
  @ApiParam({ name: 'id', description: '게시글 ID', type: Number })
  @ApiResponse({
    status: 200,
    description: '게시글이 성공적으로 삭제되었습니다.',
  })
  deletePost(@Param('id') id: string) {
    return this.boardService.deletePost(Number(id));
  }
}
