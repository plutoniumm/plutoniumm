import { LitElement, html, css } from "lit";

/*
<lt-split ratio="1:1" {vertical} {disabled}>
  <div slot="left">Left</div>
  <div slot="right">Right</div>
</lt-split>
*/
class Split extends LitElement {
  dragging: boolean = false;
  vertical: boolean = false;
  startX: number = 0;
  startWidth: number = 0;
  ratio: string = "1:1";
  left: HTMLElement | null = null;
  right: HTMLElement | null = null;

  static styles = css`
        :host {
            display: flex;
            flex-direction: row;
            overflow: hidden;
        }

        .splitc {
            overflow: auto;
        }

        .split-bar {
            width: 1px;
            padding: 10px 0;
            cursor: ew-resize;
            background-color: #888;
        }
        .split-bar:hover {
            width: 3px;
            padding: 10px 1px;
            background-color: #2af;
        }
        .hr {
            margin: 0;
            height: 100%;
            padding: 0;
            border: 0;
            border-radius: 10px;
            background-color: #888;
        }
        .split-bar:hover .hr {
            background-color: #fff;
        }

        :host([vertical]) {
            flex-direction: column;
        }

        :host([vertical]) .split-bar {
            height: 1px;
            width: calc(100% - 22px);
            cursor: ns-resize;
            padding: 0 10px;
        }
        :host([vertical]) .split-bar:hover {
            height: 3px;
            padding: 1px 10px;
        }

        :host([disabled]) .split-bar {
            pointer-events: none;
        }
    `;

  firstUpdated () {
    this.left = this.renderRoot!.querySelector(".splitl");
    this.right = this.renderRoot!.querySelector(".splitr");

    const ratios = this.getAttribute("ratio") || "1:1";
    const [left, right, ...rest] = ratios.split(":").map(Number);

    this.left!.style.flex = `${(left * 100) / (left + right)}`;
    this.right!.style.flex = `${(right * 100) / (left + right)}`;

    if (this.hasAttribute("vertical")) this.vertical = true;
  }

  render () {
    return html`
            <div class="splitc splitl">
                <slot name="a"></slot>
            </div>
            <div class="split-bar" draggable @mousedown=${this.startDrag}>
                <div class="hr"></div>
            </div>
            <div class="splitc splitr">
                <slot name="b"></slot>
            </div>
        `;
  }

  startDrag (e: any) {
    if (!this.left || !this.right) return;
    if (this.hasAttribute("disabled")) return;

    this.dragging = true;
    this.startX = e.pageX;
    this.startWidth =
      this.renderRoot?.querySelector(".splitc")?.getBoundingClientRect()
        ?.width || 0;

    if (this.vertical) {
      this.startX = e.pageY;
      this.startWidth =
        this.renderRoot
          ?.querySelector(".splitc")
          ?.getBoundingClientRect()?.height || 0;
    }

    document.addEventListener("mousemove", this.drag);
    document.addEventListener("mouseup", this.stopDrag);
  }

  drag = (e: any) => {
    if (!this.left || !this.right) return;
    if (this.dragging) {
      let newWidth;
      if (!this.vertical) {
        const offset = e.pageX - this.startX;
        newWidth =
          ((this.startWidth + offset) / this.offsetWidth) * 100;
      } else {
        const offset = e.pageY - this.startX;
        newWidth =
          ((this.startWidth + offset) / this.offsetHeight) * 100;
      }
      newWidth = ((Math.max(Math.min(100, newWidth), 0) * 10) | 0) / 10;
      this.left.style.flex = `${newWidth}`;
      this.right.style.flex = `${100 - newWidth}`;
    }
  };

  stopDrag = () => {
    this.dragging = false;
    document.removeEventListener("mousemove", this.drag);
    document.removeEventListener("mouseup", this.stopDrag);
  };
}

if (!customElements.get("lt-split"))
  customElements.define(`lt-split`, Split);
