import { DataSource } from "apollo-datasource";
import { idGenerator } from "../../../utils";
import { ICompanyDataSource, CompanyModel, ModelType } from "../types";

export class CompanyDataSource extends DataSource implements ICompanyDataSource {

  companies: CompanyModel[];

  constructor() {
    super();
    this.companies = require("../../../../companies.json");
  }
  getCompany(id: string): Promise<CompanyModel> {
    const company = this.companies.find((c) => c.id === id);
    return Promise.resolve(company);
  }

  getCompanies() {
    return Promise.resolve(this.companies);
  }

  createCompany(name: String): Promise<CompanyModel> {
    const company: CompanyModel = {
      id: idGenerator(),
      modelType: ModelType.Company,
      name: name,
      sites: [],
    };

    this.companies.push(company);

    return Promise.resolve(company);
  }
}