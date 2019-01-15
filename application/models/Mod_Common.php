<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Kolkata');
class Mod_Common extends CI_Model {
	// base constructor
	public function __construct()
	{
	    parent::__construct();
	}
	
	public function insert(){
		$que_list = $this->input->post('p_que');
		$que_type = $this->input->post('queType');
		$ans_list = $this->input->post('ans');
		$sub_que_list = $this->input->post('s_que');
		$sub_que_type = $this->input->post('subqueType');

		foreach($que_list as $key => $que){

			$type = $que_type[$key];
			$data = array('Que'=> $que,'Type'=>$type,'Parent'=>0);
			$this->db->insert('que', $data);
			$que_id = $this->db->insert_id();

			if($que_type[$key]==3){
				foreach ($ans_list[$key+1] as $i=> $value) {

					if($i==5)
						break;

					$data = array('q_id'=> $que_id,'o_text'=>$value);
					$this->db->insert('option', $data);

					
				}
			}else{
				foreach ($ans_list[$key+1] as $i => $value) {

					if($i==1)
						break;	
					$data = array('q_id'=> $que_id,'o_text'=>$value);
					$this->db->insert('option', $data);

				}
			}
		}
		return true;
	}
}