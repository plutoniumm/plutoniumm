<script>
    import Card from "$component/card.svelte";
    import QnA from "./data.csv";
</script>

<section class="mx-a w-100">
    {#each QnA as qa}
        <Card className="m10 w-100 tl">
            <div class="q">{qa.question}</div>
            <div class="a">{qa.answer}</div>
        </Card>
    {/each}
</section>

<style>
    section {
        padding-top: 10px;
        max-width: min(100%, 600px);
    }
    .q {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 7px;
    }
</style>
