<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><?php echo $title; ?></title>
<meta name="keywords" content="Shopping, Online, Client, Customer, Buying">
<meta name="description" content="Put pyscial items on this website to sell and people can buy!">
<meta name="author" content="Nick Liffen">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<link rel="stylesheet" type="text/css" href="css/mystyle.css">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

<?php
include("database/connect_database.php");
?>


<body>
	<div id="box">

<article>
	
<section class="header"><h1>Content Management System</h1></section>
			
						<nav>
							<ul>
								<li><a href="index.php">Products</a></li>
								<li><a href="addproduct.php">Add Products</a></li>
								<li><a href="updateproduct.php">Update Product Information</a></li>
								<li><a href="deleteproduct.php">Delete Product</a></li>
							</ul> 

							<div id = "headerNew">
							<ul>
								<li><a href="../customer/index.php">Customer</a></li>
								<li><a href="">Admin</a></li>
							</ul>
						</div>
						</nav>
</article>
		</div>