<!-- <a href="index.php" data-tr="Homepage">Homepage</a>&nbsp;&nbsp;|&nbsp;&nbsp;  
<a href="index.php?page=products_crud&op=list" data-tr="Products">Products</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="index.php?page=services" data-tr="Services">Services</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="index.php?page=controller_likes&op=list" data-tr="Likes">Likes</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="index.php?page=aboutus" data-tr="AboutUs">About Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="index.php?page=contactus" data-tr="ContactUs">Contact Us</a> -->

<!-- header -->
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="index.html">
            <img src="<? echo _PROJECT_URL_; ?>/view/images/logo4.png" class="logo img-fluid" alt="">Outdoor
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-toggle" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-toggle " id="navbarNavAltMarkup">
            <ul class="navbar-nav mx-xl-auto">
                <li>
                    <a class="nav-link text-uppercase" id="home_button" href="<? echo _PROJECT_URL_; ?>" data-tr="Homepage">Homepage</a>
                </li>
                <li>
                    <a class="nav-link text-uppercase" id="products_crud" href="<? echo _PROJECT_URL_; ?>/page/products_crud/op/list" data-tr="Products">Products</a>
                </li>
                <li>
                    <a class="nav-link text-uppercase" id="contact_us" href="<? echo _PROJECT_URL_; ?>/page/contact_us" data-tr="Contact Us">Contact Us</a>
                </li>
                <!-- <li class="nav-item dropd	own">
						<a class="nav-link text-uppercase dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
						    aria-expanded="false">Pages
							<i class="fas fa-caret-down"></i>
						</a>
						<div class="dropdown-menu second mt-2" style="display: none;">
							<a class="dropdown-item scroll" href="#services">Services</a>
							<a class="dropdown-item" href="faqs.html">Faqs</a>

							<div class="dropdown-divider"></div>
							<a class="dropdown-item scroll" href="#feedback">Testimonials</a>
							<a class="dropdown-item" href="gallery.html">Gallery</a>
							<a class="dropdown-item" href="single.html">Some More</a>
						</div>
					</li> -->
                <li>
                    <a class="nav-link text-uppercase" id="likes_controller" href="<? echo _PROJECT_URL_; ?>/page/likes/op/list" data-tr="Likes">Likes</a>
                </li>
                <li>
                    <a class="nav-link text-uppercase" id="shop_controller" href="<? echo _PROJECT_URL_; ?>/page/shop/op/list" data-tr="Shop">Shop</a>
                </li>
            </ul>
            <div class="top-info text-lg-right text-center mt-lg-0 mt-3">
                <ul class="navbar-nav mx-xl-auto">
                    <li class="text-white mr-xl-4 mr-2 ml-xl-0 ml-lg-5">+ 12345678099</li>
                    <!-- <li><button class="btn btn-primary btn-lg" href="#signup" data-toggle="modal" data-target=".bs-modal-sm">Sign In/Register</button></li> -->
                    <!-- <button class="login_button" style="margin: 10px;">Login</button> -->
                    <li class="text-white mr-xl-4 mr-2 ml-xl-0 ml-lg-5">
                        <div class="logged">
                            <!-- <a class="nav-link text-uppercase" id="login" href="index.php?page=login" data-tr="Login">Login</a> -->
                            <!-- <a class="nav-link text-uppercase" id="logout" data-tr="Logout">Logout</a> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
<!-- //header -->

