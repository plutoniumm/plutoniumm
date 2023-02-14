<script>
  import Mermaid from "@component/Mermaid.svelte";
  import { plainText as Timeline } from "./assets/timeline.mmd";
</script>

<section>
  <header>General</header>
  <h4>
    Problem: Finding new Quantum Kernel Functions for data mapping to be used in
    QSVMs and other QML Algorithms
  </h4>
  <div>
    <b>Probable Tools</b>
    <div>
      <chip><a href="https://youtu.be/RI35E5ewBuI">Liquid Neural Nets</a></chip>
    </div>
  </div>
</section>

<section>
  <header>Week 4</header>
  <div>
    <Mermaid
      config={{
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
  <details class="mini">
    <summary>Presentation</summary>
    <iframe
      src="/qml/w3.html"
      sandbox="allow-scripts"
      title="w3"
      frameborder="0"
    />
  </details>
  <details class="mini">
    <summary>Code</summary>
    <iframe
      src="/qml/w3py.html"
      sandbox="allow-scripts"
      title="w3py"
      frameborder="0"
    />
  </details>
  <b>Useful Questions</b>
  <ul>
    <li>
      <input type="checkbox" checked disabled />
      What are Kernel Functions
      <br />
      <input type="checkbox" disabled />How do they work i.e how much can we
      predict the behavior of a function if at all?
    </li>
    <li>
      <input type="checkbox" disabled />
      What are the different types of Kernel Functions and how were they Arrived
      upton? visualising them!!
    </li>
    <li>
      <input type="checkbox" disabled />
      What are the different types of Kernel Functions that are used in QML? (I think
      this is the most important question)
      <br />
      <input type="checkbox" disabled />
      As a sub question, I think I would need to think of a few ways to visualise
      Quantum Kernels since right now that seems like very poorly documented online
    </li>
  </ul>

  <b>Useful Resources</b>
  <ul>
    <li>
      <a href="https://www.nature.com/articles/s41567-021-01287-z">
        [Nature] Q-kernel estimation provide Exp Q Speedup via the use of
        Q-enhanced feature spaces
      </a>
    </li>
    <li>
      <a href="https://ar5iv.labs.arxiv.org/html/2111.06063">
        [Ar5iv] Infinite NNs are not blackboxes but SVMs
      </a>
    </li>
    <li>
      <a href="https://cognitivemedium.com/magic_paper/assets/Hornik.pdf">
        Multilayer NNs are universal approximators (Universal Approximation
        Thm): Can be used to make a Kernel out of NN (a relatively newer idea
        floating around
        <a href="https://ieeexplore.ieee.org/abstract/document/7877043">here</a>
        )?
      </a>
    </li>
    <li>
      <a href="https://www.nature.com/articles/s41598-018-20275-7"
        >Optimisation Techniques using Self Organised Criticality (SOC)
        Search(was shown to be more efficient than simulated annealing, incl on
        problems equivalent to finding ground state on Ising Spin Glass)</a
      >
    </li>
    <li>
      <a href="https://ar5iv.labs.arxiv.org/html/2107.03402"
        >The above paper is important since it was theorized here, that training
        dynamics of NNs are attracted towards SOC States, (this however might be
        too far from our use case since we're not looking at NNs directly but
        SVMs, not sure)</a
      >
    </li>
  </ul>
</section>
<!-- Week 2 -->
<details>
  <summary>Week 2</summary>
  <div>
    <ul>
      <li>Doing LitRev of QML Algorithms</li>
    </ul>
    <b>Picking Topics:</b>
    <ul>
      <li>
        Encoding Kernel Function Finding efficient kernel fns for QML (like
        DLOG) that work better on QCs than on classical computers
      </li>
      <li>Encoding Data ZZ Z XZ Finding better encodings for data</li>
      <li>
        RL for Ansatz Using RL for finding better initial guess for ansatz
      </li>
      <li>
        Problems in Finance Finding better ways to solve problems in finance
      </li>
    </ul>
  </div>
</details>
<!-- Week 1 -->
<details>
  <summary>Week 1</summary>
  <div>
    <ul>
      <li>
        Revision:
        <a
          href="https://youtube.com/playlist?list=PLvvQ7qimTOklI0uO9gYfng__EyFfOoSna"
        >
          [WILP: QIC]
        </a>
      </li>
      <li>
        Started:
        <a
          href="https://youtube.com/playlist?list=PLmRxgFnCIhaMgvot-Xuym_hn69lmzIokg"
        >
          [UnivWaterloo: QML MOOC]
        </a>
      </li>
    </ul>
  </div>
</details>

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
  section,
  details {
    font-weight: 200;
    max-width: 1040px;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    & .mini {
      summary {
        margin-bottom: 5px;
        text-transform: unset;
        font-weight: 200;
        box-shadow: none;
        &:hover {
          box-shadow: none;
        }
      }
    }
  }

  header,
  summary {
    @extend .shadow;
    text-transform: uppercase;
    font-weight: 500;
    background: #fff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    max-width: 300px;
  }
  chip {
    display: inline-block;
    border: 1px solid #ccc8;
    background: #fff;
    padding: 5px;
    margin: 5px;
    border-radius: 20px;
    max-width: 300px;
  }

  a,
  a:visited,
  a:active,
  a:hover {
    color: #66f !important;
  }
  iframe {
    width: min(100%, 900px);
    aspect-ratio: 16/10;
  }
</style>
