<script>
  import { onMount } from "svelte";
  import { hash } from "predefined";
  import QRCode from "qrcode-generator";
  // https://github.com/kazuhikoarase/qrcode-generator
  import { encrypt, decrypt } from "./encc";
  import { PASSWORD, images } from "../../../secrets/password.js";

  const prefix = "https://nukes.in/password?encc=";

  const decr_uri = (data) => prefix + encodeURIComponent(data);
  const generateQR = (encrypted, query) => {
    const el = document.getElementById(query);
    const data = decr_uri(encrypted);

    const QR = QRCode(0, "H");
    QR.addData(data);
    QR.make();

    el.innerHTML = QR.createSvgTag(4, 0);
    return encrypted;
  };

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const encrypted = decodeURIComponent(urlParams.get("encc"));

    if (encrypted?.length > 5) {
      console.log(encrypted);
      const passkey = await hash(prompt("Enter passkey"));

      const decrypted = await decrypt(encrypted, passkey);
      console.log(decrypted);
    }
  });

  export let data;
</script>

<!-- Path: src/routes/password/+page.svelte -->
<div class="w-100 f fw" style="word-wrap: break-word;">
  {#each data.chunked as chunk, index}
    {@const id = `canvas-${index}`}
    {@const string = chunk.string}

    <div class="f-col tc p10">
      <div {id} />
      {#await encrypt(string, PASSWORD) then encrypted}
        <a class="p5 rx10 mx-a fw7 button" href={decr_uri(encrypted)}>
          Decrypt {(generateQR(encrypted, id).length + Math.random() * 20) | 0}
        </a>
        <div>
          {#each chunk.images as name}
            {#if Object.hasOwn(images, name)}
              <img class="p5 rx10" src={images[name]} alt="name[0]" />
            {:else}
              <a href={name}>{name}</a>
            {/if}
          {/each}
        </div>
      {/await}
    </div>
  {/each}

  <style>
    svg {
      width: 300px;
      height: 300px;
    }
  </style>
</div>

<style>
  a,
  a:visited,
  a:hover {
    color: purple !important;
  }
  img {
    object-fit: contain;
    height: 48px;
    width: 48px;
  }
  .button {
    background: #fff;
    border: 1px solid #0002;
    max-width: 200px;
    margin-bottom: 10px;
  }
</style>
