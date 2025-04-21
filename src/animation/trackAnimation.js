import { animate, svg } from 'animejs';

export const animateTextAndTrack = (svgRef, textRef) => {
    const path = svgRef.current.querySelector('#track');

    animate(textRef.current, {
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutQuad',
        duration: 1000,
    });

    animate(path, {
        draw: '0 1',
        easing: 'linear',
        duration: 5000,
        loop: true,
    });

    animate(svg.createDrawable(path), {
        draw: '0 1',
        ease: 'linear',
        duration: 5000,
        loop: true,
    });
};
