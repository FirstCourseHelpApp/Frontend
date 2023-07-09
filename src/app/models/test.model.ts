export class TestQuestion {
  question: string = '';
  options: string[] = [];
  correctAnswer: string = '';
}

export class Test {
  successRate: number = 0;
  testQuestions: TestQuestion[] = [];
}
