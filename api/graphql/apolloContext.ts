import {
  ICompanyDataSource, ISiteDataSource
} from "./data/types";

export type ApolloContext = {
  dataSources: {
    company: ICompanyDataSource;
    site: ISiteDataSource;
  };
};
