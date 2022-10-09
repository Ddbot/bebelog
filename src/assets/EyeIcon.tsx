import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const Container = styled.button`
    grid-row: 3 / span 1;
    transform: translateY(-.75ch);
    aspect-ratio: 1 /1 ;
    border-radius: 50%;
    background: white;
    z-index: 3;
`;

const scales = [0.7, 0.56, 1.2, 1.7, 0.4];
const backgrounds = ['#03a29e','#FFA6D5','#FF5C58','#FFBD9B','#2C2891'];

const EyeIcon = () => {
    const [open, setOpen] = useState(true);

    function handleClick(event: React.PointerEvent<HTMLButtonElement>) {    
        const { currentTarget } = event;    
        
        setOpen(prev => !prev);

        let aS = currentTarget.closest('div')?.querySelectorAll('a');
        let buttonsContainer = currentTarget.closest('div')?.parentElement?.querySelector('div');  
        let buttons = Array.from(buttonsContainer!.querySelectorAll('button'));
        
        if (open) {
            buttonsContainer!.style.filter = 'blur(10px)';
            buttonsContainer!.style.opacity = '0.15';
            buttonsContainer!.style.scale = '1.8';
            buttonsContainer!.style.transform = 'rotateZ(14deg)';

            buttons.forEach((b, i) => { 
                b.style.background = backgrounds[i];
                b.style.scale = String(scales[i]);
            });
            // Array.from(aS!).forEach((a, i) => { 
            //     a.classList.toggle('visible');
            // });
        };
        if (!open) {
            buttonsContainer!.style.filter = 'none';
            buttonsContainer!.style.opacity = '1';
            buttonsContainer!.style.scale = '1';
            buttonsContainer!.style.transform = 'rotateZ(0deg)';
            buttons.forEach((b, i) => { 
                b.style.background = 'transparent';
                b.style.scale = '1';
            });    
            // Array.from(aS!).forEach((a, i) => { 
            //     a.classList.toggle('visible');
            // });
        };

        aS?.forEach(link => { 
            link.classList.toggle('hidden');
        });
    };

    useEffect(() => { 
        
    }, [open]);
    
    return <Container onClick={ handleClick }>
    <svg viewBox='0 0 24 24' width={36} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1ZM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5Z"
            fill="#000"
        />
        <path
            d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#000"
        />
    </svg></Container>
};

export default EyeIcon
