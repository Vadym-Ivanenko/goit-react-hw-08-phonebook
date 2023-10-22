import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin-left: 20px;
  width: 100px;
  height: 20px;

  cursor: pointer;

  font-size: 16px;
  font-weight: 400;
  line-height: 0.8;
  color: rgba(255, 255, 255, 1);

  background-color: rgba(1, 65, 1, 0.66);
  border: 1px solid rgba(1, 65, 1, 0.66);
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(255, 186, 186);
    box-shadow: 3px 5px 10px -3px rgba(1, 65, 1, 0.66);
  }
`;
