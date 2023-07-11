import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['UUID']['output'];
  isRightAnswer: Scalars['Boolean']['output'];
  question?: Maybe<Question>;
  questionId: Scalars['UUID']['output'];
  text: Scalars['String']['output'];
};

export type Chapter = {
  __typename?: 'Chapter';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  subChapters: Array<SubChapter>;
  successRate?: Maybe<Scalars['Float']['output']>;
  test: Test;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer: Answer;
  createChapter: Chapter;
  createUser: User;
};


export type MutationCreateAnswerArgs = {
  answer: Scalars['String']['input'];
  questionId: Scalars['UUID']['input'];
};


export type MutationCreateChapterArgs = {
  order: Scalars['Int']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  chapter: Chapter;
  chapters: Array<Chapter>;
  subChapter: SubChapter;
  subChaptersFromChapter: Array<SubChapter>;
  users: Array<User>;
};


export type QueryChapterArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySubChapterArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySubChaptersFromChapterArgs = {
  chapterId: Scalars['UUID']['input'];
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  id: Scalars['UUID']['output'];
  questionText: Scalars['String']['output'];
  test?: Maybe<Test>;
  testId: Scalars['UUID']['output'];
};

export type SubChapter = {
  __typename?: 'SubChapter';
  chapter?: Maybe<Chapter>;
  chapterId: Scalars['UUID']['output'];
  docWay?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type SubChapterProgress = {
  __typename?: 'SubChapterProgress';
  id: Scalars['UUID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  subChapter?: Maybe<SubChapter>;
  subChapterId: Scalars['UUID']['output'];
  userProgress?: Maybe<UserProgress>;
  userProgressId: Scalars['UUID']['output'];
};

export type Test = {
  __typename?: 'Test';
  chapter?: Maybe<Chapter>;
  chapterId: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  questions: Array<Question>;
};

export type TestProgress = {
  __typename?: 'TestProgress';
  id: Scalars['UUID']['output'];
  maxScore: Scalars['Int']['output'];
  test?: Maybe<Test>;
  testId: Scalars['UUID']['output'];
  userProgress: UserProgress;
  userProgressId: Scalars['UUID']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  userProgress?: Maybe<UserProgress>;
};

export type UserProgress = {
  __typename?: 'UserProgress';
  id: Scalars['UUID']['output'];
  subChapterProgresses: Array<SubChapterProgress>;
  testProgresses: Array<TestProgress>;
  user?: Maybe<User>;
  userId: Scalars['UUID']['output'];
};

export type GetChaptersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChaptersQuery = { __typename?: 'Query', chapters: Array<{ __typename?: 'Chapter', name: string }> };

export const GetChaptersDocument = gql`
    query GetChapters {
  chapters {
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetChaptersGQL extends Apollo.Query<GetChaptersQuery, GetChaptersQueryVariables> {
    // @ts-ignore
    document = GetChaptersDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
