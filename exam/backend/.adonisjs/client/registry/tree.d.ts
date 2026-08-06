/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessTokens: {
      store: typeof routes['auth.access_tokens.store']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
    accessTokens: {
      destroy: typeof routes['profile.access_tokens.destroy']
    }
  }
  questions: {
    index: typeof routes['questions.index']
    store: typeof routes['questions.store']
    show: typeof routes['questions.show']
    update: typeof routes['questions.update']
    destroy: typeof routes['questions.destroy']
    types: typeof routes['questions.types']
  }
  examAuthorings: {
    index: typeof routes['exam_authorings.index']
    store: typeof routes['exam_authorings.store']
    show: typeof routes['exam_authorings.show']
    update: typeof routes['exam_authorings.update']
    destroy: typeof routes['exam_authorings.destroy']
    showQuestion: typeof routes['exam_authorings.show_question']
  }
  examPapers: {
    index: typeof routes['exam_papers.index']
    store: typeof routes['exam_papers.store']
    show: typeof routes['exam_papers.show']
    update: typeof routes['exam_papers.update']
    destroy: typeof routes['exam_papers.destroy']
  }
}
