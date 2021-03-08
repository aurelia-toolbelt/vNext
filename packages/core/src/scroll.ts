function scrollUp(start?: Function, end?: Function) {
    const el = (document.documentElement || document.body);
    if (start) start();
    el.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    if (end) end();
}

function scrollBottom(start?: Function, end?: Function) {
    const scrollingElement = (document.scrollingElement || document.body);
    const el = (document.documentElement || document.body);
    if (start) start();
    const smoothScroll = (h: number) => {
        let i = h || 0;
        if (i < scrollingElement.scrollHeight) {
            setTimeout(() => {
                el.scrollTo(0, i);
                smoothScroll(i + 10);
            }, 5);
            if (end) end();
        }
    }
    smoothScroll(0);
}

function scrollBottomFast(start?: Function, end?: Function) {
    const scrollingElement = (document.scrollingElement || document.body);
    const el = (document.documentElement || document.body);
    if (start) start();
    el.scrollTo(0, scrollingElement.scrollHeight);
    if (end) end();
}

export { scrollUp, scrollBottom, scrollBottomFast }