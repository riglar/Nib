import React from "react";
import styled from "@emotion/styled";

export default props => <StyledAnchor {...props} />;

const StyledAnchor = styled.a`
  background-color: ${({ theme }) => theme.link.backgroundColor};
  color: ${({ theme }) => theme.link.color};
  cursor: pointer;
  font-size: ${({ theme }) => theme.link.fontSize};

  :hover {
    ${({ theme }) => theme.link["&:hover"]};
  }
`;
