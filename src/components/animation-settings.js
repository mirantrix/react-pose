import posed from 'react-pose';


export const LeftToRight = posed.div({
    enter: {
      x: 0,
      opacity: 1,
      delay: 400,
      transition: { duration: 400 }
      
    },
    exit: {
      x: -100,
      opacity: 0,
      delay: 0,
      transition: { duration: 400 }
    }
  });

export const RightToLeft = posed.div({
    enter: {
      x: 0,
      opacity: 1,
      delay: 400,
    transition: { duration: 400 }
      
    },
    exit: {
      x: 100,
      opacity: 0,
      delay: 0,
      transition: { duration: 400 }
    }
  });


  export const TopToBottom = posed.div({
    enter: {
      y: 0,
      opacity: 1,
      delay: 400,
    transition: { duration: 400 }
      
    },
    exit: {
      y: -100,
      opacity: 0,
      delay: 0,
    transition: { duration: 400 }
    }
  });

