import styled from 'styled-components';

const QuestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);
  gap: 32px 24px;

  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, minmax(303px, 1fr));
  }
`;

export {
  QuestsList,
};
