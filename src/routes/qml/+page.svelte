<script>
  import Mermaid from "@component/Mermaid.svelte";
  import { plainText as Timeline } from "./assets/timeline.mmd";
</script>

<section>
  <header>Week 4</header>
  <div>
    <Mermaid
      config={{
        theme: "base",
        gitGraph: {
          mainBranchName: "New-Kernel",
        },
      }}
      content={Timeline}
    />
  </div>
</section>
<!-- Week 3 -->
<section>
  <header>Week 3</header>
  <ul>
    <li><a href="/qml/w3">Week 3 Presentation</a></li>
    <li><a href="/qml/w3py">Week 3 Python</a></li>
  </ul>
</section>
<!-- Week 2 -->
<section>
  <header>Week 2</header>
  <div>No Content</div>
</section>
<!-- Week 1 -->
<section>
  <header>Week 1</header>
  <div>No Content</div>
</section>

<style lang="scss">
  :global {
    body {
      background: #f5f5f7;
    }
    .shadow {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
  section {
    font-weight: 200;
    max-width: 1040px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
  }

  header {
    @extend .shadow;
    background: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    max-width: 300px;
  }
</style>
