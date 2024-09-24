import * as React from 'react'
import { ParallaxLayer } from '@react-spring/parallax'

const SubHeader = ({ subHeader, stickyStart, stickyEnd, zIndex }) => {
  return (
    <ParallaxLayer id="Component SubHeader"
      style={{
        width: "full",
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        zIndex: zIndex,
      }}
      sticky={{ start: stickyStart, end: stickyEnd }}>
      <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
        <div className="flex-1 flex items-center">
          <p className="text-gray-400 text-lg text-center">
            {subHeader}
          </p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default SubHeader;
