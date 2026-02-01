import { LitElement, html, css } from "lit";

/*
<lt-mmd>
  flowchart TD
  A[Christmas] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
</lt-mmd>
*/
class Mermaid extends LitElement {
  static styles = css`
        :host {
            display: inline-block;
            cursor: pointer;
            user-select: none;
        }
        .mmd {
            font-family: monospace;
            white-space: pre;
        }
    `;

  render () {
    return html`
            <div class="mmd">
                <slot></slot>
            </div>
        `;
  }

  async firstUpdated () {
    const mermaid = await import("https://esm.sh/mermaid@11").then(
      (m) => m.default,
    );

    const theme = this.getAttribute("theme") || "base";
    const element = this.shadowRoot?.querySelector(".mmd") as HTMLElement;
    const text = this.innerHTML
      .trim()
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");

    const API = mermaid.mermaidAPI;
    API.initialize({ securityLevel: "loose", theme });
    API.render("graphDiv", text).then(({ svg }: any) => {
      element.innerHTML = svg;
    });
  }
};

if (!customElements.get("lt-mmd"))
  customElements.define(`lt-mmd`, Mermaid);