<script>
    import { onMount } from "svelte";
    import { Accordion } from "$cpt";

    let state = "checking";
    let kex = "";
    let info = [];

    const titles = {
        checking: "… checking whether your browser uses post-quantum crypto",
        pq: "✓ your browser is using post-quantum crypto",
        classical: "✗ your browser is not using post-quantum crypto",
        unknown: "could not check post-quantum support",
    };

    const keep = ["kex", "tls", "http", "h", "ip", "colo", "loc", "uag"];

    onMount(async () => {
        try {
            const res = await fetch(
                "https://pq.cloudflareresearch.com/cdn-cgi/trace",
            );
            const text = await res.text();
            info = (text.match(/[ -~]+/g) || [])
                .map((l) => {
                    const j = l.indexOf("=");

                    return [l.slice(0, j), l.slice(j + 1)];
                })
                .filter((kv) => keep.includes(kv[0]));
            const m = text.match(/kex=([A-Za-z0-9_-]+)/);
            kex = m ? m[1] : "";

            if (!kex) state = "unknown";
            else if (kex.includes("MLKEM") || kex.includes("Kyber"))
                state = "pq";
            else state = "classical";
        } catch (e) {
            state = "unknown";
        }
    });
</script>

<div class="pqc {state === 'pq' ? 'green' : 'yellow'}">
    <Accordion title={titles[state]}>
        {#if state === "pq"}
            <p>
                Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b>{kex}</b>. That is ML-KEM,
                the lattice scheme this article builds, hybridised with the
                classical elliptic-curve exchange.
            </p>
        {:else if state === "classical"}
            <p>
                Your browser just opened a fresh TLS connection to a test
                server, and the key agreement used <b>{kex}</b>. That is
                classical only, no ML-KEM. A recording of that handshake could
                be unwrapped by a future quantum computer.
            </p>
        {:else if state === "unknown"}
            <p>
                The request to the test server did not make it (an ad blocker, a
                strict privacy mode, or being offline will do that), so there is
                nothing to report.
            </p>
        {/if}
        {#if info.length}
            <div class="trace my10 py5 px10 rx5">
                {#each info as kv, i (i)}
                    <div><span class="k d-ib">{kv[0]}</span>{kv[1]}</div>
                {/each}
            </div>
        {/if}
        <p class="note">
            via pq.cloudflareresearch.com/cdn-cgi/trace, which echoes back the
            key exchange it negotiated with you. This tests your browser, not
            this site.
        </p>
    </Accordion>
</div>

<style>
    .pqc.yellow :global(details) {
        background: #fcf3d4;
        border: 1px solid #e0c252;
    }
    .pqc.green :global(details) {
        background: #e2f4e8;
        border: 1px solid #4fb477;
    }
    .pqc :global(summary) {
        font-weight: 500;
    }
    .pqc p {
        margin: 8px 0;
        font-size: 0.92em;
    }
    .trace {
        background: rgba(255, 255, 255, 0.55);
        font-family: monospace;
        font-size: 0.85em;
    }
    .trace .k {
        width: 60px;
        color: #888;
    }
    .note {
        color: #888;
        font-size: 0.8em !important;
    }
</style>
