import styled from "styled-components";
import { SVGIcon } from './common-styles';

const MenuButton = styled(SVGIcon)`  
  &:not(.hidden){grid-row: 2 / span 1;
    margin: 1.5ch 0 2.25ch 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: .5ch;
    border-radius: 50%;
    visibility: visible;
    pointer-events: all;
    transition: all .425s;
  }


    &.hidden {
      visibility: hidden;
      pointer-events: none;
      transition: all .12s;
    }
  `;

const ListIcon = () => (<MenuButton to="/events_list" className="hidden">
  <svg viewBox="0 0 21 13" width={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 3h14c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1Zm14 3H6c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1Zm0 5H6c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1ZM2.7 1.3c-.1-.1-.2-.2-.3-.2-.4-.2-.8-.1-1.1.2-.1.1-.2.2-.2.3-.1.3-.1.5 0 .8.1.1.1.2.2.3.1.1.2.2.3.2.1.1.3.1.4.1.3 0 .5-.1.7-.3.1-.1.2-.2.2-.3.1-.3.1-.5 0-.8 0-.1-.1-.2-.2-.3Zm0 5c-.3-.3-.7-.4-1.1-.2-.1.1-.2.1-.3.2-.1.1-.2.2-.2.3-.1.2-.1.5 0 .8.1.1.1.2.2.3.1.1.2.2.3.2.1.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.1.3-.2.1-.1.2-.2.2-.3.1-.2.1-.5 0-.8 0-.1-.1-.2-.2-.3Zm0 5c-.1-.1-.2-.2-.3-.2-.2-.1-.5-.1-.8 0-.1 0-.2.1-.3.2-.1.1-.2.2-.2.3-.2.4-.1.8.2 1.1.1.1.2.2.3.2.1.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.1.3-.2.3-.3.4-.7.2-1.1 0-.1-.1-.2-.2-.3Z"
      fill="#000"
    />
  </svg></MenuButton>
)

export default ListIcon
