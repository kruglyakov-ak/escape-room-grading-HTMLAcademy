import styled from 'styled-components';

const Tabs = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;

  @media (max-width: 1110px) {
    align-self: center;
  }
`;

export {
  Tabs,
};
