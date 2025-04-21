import { animate } from 'animejs';

export function runTextAnimation(textRef) {
    if (textRef.current) {
        const text = textRef.current;
        const content = text.textContent.trim();
        text.textContent = '';

        content.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            text.appendChild(span);
        });

        animate(text.querySelectorAll('span'), {
            y: [
                { to: '-2.05rem', ease: 'outExpo', duration: 800 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
            ],
            rotate: {
                from: '-2turn',
                delay: 0
            },
            delay: (_, i) => i * 50,
            ease: 'inOutCirc',
            loopDelay: 10000,
            loop: true
        });
    }
}
