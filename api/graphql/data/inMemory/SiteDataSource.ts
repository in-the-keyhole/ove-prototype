import { DataSource } from "apollo-datasource";
import { idGenerator } from "../../../utils";
import { ISiteDataSource, SiteModel, CompanyModel, ModelType } from "../types";

export class SiteDataSource extends DataSource implements ISiteDataSource {

  sites: SiteModel[];

  constructor() {
    super();
    this.sites = require("../../../../sites.json");
  }

  getSites(company: CompanyModel): Promise<SiteModel[]> {
    const clonedSites: SiteModel[] = [...this.sites];
    clonedSites.forEach(site => {
      site.company = company;
    });
    return Promise.resolve(clonedSites);
  }

  createSite(name: String, company: CompanyModel): Promise<SiteModel> {
    const site: SiteModel = {
      id: idGenerator(),
      modelType: ModelType.Site,
      name: name,
      company: company,
    };

    this.sites.push(site);

    return Promise.resolve(site);
  }
}
