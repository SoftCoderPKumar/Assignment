<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	//Pappu kumar 14-Jan-2019
	public function index()
	{
		$this->load->view('index');
	}

	public function addProcess(){
		if($this->input->post('p_que')){
			$this->Mod_Common->insert();
			$this->session->set_flashdata('message', "<div class='alert alert-success'>Data Inserted Success full.</div>");
			redirect('home');
		}else{
			$this->session->set_flashdata('message', "<div class='alert alert-danger'>All Field Requird. </div>");
			redirect('home');
		}
		
	}
}
