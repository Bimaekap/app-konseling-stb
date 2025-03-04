class CHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const activeOn = this.attributes.getNamedItem("active-on").value;
    this.innerHTML = `
      <div class="navbar-bg"></div>
      <nav class="navbar navbar-expand-lg main-navbar justify-content-between">
        <form class="form-inline">
          <ul class="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></a></li>
            <!-- <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i
                  class="fas fa-search"></i></a></li> -->
          </ul>
          <!-- <div class="search-element">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250">
            <button class="btn" type="submit"><i class="fas fa-search"></i></button>
            <div class="search-backdrop"></div>
          </div> -->
        </form>
        <h1 class="mb-0 text-white"
          style="text-transform: uppercase; letter-spacing: 2px; font-weight: 700; font-size: 18px; line-height: 60px; height: 60px;">
          Billing
        </h1>
        <ul class="navbar-nav navbar-right">
          <!-- <li class="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              class="nav-link notification-toggle nav-link-lg beep"><i class="far fa-bell"></i></a>
          </li> -->
          <li class="dropdown"><a href="#" data-toggle="dropdown"
              class="nav-link dropdown-toggle nav-link-lg nav-link-user">
              <img alt="image" src="assets/img/avatar/avatar-1.png" class="rounded-circle mr-1">
              <div class="d-sm-none d-lg-inline-block">Hi, Admin</div>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <!-- <div class="dropdown-title">Logged in 5 min ago</div>
              <a href="features-profile.html" class="dropdown-item has-icon">
                <i class="far fa-user"></i> Profile
              </a>
              <a href="features-activities.html" class="dropdown-item has-icon">
                <i class="fas fa-bolt"></i> Activities
              </a>
              <a href="features-settings.html" class="dropdown-item has-icon">
                <i class="fas fa-cog"></i> Settings
              </a>
              <div class="dropdown-divider"></div> -->
              <a href="#" class="dropdown-item has-icon text-danger">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="mt-4 mb-5 sidebar-brand">
            <a href="index.html"><img src="./assets/img/logo.png" alt="logo" height="80px"></a>
          </div>
          <div class="mt-4 mb-5 sidebar-brand sidebar-brand-sm">
            <a href="index.html"><img src="./assets/img/logo.png" alt="logo" height="50px"></a>
          </div>
          <ul class="sidebar-menu">
            <li>
              <a class="nav-link" href="index.html">
                <i class="fas fa-fire"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li class="menu-header">Pembayaran</li>
            <li>
              <a class="nav-link" href="tagihan.html">
                <i class="fas fa-money-bill"></i>
                <span>Tagihan</span>
              </a>
            </li>
            <li>
              <a class="nav-link" href="kategori.html">
                <i class="fas fa-th"></i>
                <span>Kategori</span>
              </a>
            </li>
            <li>
              <a class="nav-link" href="riwayat.html">
                <i class="fas fa-user-clock"></i>
                <span>Riwayat</span>
              </a>
            </li>
            <!-- <li class="menu-header">Keuangan</li>
            <li>
              <a class="nav-link" href="laporan.html">
                <i class="fas fa-book"></i>
                <span>Cetak Laporan</span>
              </a>
            </li> -->
          </ul>
        </aside>
      </div>
    `;

    const sidebarMenu = this.querySelectorAll(".sidebar-menu .nav-link");
    sidebarMenu[activeOn].parentElement.classList.add("active");
  }
}

customElements.define("c-header", CHeader);
