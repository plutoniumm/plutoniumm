<script>
  import { onMount } from "svelte";
  import PASSWDS from "../../../secrets/passwords.csv";
  import { encrypt, decrypt } from "./encc";
  import { PASSWORD, email_replaces } from "../../../secrets/password.js";
  import QR from "qr-code-styling";

  const emailReplace = (username) => {
    for (const [key, value] of Object.entries(email_replaces))
      username = username.replace(key, value);

    return username;
  };

  const chunked = PASSWDS.map(({ name, url, username, password }) => {
    return {
      name: name
        .replace(".com", "")
        .replace(".in", "")
        .replace(".me", "")
        .replace(".org", ""),
      username: emailReplace(username),
      password,
      url: new URL(url).hostname,
      value: (Math.random() * 1e4) | 0,
    };
  })
    .sort((a, b) => a.value - b.value)
    .reduce((all, one, i) => {
      const ch = Math.floor(i / 4);
      all[ch] = [].concat(all[ch] || [], one);
      return all;
    }, []);

  const password = PASSWORD;

  const generateQR = (data, query) => {
    const qrCode = new QR({
      width: 300,
      height: 300,
      data,
      image: null,
      type: "svg",
      dotsOptions: { color: "#46b", type: "rounded" },
      backgroundOptions: { color: "#0000" },
      imageOptions: { crossOrigin: "anonymous", margin: 0 },
    });

    const el = document.getElementById(query);
    qrCode.getRawData("png").then((png) => {
      const blob = new Blob([png], { type: "image/png" });
      const image = new Image();

      image.src = URL.createObjectURL(blob);
      image.onload = () => el.appendChild(image);
    });

    return "";
  };

  onMount(async () => {});
</script>

<!-- Path: src/routes/password/+page.svelte -->
<div class="w-100 f fw" style="word-wrap: break-word;">
  {#each chunked as chunk, index}
    {@const id = `canvas-${index}`}
    {@const reduced = chunk.map(({ name, username, password }) => {
      return [name, username, password];
    })}
    {@const string = JSON.stringify(reduced).replaceAll("www.", "")}

    <div class="f-col tc p10">
      <div {id} />
      {#await encrypt(string, password) then encrypted}
        <div class="fw7">{encrypted.length}</div>
        <div>
          {generateQR(encrypted, id)}
          {#each reduced as name}
            {name[0]} - {name[1]}<br />
          {/each}
        </div>
      {/await}
    </div>
  {/each}
</div>
