import { Wrapper, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Wrapper>
  );
};
