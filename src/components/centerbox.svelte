<script>
      export let codeCg;
</script>

<style type="text/scss">
      .section {
            width: 500px;
            height: auto;
            .left {
                  padding-right: 20px;
                  img {
                        width: 200px;
                        height: 200px;
                        border-radius: 120px;
                        object-fit: cover;
                  }
            }
            .title {
                  font-size: 32px;
                  font-weight: 600;
                  line-height: 8px;
                  padding: 0;
            }
            a {
                  pointer-events: all;
                  color: #7eb6ff;
                  text-decoration: none;
            }
      }
      @media (max-width: 600px) {
            .section {
                  width: 325px;
                  height: auto;
                  .left,
                  .right {
                        width: 100%;
                        padding: 0;
                  }
            }
      }
</style>

<section style="display:flex;flex-direction:column;">
      <div class="code" on:click={codeCg}>
            <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                  <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
            </svg>
      </div>
      <div class="section">
            <div class="left"><img src="./assets/pic.jpeg" alt="" /></div>
            <div class="right">
                  <p class="title">Manav Seksaria</p>
                  <p>Cyber Security Researcher, Full Stack Javascript</p>
                  <div style="line-height:1.5em">
                        <a href="https://frontier.nukes.in">@frontier</a>
                        <br />
                        <a href="https://github.com/plutoniumm">@plutoniumm</a>
                        <br />
                        <a
                              href="mailto:plutoniumm@icloud.com">plutoniumm@icloud.com</a>
                  </div>
            </div>
      </div>
</section>
