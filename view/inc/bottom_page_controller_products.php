<!-- BOTTOM PAGE CRUD -->

<!-- Js files -->
	<!-- JavaScript -->
	<!-- <script src="js/jquery-2.2.3.min.js"></script> -->
	<!-- Default-JavaScript-File -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/bootstrap.js"></script>
	<!-- Necessary-JavaScript-File-For-Bootstrap -->

	<!-- navigation -->
	<!-- dropdown smooth -->
	<script>
		$(document).ready(function () {
			$(".dropdown").hover(
				function () {
					$('.dropdown-menu', this).stop(true, true).slideDown("fast");
					$(this).toggleClass('open');
				},
				function () {
					$('.dropdown-menu', this).stop(true, true).slideUp("fast");
					$(this).toggleClass('open');
				}
			);
		});
	</script>
	<!-- //dropdown smooth -->
	<!-- fixed nav -->
	<script>
		$(window).scroll(function () {
			if ($(document).scrollTop() > 50) {
				$('nav').addClass('shrink');
			} else {
				$('nav').removeClass('shrink');
			}
		});
	</script>
	<!-- //fixed nav -->
	<!-- //navigation -->

	<!-- flexisel(for filter) -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/jquery.flexisel.js"></script>
	<script>
		$(window).load(function () {
			$("#flexiselDemo1").flexisel({
				visibleItems: 4,
				animationSpeed: 1000,
				autoPlay: true,
				autoPlaySpeed: 3000,
				pauseOnHover: true,
				enableResponsiveBreakpoints: true,
				responsiveBreakpoints: {
					portrait: {
						changePoint: 480,
						visibleItems: 1
					},
					landscape: {
						changePoint: 640,
						visibleItems: 2
					},
					tablet: {
						changePoint: 768,
						visibleItems: 3
					}
				}
			});

		});
	</script>
	<!-- //flexisel(for filter) -->

	<!-- smooth scrolling -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/SmoothScroll.min.js"></script>
	<!-- move-top -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/move-top.js"></script>
	<!-- easing -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/easing.js"></script>
	<!--  necessary snippets for few javascript files -->
	<script src="<? echo _PROJECT_PATH_; ?>/view/js/outdoor.js"></script>

	<script src="<? echo _PROJECT_PATH_; ?>/view/js/bootstrap.js"></script>
	<!-- Necessary-JavaScript-File-For-Bootstrap -->

	<!-- //Js files -->


</body>

</html>