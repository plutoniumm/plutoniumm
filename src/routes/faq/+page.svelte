<script>
    import Card from "@component/card.svelte";
</script>

<section class="mx-a w-50">
    <br />
    <Card className="m20 tl">
        <div class="q">Is Flutter Garbage?</div>
        <div class="a">
            Yes. Please use only React Native if, at all, not actual Native.
            Flutter tries to reinvent the wheel by having its own renderer.
            <!-- https://youtu.be/3_FcxGCCnUs -->
        </div>
    </Card>
</section>

<style>
    .q {
        font-size: 1.2rem;
        font-weight: bold;
    }
</style>
