const navbar = document.getElementById('navbar')
const footer = document.getElementById('footer')

navbar.innerHTML = `<nav class="navbar navbar-expand navbar-dark">
    <a class="navbar-brand" href="#">Zylstra Music Services LLC</a>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button> -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="teach.html">Teaching</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="arrange.html">Arranging</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="accompany.html">Accompaniment</a>
        </li>
    </ul>
</nav>`;

footer.innerHTML = `<div class="footer">
<p>email: sandra.zylstra@comcast.net</p>
<a target="_blank" href="https://google.com"><i class="icon fa-solid fa-envelope fa-lg"></i></a>
<a target="_blank" href="https://google.com"><i class="icon fa-brands fa-facebook fa-lg"></i></a>
<a target="_blank" href="https://google.com"><i class="icon fa-brands fa-linkedin fa-lg"></i></a>
</div>`