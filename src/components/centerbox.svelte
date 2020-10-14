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
            img {
                  width: 200px;
                  height: 200px;
                  border-radius: 120px;
                  object-fit: cover;
            }
            .title {
                  font-size: 1.5em;
                  font-weight: 600;
                  line-height: 1em;
            }
            a {
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
                  }
            }
      }
</style>

<section>
      <div class="left" style="padding-right:20px;">
            <img src="./assets/pic.jpeg" alt="" />
      </div>
      <div class="right">
            <p class="title">Manav Seksaria</p>
            <p>Cyber Security Researcher, Full Stack Javascript</p>
            <a href="https://github.com/plutoniumblast">@plutoniumblast</a>
      </div>
</section>
