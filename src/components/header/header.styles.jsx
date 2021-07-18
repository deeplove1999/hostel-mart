import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const BrandContainer = styled(Link)`
  padding-left: 20px;
  font-size: 2rem;
  font-weight: 500;
  font-family: "Caveat", cursive;
`;

export const BrandSpanContainer = styled.span`
  color: #05c469;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 0px 15px;
  cursor: pointer;
`;
