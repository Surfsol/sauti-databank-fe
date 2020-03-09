import React from "react";
import { useHistory } from "react-router-dom";
import { getToken, decodeToken, getSubscription } from "./auth/Auth";
import PaypalButton from "../Components/PaypalButton";

import styled from "styled-components";
import "../index.css";

function DashAccount(props) {
  const token = getToken();
  let tier;
  if (token) {
    tier = decodeToken(token);
    tier = tier.tier;
  }
  let userEmail;
  if (token) {
    userEmail = decodeToken(token);
    userEmail = userEmail.email;
  }
  const newSub = getSubscription();
  let sub;
  if (newSub) {
    sub = newSub;
  }

  const history = useHistory();

  const handleSubmit = async (e, input) => {
    e.preventDefault();
    history.push("/data");
  };

  return (
    <>
      {(tier === "FREE") | (tier === "ADMIN") ? (
        <AccountPageDiv>
          {tier === "FREE" ? (
            <>
              <Div>
                <H1>Need more data?</H1>
                <P>Upgrade to our paid plan to access all material.</P>
              </Div>
              <Div2>
                <UserTypeContainerDiv>
                  <div>
                    <H1>Free Account</H1>
                    <H2>Free</H2>
                  </div>
                  <ul className="features-list">
                    <li className="features-item">Create an account</li>
                    <li className="features-item">Change data filters</li>
                    <li className="features-item">X</li>
                    <li className="features-item">X</li>
                    <li className="features-item">X</li>
                  </ul>
                  <ButtonDiv>
                    <ContinueButton2 type="submit" onClick={handleSubmit}>
                      Continue
                    </ContinueButton2>
                  </ButtonDiv>
                </UserTypeContainerDiv>
                <UserTypeContainerDiv>
                  <div>
                    <H1>Premium Account</H1>
                    <H2>$9.99/month</H2>
                  </div>
                  <ul className="features-list">
                    <li className="features-item">Create an account</li>
                    <li className="features-item">Change data filters</li>
                    <li className="features-item">Download data into csv</li>
                    <li className="features-item">Additional filter options</li>
                    <li className="features-item">Filter data by date</li>
                  </ul>
                  <ButtonDiv>
                    <PaypalButton />
                  </ButtonDiv>
                </UserTypeContainerDiv>
              </Div2>
            </>
          ) : (
            <>
              <Div>
                <H1>Sauti Databank Admin</H1>
                <P>Current user type offerings.</P>
              </Div>
              <Div2>
                <UserTypeContainerDiv>
                  <div>
                    <H1>Free Account</H1>
                    <H2>Free</H2>
                  </div>
                  <ul className="features-list">
                    <li className="features-item">Create an account</li>
                    <li className="features-item">Change data filters</li>
                    <li className="features-item">X</li>
                    <li className="features-item">X</li>
                    <li className="features-item">X</li>
                  </ul>
                </UserTypeContainerDiv>
                <UserTypeContainerDiv>
                  <div>
                    <H1>Premium Account</H1>
                    <H2>$9.99/month</H2>
                  </div>
                  <ul className="features-list">
                    <li className="features-item">Create an account</li>
                    <li className="features-item">Change data filters</li>
                    <li className="features-item">Download data into csv</li>
                    <li className="features-item">Additional filter options</li>
                    <li className="features-item">Filter data by date</li>
                  </ul>
                </UserTypeContainerDiv>
              </Div2>
            </>
          )}
        </AccountPageDiv>
      ) : (
        (tier === "PAID") | sub && (
          <AccountPageDiv>
            {tier === "PAID" ? (
              <>
                <Div>
                  <H1>Need More Data?</H1>
                  <P>Upgrade to our paid plan to access all material.</P>
                </Div>
                <Div2>
                  <UserTypeContainerDiv>
                    <div>
                      <H1>Premium Account</H1>
                      <H2>$9.99/month</H2>
                    </div>
                    <ul className="features-list">
                      <li className="features-item">Create an account</li>
                      <li className="features-item">Change data filters</li>
                      <li className="features-item">Download data into csv</li>
                      <li className="features-item">
                        Additional filter options
                      </li>
                      <li className="features-item">Filter data by date</li>
                    </ul>
                    <ButtonDiv>
                      <ContinueButton2>Cancel Subscription</ContinueButton2>
                    </ButtonDiv>
                  </UserTypeContainerDiv>
                </Div2>
              </>
            ) : (
              <>
                <Div>
                  <H1>Need More Data?</H1>
                  <P>Upgrade to our paid plan to access all material.</P>
                </Div>
                <Div2>
                  <UserTypeContainerDiv>
                    <div>
                      <H1>Premium Account</H1>
                    </div>
                    <ul className="features-list">
                      <li className="features-item">Create an account</li>
                      <li className="features-item">Change data filters</li>
                      <li className="features-item">Download data into csv</li>
                      <li className="features-item">
                        Additional filter options
                      </li>
                      <li className="features-item">Filter data by date</li>
                    </ul>
                  </UserTypeContainerDiv>
                </Div2>
              </>
            )}
          </AccountPageDiv>
        )
      )}
    </>
  );
}

export default DashAccount;

const Div = styled.div`
  text-align: center;
  margin: 5rem 0;
`;
const Div2 = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ContinueButton2 = styled.div`
  display: inline-block;
  text-decoration: none;
  color: black;
  border: 2px solid #eb5e52;
  border-radius: 5px;
  padding: 1rem 3rem;
  margin-top: 2rem;
  transition: 0.5s ease;
  &:hover {
    color: white;
    background-color: #eb5e52;
    cursor: pointer;
  }
`;
const AccountPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  font-weight: normal;
  margin-bottom: 15%;
`;
const UserTypeContainerDiv = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 5px;
  width: 35%;
  height: 600px;
`;
const H1 = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;
const P = styled.p`
  font-size: 3rem;
  opacity: 0.75;
`;
const H2 = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase
  margin-top: 10px;
  margin-bottom: 10px;
  color: green;
`;
const ButtonDiv = styled.div`
  width: 100%;
  text-align: center;
`;
const Big = styled.big`
  color: #eb5e52;
`;
