import { LanguageInput, LanguageRegistration } from '@shikijs/core';

export const lang = {
  // @ts-ignore
  $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
  fileTypes: ['prompt'],
  name: 'prompt',
  patterns: [
    {
      match: '[,]',
      name: 'comma',
    },
    {
      match: 'AND',
      name: 'and',
    },
    {
      match: 'BREAK',
      name: 'break',
    },
    {
      // <ppp:stn position>content<ppp:/stn>
      match: '<\\w+:[^<>]+>',
      name: 'model-bracket',
    },
    {
      captures: {
        0: {
          name: 'model-bracket',
        },
        1: {
          name: 'model-type',
        },
        2: {
          name: 'model-name',
        },
        3: {
          name: 'number',
        },
      },
      match: '<([^:]+):([^:]+):([^>]+)>',
    },
    {
      match: '[<|>]',
      name: 'model-bracket',
    },
    {
      match: '[(|)|\\[|\\]|{|}\\\\]',
      name: 'bracket',
    },
    {
      match: ':\\d*\\.?\\d+|:\\.\\d+',
      name: 'number',
    },
    {
      match: '[:|]',
      name: 'func',
    },
    {
      match: '__.*__',
      name: 'wildcards',
    },
    {
      match: '#.*?$',
      name: 'comment',
    },
  ],

  scopeName: 'source.prompt',
}  satisfies LanguageRegistration;

export const prompt = [lang as any as LanguageRegistration] satisfies LanguageInput;
