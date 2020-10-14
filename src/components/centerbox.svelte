<script>
</script>

<style type="text/scss">
      section {
            width: 500px;
            height: 200px;
            border-radius: 25px;
            display: flex;
            border-bottom: 4px solid #7eb6ff;
            background: #fff;
            padding: 1em;
            pointer-events: none;
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
            section {
                  width: 300px;
                  height: auto;
                  flex-wrap: wrap;
                  text-align: center;
                  border-radius: 20px;
                  .left,
                  .right {
                        width: 100%;
                        padding: 0;
                  }
            }
      }
</style>

<section>
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
</section>
