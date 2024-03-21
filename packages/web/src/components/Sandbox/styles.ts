import styled from 'styled-components';

export const SandboxWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const SandboxText = styled.h1`
  font-size: ${({ theme }) => theme.font_size['5X']};
  color: ${({ theme }) => theme.color.BLACK_NIGHT};
`;
