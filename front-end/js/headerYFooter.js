document.getElementById("header").innerHTML= `
<nav class="navbar navbar-expand-sm navbar-dark p-0">
    <div class="container-fluid">
        <div class="header-logo">
            <a class="navbar-brand me-0 me-sm-2" href="https://21kmpalermo.netlify.app"><img src="img/header-logo.png" alt="Logo 21 km Palermo"></a>
        </div>
        <p class="text-white mb-0">Administración</p>
        <button class="navbar-toggler d-lg-none text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="collapsibleNavId" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link active" href="index.html" aria-current="page">Inscriptos<span class="visually-hidden">(current)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="circuitos.html">Circuitos</a></li>
                <li class="nav-item"><a class="nav-link" href="kits.html">Kits</a></li>
            </ul>
        </div>
    </div>
</nav>
<div class="band"></div>
`

document.getElementById("footer").innerHTML= `
<div>
    <a href="https://www.facebook.com" target="_blank"><i class ="fa fa-facebook text-white mx-2" aria-hidden="true"></i></a>
    <a href=" https://www.instagram.com" target="_blank "><i class ="fa fa-instagram text-white mx-2" aria-hidden="true"></i></a>
    <a href="https://www.twitter.com" target="_blank"><i class ="fa fa-twitter text-white mx-2" aria-hidden="true"></i></a>
</div>
<p class="mb-0">© copyright 2023</p>
<p class="mb-0">Developer by Team One</p>
`