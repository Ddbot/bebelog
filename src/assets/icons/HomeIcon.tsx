import styled from "styled-components"

const SVG = styled.svg`
scale: 0.7;
`;

const HomeIcon = () => (
  <SVG viewBox="0 0 48 48" width={48}  fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)" fill="#000">
      <path d="M42 48H28V35h-8v13H6V27a1 1 0 1 1 2 0v19h10V33h12v13h10V28a1 1 0 0 1 2 0v20Z" />
      <path d="M47 27a.997.997 0 0 1-.691-.277L23.999 5.384 1.692 26.724a1 1 0 1 1-1.383-1.446L24 2.616l23.69 22.661A1 1 0 0 1 47 27Zm-8-12a1 1 0 0 1-1-1V8h-6a1 1 0 1 1 0-2h8v8a1 1 0 0 1-1 1Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </SVG>
)

export default HomeIcon
