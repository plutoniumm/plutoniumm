<script>
      const langs = [
            { lang: "js" },
            { lang: "ts" },
            { lang: "node", bg: "#303030" },
            // { lang: "sql", bg: "#F4F4FF" },

            { lang: "svelte" },
            { lang: "react" },
            { lang: "vue", bg: "rgb(90,125,141)" },
            { lang: "express", bg: "rgb(50,50,50)" },

            { lang: "python", bg: "rgb(40,110,166)" },
            { lang: "c", bg: "rgb(95,100,200)" },
            { lang: "cpp", bg: "rgb(15,67,120)" },
            // { lang: "rs", bg: "#b8430f" },

            { lang: "m", bg: "rgb(0,100,170)" },
            { lang: "md" },
            // { lang: "swift" },
            { lang: "sass", bg: "#cc6699" },
      ];
</script>

<style type="text/scss">
      img {
            padding: 0;
            margin: 0;
            object-fit: contain;
      }
</style>

{#each langs as lang}
      <img
            src="./assets/langs/{lang.lang}.png"
            width="80px"
            height="80px"
            style="background:{lang.bg || 'black'}"
            alt="" />
{/each}
