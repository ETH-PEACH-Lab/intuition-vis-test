/******************************************************************************
 * This file was generated by langium-cli 3.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import type { LangiumSharedCoreServices, LangiumCoreServices, LangiumGeneratedCoreServices, LangiumGeneratedSharedCoreServices, LanguageMetaData, Module } from 'langium';
import { VisualEditorAstReflection } from './ast.js';
import { DataGrammarGrammar } from './grammar.js';

export const DataGrammarLanguageMetaData = {
    languageId: 'myDSL',
    fileExtensions: ['.myext'],
    caseInsensitive: false
} as const satisfies LanguageMetaData;

export const VisualEditorGeneratedSharedModule: Module<LangiumSharedCoreServices, LangiumGeneratedSharedCoreServices> = {
    AstReflection: () => new VisualEditorAstReflection()
};

export const DataGrammarGeneratedModule: Module<LangiumCoreServices, LangiumGeneratedCoreServices> = {
    Grammar: () => DataGrammarGrammar(),
    LanguageMetaData: () => DataGrammarLanguageMetaData,
    parser: {}
};
