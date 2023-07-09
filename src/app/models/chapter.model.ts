import { Test } from "./test.model";

export class SubChapter {
  id: string = '';
  name: string = '';
  isCompleted: boolean = false;
}

export class Chapter {
  id: string = '';
  name: string = '';
  // возможно хранить только процент пройденного?
  successRate: number = 0;
  subChapters: SubChapter[] = [];
  test: Test = new Test();
}
