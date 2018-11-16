import TweenMax from 'gsap/TweenMax';

const distancePoints = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

let lastmouse = { x: 0, y: 0 };
let scrollmouse = { x: 0, y: 0 };
let lastpageY = 0;

const getMousePos = e => {
    let posX = 0,
        posY = 0;
    if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posX,
        y: posY
    }
};

class Nearby {
    constructor(el, options) {
        this.DOM = { el: el };
        this.options = options;
        this.init();
    }
    init() {
        this.mousemoveFn = e => requestAnimationFrame(() => {
            const mousepos = getMousePos(e);
            const docScrolls = {
                left: document.body.scrollLeft + document.documentElement.scrollLeft,
                top: document.body.scrollTop + document.documentElement.scrollTop
            }
            const elRect = this.DOM.el.getBoundingClientRect();
            const elCoords = {
                x1: elRect.left + docScrolls.left,
                x2: elRect.width + elRect.left + docScrolls.left,
                y1: elRect.top + docScrolls.top,
                y2: elRect.height + elRect.top + docScrolls.top
            };
            const closestPoint = {
                x: mousepos.x,
                y: mousepos.y
            }
            // If mouse is left of the element, make left the closest x point
            if (mousepos.x < elCoords.x1) {
                closestPoint.x = elCoords.x1;
                // If mouse is right of the element, make right the closest x point
            } else if (mousepos.x > elCoords.x2) {
                closestPoint.x = elCoords.x2;
            }
            if (mousepos.y < elCoords.y1) {
                closestPoint.y = elCoords.y1;
            } else if (mousepos.y > elCoords.y2) {
                closestPoint.y = elCoords.y2;
            }
            if (this.options.onProgress) {
                this.options.onProgress(distancePoints(mousepos.x, mousepos.y, closestPoint.x, closestPoint.y));
            }
            lastmouse = mousepos;
        });
        this.scrollFn = e => requestAnimationFrame(() => {
            let pageY = e.pageY;
            if (lastpageY != e.pageY) {
                scrollmouse.x = lastmouse.x;
                scrollmouse.y = lastmouse.y + pageY;
                console.log('Last mouse:', lastmouse.y, 'Page Scroll:', pageY, 'New Mouse:', scrollmouse.y);
                const mousepos = scrollmouse;
                console.log(mousepos);

            }
            lastpageY = e.pageY;
        });
        window.addEventListener('mousemove', this.mousemoveFn);
        window.addEventListener('scroll', this.scrollFn);
    }

    removeEventListeners() {
        window.removeEventListener('mousemove', this.mousemoveFn);
        window.removeEventListener('scroll', this.scrollFn);
    }
}

window.Nearby = Nearby;

/**
 * Equation of a line.
 */
const lineEq = (y2, y1, x2, x1, currentVal) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};

const exec = (elRef) => {
    const distanceThreshold = {
        min: 0,
        max: 150
    };
    const opacityInterval = {
        from: .5,
        to: 1
    };
    const borderRadiusInterval = {
        from: 200,
        to: 10
    };
    const translateInterval = {
        from: 0,
        to: 450
    };

    const img = elRef.querySelector('img');
    const h2 = elRef.querySelector('span');
    const instance = new Nearby(img, {
        onProgress: distance => {
            const o = lineEq(opacityInterval.from, opacityInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
            const br = lineEq(borderRadiusInterval.from, borderRadiusInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
            const t = lineEq(translateInterval.from, translateInterval.to, distanceThreshold.max, distanceThreshold.min, distance);
            TweenMax.to(img, 1, {
                ease: Power2.easeOut,
                borderRadius: Math.max(Math.min(br, borderRadiusInterval.from), 0),
                opacity: Math.max(Math.min(o, opacityInterval.to), .5)
            });
            /* TweenMax.to(h2, 1, {
                ease: Power2.easeOut,
                yPercent: Math.max(Math.min(t, translateInterval.to), 0)
            }); */
        }
    });
    return instance;
}

export default {
    exec
}
