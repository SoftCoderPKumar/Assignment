<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Advanz101 Assignment</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="assets/js/custom.js"></script>
</head>
<body>
	<div class="header">
		<span class="text-primary">add new call</span>
	</div>
	<form method="post" action="<?php echo base_url('addProcess') ?>" class="form-horizontal form-validate-jquery add-poll">
		<?php 
			if($this->session->flashdata('message')){
				echo $this->session->flashdata('message');	
			}
		?>	
		<div class="container">
			
		</div>
		<div class="footer">
			<div class="text-right addNewButton">
				<button type="button" class="btn btn-befault text-uppercase addNew"><i class="fa fa-plus" aria-hidden="true"></i> add new question</button>
			</div>
			<div class="save-container">
	            <button type="submit" class="submit btn btn-info">save</button>
	            <button type="button" class="all-remove btn btn-befault"> Cancel</button>
			</div>
		</div>

	</form>
</body>
</html>
