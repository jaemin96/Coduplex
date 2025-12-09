import { Injectable } from '@nestjs/common';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class BoardService {
  private posts: Post[] = [
    { id: 1, title: '첫 번째 글', content: 'NestJS 너무 좋네요!' },
  ];

  // 모든 게시글 조회
  getAllPost(): Post[] {
    return this.posts;
  }

  // 특정 게시글 조회
  getPost(id: number): Post {
    return this.posts.find((post) => post.id === id);
  }

  // 게시글 생성
  createPost(title: string, content: string): Post {
    const newPost = { id: this.posts?.length + 1, title, content };
    this.posts.push(newPost);
    return newPost;
  }

  // 게시글 수정
  updatePost(id: number, title: string, content: string): Post {
    const idx = this.posts.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    this.posts[idx] = { ...this.posts[idx], title, content };
    return this.posts[idx];
  }

  // 게시글 삭제
  deletePost(id: number): { success: boolean } {
    this.posts = this.posts.filter((p) => p.id !== id);
    return { success: true };
  }
}
