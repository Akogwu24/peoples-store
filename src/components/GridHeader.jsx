import React from 'react';
import styled from 'styled-components';

const RecentProduct = ({ header, subHeader }) => {
  return (
    <Div>
      <h1>{header}</h1>
      <p>{subHeader}</p>
    </Div>
  );
};
export default RecentProduct;

const Div = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  h1 {
    font: 700 8rem 'Yanone Kaffeesatz', sans-serif;
  }
  P {
    color: rgba(0, 0, 0, 0.568);
    font: italic 3rem 'Roboto Condensed', sans-serif;
  }
`;