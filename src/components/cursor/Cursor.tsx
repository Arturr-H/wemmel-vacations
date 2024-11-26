import React, { RefObject } from "react";
import "./styles.css";

/* Interfaces */
interface Props {}
interface State {}

/** Notification */
const AVG_SIZE_ACCUMULATION_LEN = 5;
export default class extends React.PureComponent<Props, State> {
    horizontalScrollIndicatorRef: RefObject<HTMLParagraphElement> = React.createRef();
    prevRotations: number[] = new Array(AVG_SIZE_ACCUMULATION_LEN).fill(0);
    selfRef: RefObject<HTMLDivElement> = React.createRef();
    prevClientX: number = 0;
    prevClientY: number = 0;
    isMounted__: boolean = false;
    cursorScale: number = 1;
    hasFadedIn: boolean = false;
    canScale: boolean = true;
    canDoHorizontalDragging: boolean = false;

    constructor(props: Props) {
        super(props);
        
        this.hideCursor = this.hideCursor.bind(this);
        this.showCursor = this.showCursor.bind(this);
    }

    isTouchDevice() {
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0))
    }

    /* Lifetime */
    async componentDidMount(): Promise<void> {
        if (this.isMounted__ || this.isTouchDevice()) { return };
        this.isMounted__ = true;

        document.body.addEventListener("mousemove", e => {
            this.onInteract();
            if (!this.selfRef || !this.selfRef.current) return;
            const { clientX, clientY } = e;

            this.selfRef.current!.style.translate = `${clientX}px ${clientY}px`;
            this.prevClientX = clientX;
            this.prevClientY = clientY;
            
            if ((e.target as any).id === "cursor-remove" || (this.canDoHorizontalDragging && e.buttons === 1)) {
                this.canScale = false;
                this.selfRef.current!.style.scale = `0`;
            }else {
                this.canScale = true;
                this.selfRef.current!.style.scale = `1`;
            }
        });

        document.body.addEventListener("mousedown", () => {
            this.onInteract();
            if (this.canScale && (this.selfRef && this.selfRef.current)) this.selfRef.current!.style.scale = `0.8`;
        });
        document.body.addEventListener("mouseup", () => {
            this.onInteract();
            this.showCursor();
        });

        document.body.addEventListener("mouseleave", () => { this.hideCursor(); this.onInteract(); });
        document.body.addEventListener("mouseenter", () => { this.showCursor(); });
    }
    async componentWillUnmount(): Promise<void> {}
    hideCursor(): void { if (this.selfRef && this.selfRef.current) this.selfRef.current!.style.scale = `0`; }
    showCursor(): void { if (this.selfRef && this.selfRef.current) this.selfRef.current!.style.scale = `${this.cursorScale}`; }
    onInteract(): void {
        if (this.selfRef && this.selfRef.current && !this.hasFadedIn) {
            this.hasFadedIn = true;
            this.selfRef.current!.style.opacity = "1";
        }
    }

    /* Indicators (called externally) */
    horizontalScrollIndicator(to: boolean): void {
        this.canDoHorizontalDragging = to;
        if (!this.horizontalScrollIndicatorRef.current) return;
        if (to) {
            this.horizontalScrollIndicatorRef.current.style.opacity = "1";
        }else {
            this.horizontalScrollIndicatorRef.current.style.opacity = "0";
        }
    }

    /* Render */
    render(): React.ReactNode {
        if (!this.isTouchDevice()) return (
            <div ref={this.selfRef} className="cursor">
                <p ref={this.horizontalScrollIndicatorRef} className="horizontal-scroll-indicator">‹›</p>
            </div>
        );
    }
}
