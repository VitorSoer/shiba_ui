import styled from 'styled-components/native';

export const SandboxWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SandboxText = styled.Text`
  font-size: ${({ theme }) => theme.font_size['5X']};
  color: ${({ theme }) => theme.color.BLACK_NIGHT};
`;
