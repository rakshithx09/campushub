<main>
  <div class="card card1">
    <div class="preview">
      <h1>JAVA</h1>
    </div>
    <div class="card-content">
      <div class="card-image"></div>

      <div class="card-tags">
        <span class="tag">4 credits</span>
        <span class="tag">IPCC</span>
      </div>

      <h2>JAVA</h2>
      <p>Click the btn below to download the materials</p>

      <div class="read-more">
        <button
          ><a
            href="https://drive.google.com/uc?export=download&id=14fMJnLHRSk1C7wsoJHJ4eqCKWDRbpAoh

                        ">download</a
          ></button
        >
      </div>
    </div>
  </div>
  <div class="card card2">
    <div class="preview">
      <h1>DS</h1>
    </div>
    <div class="card-content">
      <div class="card-image"></div>

      <div class="card-tags">
        <span class="tag">4 credits</span>
        <span class="tag">IPCC</span>
      </div>

      <h2>Data Structures</h2>
      <p>Click the btn below to download the materials</p>

      <div class="read-more">
        <button
          ><a
            href="https://drive.google.com/uc?export=download&id=1W95mKPRGGvrB3y0NwIsGJBi8Upx98SgP"
            >download</a
          ></button
        >
      </div>
    </div>
  </div>
  <div class="card card3">
    <div class="preview">
      <h1>MP</h1>
    </div>
    <div class="card-content">
      <div class="card-image"></div>

      <div class="card-tags">
        <span class="tag">4 credits</span>
        <span class="tag">IPCC</span>
      </div>

      <h2>Microprocessors</h2>
      <p>Click the btn below to download the materials</p>

      <div class="read-more">
        <button
          ><a
            href="https://drive.google.com/uc?export=download&id=12CgJvWVNfTvS1bPLhHl3PVdwNNh7sOot"
            >download</a
          ></button
        >
      </div>
    </div>
  </div>
  <div class="card card4">
    <div class="preview">
      <h1>DBMS</h1>
    </div>
    <div class="card-content">
      <div class="card-image"></div>

      <div class="card-tags">
        <span class="tag">4 credits</span>
        <span class="tag">IPCC</span>
      </div>

      <h2>Database Management</h2>
      <p>Click the btn below to download the materials</p>

      <div class="read-more">
        <button
          ><a
            href="https://drive.google.com/uc?export=download&id=167-MRa_94eZLOL_hx9lqW5NDjXid7KcQ"
            >download</a
          ></button
        >
      </div>
    </div>
  </div>
  <div class="card card5">
    <div class="preview">
      <h1>COA</h1>
    </div>
    <div class="card-content">
      <div class="card-image"></div>

      <div class="card-tags">
        <span class="tag">3 credits</span>
        <span class="tag">PCC</span>
      </div>

      <h2>COA</h2>
      <p>Click the btn below to download the materials</p>

      <div class="read-more">
        <button
          ><a
            href="https://drive.google.com/uc?export=download&id=0B2pLe3nVmLejbHpaSHhacWJDU0w3TWVmSkFpSDhJQ0pKME93"
            >download</a
          ></button
        >
      </div>
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    padding: 50px;
    overflow-y: scroll;
    /* background: linear-gradient(to top left,  #83878a77 , #021942);*/
  }

  .card {
    position: relative;
    height: 400px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(5px);

    z-index: 1;

    /* border: 1px solid rgb(119, 140, 180); */
    border: 2px solid white;
    border-radius: 20px;

    box-shadow: inset;
    /* text-align: center; */
    padding: 10px;
  }
  .card .preview {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    color: white;
    font-size: 5rem;
    line-height: 1;
    opacity: 40%;
    transition: opacity 0.5s;
  }
  /* .preview h1{
    -webkit-text-stroke: 5px white;
    -webkit-text-fill-color: transparent;
} */
  .card-content {
    transform: translateY(220px);
    opacity: 0;

    transition:
      transform ease 0.4s,
      opacity 0.4s;
  }
  .card:hover .card-content {
    opacity: 1;
    transform: translateY(0px);
  }
  .card:hover .preview {
    opacity: 0;
  }
  .card h2 {
    color: white;
  }
  .card p {
    font-size: 0.9rem;
    margin-top: 5px;
    color: var(--textcolor);
  }
  .card-image {
    position: relative;
    margin-top: 10px;
    height: 170px;
    width: 100%; /* Set the width to 100% to take the full width */
    border-radius: 10px;
  }

  .card1 .card-image {
    background: url(https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg)
      center/cover;
  }
  .card2 .card-image {
    background: url(https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg)
      center/cover;
  }
  .card3 .card-image {
    background: url(https://blog-media.byjusfutureschool.com/bfs-blog/2022/09/12070610/Article-Page-78.png)
      center/cover;
  }
  .card4 .card-image {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw95D5nQR0hYP4rzYDfU4HEnY-3VIKPpxTxq9nHSWgdv25T9sqJ3HolTYZ39EjBE5E1m8&usqp=CAU)
      center/cover;
  }

  .card5 .card-image {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAw_JplV3RXW_8Yp3PcVvNF0ybjP5dOg2QI4BL8zsxiPPdd0-hqDX7xtHJj8399a01DI&usqp=CAU)
      center/cover;
  }

  .card-tags {
    display: flex;
    padding: 10px;
    gap: 10px;
    /* justify-content: center; */
  }

  .tag {
    font-size: 0.8rem;
    color: var(--textcolor);
    padding: 1px 10px;
    border: 1px solid rgb(102, 102, 102);
    border-radius: 20px;
  }

  .read-more {
    text-align: center;
    margin-top: 20px;
    padding: 0px 10px;
  }
  .read-more button {
    color: white;
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50px;
    transition:
      border-radius 0.3s,
      background-color 0.3s;
    cursor: pointer;
  }
  .read-more button:hover {
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
  }
  .card h1 {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 2rem; /* Adjust the font size as needed */
    color: rgb(255, 255, 255);
  }
</style>
