import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import Tools from "./Tools";

const Users_Query = gql`
  query UsersQ {
    allUsers: databankUsers {
      id
      email
      interest
      tier
      organization
      job_position
      country
      organization_type
      registration_date
      found_by
      p_next_billing_time
      paypal_plan
    }
  }
`;

const UsersQuery = () => {
  const { data, loading, error } = useQuery(Users_Query);

  //must enter loading
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }
  console.log(data.allUsers);

  data.allUsers.map(item => {
    if (item.p_next_billing_time !== null) {
      item.p_next_billing_time = new Date(Number(item.p_next_billing_time));
      let newVar = item.p_next_billing_time.toDateString().slice(4, 15);
      item.p_next_billing_time = newVar;
    }
  });

  data.allUsers.map(item => {
    if (item.registration_date !== undefined) {
      item.registration_date = new Date(Number(item.registration_date));
      let newVar = item.registration_date.toDateString().slice(4, 15);
      item.registration_date = newVar;
    }
  });

  return (
    <>
      <Tools allUsers={data.allUsers} />
    </>
  );
};
export default UsersQuery;
