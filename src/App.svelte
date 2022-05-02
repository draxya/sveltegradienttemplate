<script>
	// When the user scrolls the page, execute myFunction
	window.onscroll = function () {
		myFunction();
	};

	function myFunction() {
		var winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		var height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("myBar").style.width = scrolled + "%";
	}
</script>

<main>
	<ul class="boxcenter">
		<li>
			<a href="localhost:8000">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/work">work</a>
		</li>
		<li>
			<a href="/blog">blog</a>
		</li>
		<li>
			<a href="/contact">contact</a>
		</li>
	</ul>

	<div class="mainpage boxcenter">
		<!-- svelte-ignore a11y-missing-attribute -->
		<img src="/icon.png" class="rounded-full" />

		<h1>draxya</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
			consectetur maxime amet aperiam dolore impedit error aut incidunt
			quod explicabo maiores vitae quasi, laborum iste alias dolor
			necessitatibus corporis perferendis!
		</p>
	</div>
</main>

<style>
	main {
		font-size: 20px;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.rounded-full {
		border-radius: 9999px;
		width: auto;
		vertical-align: middle;
		border-width: 4px;
		border-color: #000000;
	}

	h1 {
		color: #000000;
		font-size: 56px;
		font-weight: 100;
	}

	.boxcenter {
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 10px;
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(0.5px);
		-webkit-backdrop-filter: blur(0.5px);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.034);
		background: rgba(255, 255, 255, 0.705);
	}

	.mainpage {
		position: absolute;
		top: 610px;
		width: 55%;
		height: 1000px;
	}

	ul {
		position: relative;
		left: 50%;
		width: 56.7%;
	}

	ul li {
		display: inline-block;
		list-style: none;
		margin: 5px;
		padding: 5px 50px;
	}
	ul li a {
		text-decoration: none;
		text-transform: uppercase;
		font-size: 25px;
		color: #262626;
		position: relative;
		transition: all 0.5s ease;
		font-weight: 400;
	}
	ul li a:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100px;
		height: 40px;
		background: #3c4cad;
		transform-style: preserve-3d;
		transform: translate(-50%, -50%) rotate(0deg) scale(0);
		transition: all 1s cubic-bezier(0.43, 2.11, 0.6, 0.6);
		z-index: -1;
		border-radius: 0 50px;
	}
	ul li:hover a:after {
		transform: translate(-50%, -50%) rotate(160deg) scale(1.2);
	}
	ul li:hover a {
		color: rgb(255, 255, 255);
		text-shadow: 0 2px 20px rgba(48, 19, 19, 0.9);
	}

	@media (min-width: 100px) {
		main {
			max-width: 50%;
		}
		.mainpage {
			position: absolute;
			top: 630px;
			width: 55%;
			height: 1000px;
		}
		.boxcenter {
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 10px;
			box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
			backdrop-filter: blur(0.5px);
			-webkit-backdrop-filter: blur(0.5px);
			border-radius: 20px;
			border: 1px solid rgba(255, 255, 255, 0.034);
			background: rgba(255, 255, 255, 0.705);
			width: 90%;
		}
		ul {
			position: absolute;
			left: 50%;
			width: 100%;
		}
		ul li {
			display: inline-block;
			list-style: none;
			margin: 10px;
			padding: 0px 0px;
		}
	}
</style>
