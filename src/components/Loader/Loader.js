import { MutatingDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';
export const Loader = () => {
  return (
    <Wrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#8d9495"
        secondaryColor="#8d9495"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};
