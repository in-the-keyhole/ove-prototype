import { arrayRandomiser } from "../utils";
import { ModelType, SiteModel } from "./data/types";
import { Resolvers } from "./generated";

const resolvers: Resolvers = {
  Query: {
    companies(_, __, { dataSources }) {
      return dataSources.company.getCompanies();
    },
  },
  Company: {
    async sites(company, _, { dataSources }) {
      const sites = await dataSources.site.getSites(company);
      return sites;
    },
  },
  // Site: {
  //   async company(site, _, { dataSources }) {
  //     const sites = await dataSources.company.getCompany(site.id);
  //     return sites;
  //   },
  // },
  Mutation: {
    async createCompany(_, { name }, { dataSources }) {
      const company = await dataSources.company.createCompany(name);
      return company;
    },
  },
};

export default resolvers;
