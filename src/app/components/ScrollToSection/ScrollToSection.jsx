"use client";
import { Link as Scroller } from "react-scroll";

const ScrollToSection = (props) => {
  return (
    <>
        <div className="mb-2 cursor-pointer hover:underline hover:text-[#9c8966]">
          <Scroller
            to={props.questionNum}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            {props.num}) {props.completeQuestion}
          </Scroller>
          </div>

    </>
  )
}

export default ScrollToSection