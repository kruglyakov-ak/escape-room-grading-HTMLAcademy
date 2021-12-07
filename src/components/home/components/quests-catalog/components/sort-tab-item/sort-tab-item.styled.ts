import styled, { css } from 'styled-components';

const TabItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 40px;
  max-width: 190px;
  margin-bottom: 20px;

  &:not(:last-of-type) {
    padding-right: 40px;
    margin-right: 39px;
    border-right: 1px solid ${({ theme }) => theme.color.gray};
  }

  @media (max-width: 1110px) {
    &:not(:last-of-type) {
      padding-right: 30px;
      margin-right: 29px;
    }
  }
`;

const TabBtn = styled.button.attrs({ type: 'button' }) <{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0;

  font-family: inherit;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 140%;
  letter-spacing: -0.02em;
  font-weight: 700;

  color: ${({ theme }) => theme.color.whisper2};
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }

  &:focus span,
  &:hover span {
    border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      span {
        border-bottom: 2px solid ${({ theme }) => theme.color.tangerine};
      }
    `}
`;

const TabTitle = styled.span`
  margin-left: 13px;
  padding-top: 4px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
`;

export {
  TabItem,
  TabBtn,
  TabTitle,
};
