import { gsap } from 'gsap';

export function runTextAnimation(textRef) {
    if (!textRef.current) return;

    const text = textRef.current.textContent.trim();
    textRef.current.innerHTML = '';


    const firstLetterSpan = document.createElement('span');
    firstLetterSpan.textContent = text[0];
    firstLetterSpan.style.display = 'inline-block';
    textRef.current.appendChild(firstLetterSpan);


    const remainingTextContainer = document.createElement('span');
    textRef.current.appendChild(remainingTextContainer);

    const remainingLetters = [];
    for (let i = 1; i < text.length; i++) {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = text[i];
        letterSpan.style.display = 'inline-block';
        remainingTextContainer.appendChild(letterSpan);
        remainingLetters.push(letterSpan);
    }

    const tl = gsap.timeline();

    tl.fromTo(firstLetterSpan,
        { y: -150, opacity: 0, scale: 1.4 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );

    tl.fromTo(remainingLetters,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.04, ease: "power2.out" },
        "-=0.2"
    );
}