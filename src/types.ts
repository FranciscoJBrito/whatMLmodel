import { ProblemType } from './components/TablesGroup/types';

export interface recentResponses {
  output: {
    alias: string;
    name: string;
  };
}

export interface ModelResponse {
  id?: string;
  alias?: string;
  title?: string;
  favorite?: boolean;
  datasetDescription?: string;
  icon?: number;
  link?: {
    platform: string;
    url: string;
  };
  updated?: boolean;
  language?: string;
  info?: {
    problemDescription: string;
    mainFeatures: string;
    targetVariable: string;
    numberOfFeatures: number;
    datasetSize: number;
    hasComplexData: boolean;
  }
  recomendationsTitle?: string;
  recommendations?: Array<{
    type: ProblemType;
    paragraph: string;
    tables: {
      modelsAliases: string[];
      similarDatasetsAliases: string[];
    };
  }>;
}

export type Collaborator = {
  name: string;
  nick: string;
  url: string;
};