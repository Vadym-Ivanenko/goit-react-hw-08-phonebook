import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  margin: 50px auto 0 auto;
  align-content: center;
  padding: 15px;
`;

export const Input = styled.input`
  width: 320px;
  height: 30px;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  border: 1px solid rgba(1, 65, 1, 0.66);
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 3px 5px 10px -3px rgba(1, 65, 1, 0.66);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgb(255, 186, 186);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  text-align: center;
  margin: 0 auto;
  width: 65%;
  height: 40px;

  font-size: 20px;
  font-weight: 400;
  line-height: 0.8;
  color: rgba(255, 255, 255, 1);

  background-color: rgba(1, 65, 1, 0.66);
  border: 1px solid rgba(1, 65, 1, 0.66);
  border-radius: 5px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgb(255, 186, 186);
    box-shadow: 3px 5px 10px -3px rgba(1, 65, 1, 0.66);
  }
`;
