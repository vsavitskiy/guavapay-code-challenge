import React, {cloneElement, useState} from "react";
import {ReactComponent as LeftArrow} from '../../images/left-arrow.svg';

enum Direction { 'left', 'right'}

type CarouselProps = {
  children: React.ReactElement[]
}

export const Carousel = (props: CarouselProps) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction: Direction) => {
    if (direction === Direction.left) {
      setCurrentIndex(currentIndex - 1 >= 0 ? currentIndex - 1 : children.length - 1);
    } else {
      setCurrentIndex(currentIndex + 1 < children.length ? currentIndex + 1 : 0);
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="w-[100%] h-[210px]">
        {children.map((child, i) => {
          return cloneElement(child, { index: i - currentIndex })
        })}
      </div>

      <div className="absolute top-[50%] h-[36px] translate-y-[-50%] w-[100%] select-none">
        <LeftArrow
          className="rotate-0 absolute left-0 z-1 cursor-pointer"
          onClick={() => handleSlide(Direction.left)}
          width={36}
          height={36}
        />
        <LeftArrow
          className="rotate-180 absolute right-0 z-1 cursor-pointer"
          onClick={() => handleSlide(Direction.right)}
          width={36}
          height={36}
        />
      </div>
    </div>
  )
}
