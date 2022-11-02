export enum ModelType {
  // Question = "Question",
  // User = "User",
  // UserAnswer = "UserAnswer",
  // Game = "Game",
  Company = "Company",
  Site = "Site"
}

type Model = {
  id: string;
  modelType: ModelType;
};

export type CompanyModel = {
  id: String;
  name: String;
  sites: SiteModel[];
} & Model;

export type SiteModel = {
  id: String;
  name: String;
  company: CompanyModel;
} & Model;

export interface ICompanyDataSource {
  getCompanies(): Promise<CompanyModel[]>;
  getCompany(id: string): Promise<CompanyModel>;
  createCompany(name: string): Promise<CompanyModel>;
}

export interface ISiteDataSource {
  // getSites(name: string): Promise<SiteModel[]>;
  createSite(name: string, company: CompanyModel): Promise<SiteModel>;
  getSites(company: CompanyModel): Promise<SiteModel[]>;
}