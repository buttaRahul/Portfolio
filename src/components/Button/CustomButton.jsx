import { Box, Button } from '@mui/material';
import React from 'react';
import './button.css';
import { animated, useSpring } from 'react-spring';

const CustomButton = ({ text, icon, onClick }) => {
  const [{ y, color, glanceOpacity }, set] = useSpring(() => ({
    y: 100,
    color: 'white',
  }));

  return (
    <Box>
      <Button
        className='cust_btn'
        variant='outlined'
        endIcon={icon ? (<Box className='icon_container'>{icon}</Box>) : null}
        onMouseEnter={() => set.start({ y: 0, color: "#000", glanceOpacity: 1 })}
        onMouseLeave={() => set.start({ y: 100, color: 'white', glanceOpacity: 0 })}
        sx={{ position: 'relative', overflow: 'hidden' }}
        onClick={onClick}
      >
        <span className='btn_text'>
          <animated.span style={{ color }}>
            {text}
          </animated.span>
          <animated.div
            style={{
              transform: y.to(v => `translateY(${v}%)`),
              opacity: glanceOpacity,
            }}
            className="glance"
          />
        </span>
      </Button>
    </Box>
  );
};

export default CustomButton;
