import styled from 'styled-components';

const Path = styled.path`
`;

const RightArrow = () => (
  <svg
        viewBox="0 0 24 24"
        width={ 24}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}>
    <Path d="M12 7.8V0l12 12-12 12v-7.8H0V7.8h12Z" />
  </svg>
)

export default RightArrow
