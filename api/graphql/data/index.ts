import { CosmosClient } from "@azure/cosmos";
import { CompanyDataSource as InMemoryCompanyDataSource } from "./inMemory/CompanyDataSource";
import { SiteDataSource as InMemorySiteDataSource } from "./inMemory/SiteDataSource";
import { CompanyModel } from "./types";

// const companies: CompanyModel[] = [];
// const users: UserModel[] = [];
export const inMemoryDataSources = () => ({
  // user: new InMemoryUserDataSource(users),
  // question: new InMemoryQuestionDataSource(),
  company: new InMemoryCompanyDataSource(),
  site: new InMemorySiteDataSource(),
});
