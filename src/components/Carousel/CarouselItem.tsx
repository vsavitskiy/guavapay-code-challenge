import React from "react";

type CarouselItemProps = {
  children: React.ReactNode,
  index?: number,
}

const getX = (index: number) => {
  if (index < 0) {
    return '-100%';
  }

  return `calc(-50% + ${40 * index}px)`;
}

const getScale = (index: number) => {
  if (index <= 0) {
    return 1;
  }

  return 1 - index * 0.1;
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { children, index = 0 } = props;

  const style = {
    left: index < 0 ? '-100%' : '50%',
    transform: `translate3d(${getX(index)}, -50%, 0) scale(${getScale(index)})`,
    zIndex: index * -1
  }

  return (
    <div
      className="absolute top-[50%] w-[80%] h-[100%] transition-all duration-300 will-change-transform"
      style={style}
    >
      {children}
    </div>
  )
}
