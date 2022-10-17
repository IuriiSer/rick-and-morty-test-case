import { DocumentNode } from 'graphql';
import { IExecutableSchemaDefinition } from '@graphql-tools/schema';

import CharacterSchema from './character/CharacterSchema';
import CharacterResolvers from './character/CharacterResolver';

export const Schemas: DocumentNode[] = [CharacterSchema];
export const Resolvers: IExecutableSchemaDefinition['resolvers'] = [CharacterResolvers];
