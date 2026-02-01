import { LitElement, html, css } from 'lit';

export class Code extends LitElement {
  language!: string;
  value!: string;

  static properties = {
    language: { type: String, reflect: true },
    value: { type: String }
  };

  static styles = css`
  pre {
    margin: 0;
  }
`;

  hljs: any;

  async updated () {
    if (!this.language || !this.value) return;

    const code = this.renderRoot.querySelector('code')!;
    if (!this.hljs) {
      // @ts-ignore
      const core = await import('https://esm.sh/highlight.js@11/lib/core');
      this.hljs = core.default;

      try {
        const lang = await import(
          `https://esm.sh/highlight.js@11/lib/languages/${this.language}`
        );
        this.hljs.registerLanguage(this.language, lang.default);
      } catch (e) {
        console.log('Language not found:', this.language, e);

        code.textContent = `Language "${this.language}" not found.`;
        return;
      }
    }

    const result = this.hljs.highlight(this.value.trim(), {
      language: this.language,
      ignoreIllegals: true
    });

    code.innerHTML = result.value;
  }

  render () {
    const hostClass = this.getAttribute('class') || '';
    const hostStyle = this.getAttribute('style') || '';

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css">

      <pre><code
        class="language-${this.language} ${hostClass}"
        style="${hostStyle}"
      ></code></pre>
    `;
  }
}


if (!customElements.get('lt-code'))
  customElements.define('lt-code', Code);
