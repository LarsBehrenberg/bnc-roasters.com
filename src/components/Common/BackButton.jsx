import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  padding: 0.5em;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  border-radius: 10px;

  display: inline-flex;
  align-items: center;

  transition: all 0.4s ease-out;

  &:hover {
    background: #ffffff60;
    border: 1px solid #ffffff00;
  }

  svg {
    margin-right: 7px;
  }
`

const BackButton = () => {
  return (
    <StyledLink to="/">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 12H5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19L5 12L12 5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Go Back</span>
    </StyledLink>
  )
}

export default BackButton
