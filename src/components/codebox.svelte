<script>
      export let codeCg;

      const langs = [
            { lang: "js" },
            { lang: "ts" },
            { lang: "node", bg: "#303030" },
            { lang: "sql", bg: "#F4F4FF" },

            { lang: "svelte" },
            { lang: "react" },
            { lang: "vue", bg: "rgb(90,125,141)" },
            { lang: "express", bg: "rgb(50,50,50)" },

            { lang: "python", bg: "rgb(40,110,166)" },
            { lang: "c", bg: "rgb(95,100,200)" },
            { lang: "cpp", bg: "rgb(15,67,120)" },
            { lang: "rs", bg: "#b8430f" },

            { lang: "m", bg: "rgb(0,100,170)" },
            { lang: "md" },
            { lang: "swift" },
            { lang: "sass", bg: "#cc6699" },
      ];
</script>

<style type="text/scss">
      .section {
            flex-wrap: wrap;
            width: 300px;
            height: auto;
            img {
                  padding: 0;
                  margin: 0;
                  object-fit: contain;
            }
      }
      @media (max-width: 600px) {
            .section {
                  width: 300px;
            }
      }
</style>

<section style="display:flex;flex-direction:column;">
      <div class="code" on:click={codeCg}>
            <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                  <path
                        d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
            </svg>
      </div>
      <div class="section">
            {#each langs as lang}
                  <img
                        src="./assets/langs/{lang.lang}.png"
                        width="75px"
                        height="75px"
                        style="background:{lang.bg || 'black'}"
                        alt="" />
            {/each}
      </div>
</section>
