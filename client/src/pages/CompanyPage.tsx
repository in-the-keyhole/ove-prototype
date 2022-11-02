import { useQuery } from "@apollo/client";
import React from "react";
import { GetCompaniesDocument } from "../generated";

const CompanyPage: React.FC = () => {

  const { loading, data } = useQuery(GetCompaniesDocument);

  if (loading || !data) {
    return <h1>Waiting for companies...</h1>;
  }

  return (
    <div>
      <h1>Companies!</h1>
      {data.companies?.map((company) => {
        return (
          <div>{company?.name}</div>
        );
      })}
    </div>
  );
};

export default CompanyPage;
