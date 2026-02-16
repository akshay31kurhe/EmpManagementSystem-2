package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.services.EmployeeServices;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController
{
	@Autowired
	EmployeeServices service;
	
	@PostMapping("/addemp")
	public String addemp(@RequestBody Employee e)
	{
		return service.addemp(e);
	}
	@GetMapping("/findallemp")
	public List<Employee> findallemp()
	{
		return service.findallemp();
	}
	@DeleteMapping("/deleteemp")
	public String deleteemp(@RequestParam int empid)
	{
		return service.deletebyid(empid);
	}
	@PutMapping("/updateemp")
	public String updateemp(@RequestParam int empid, @RequestBody Employee newemp)
	{
		return service.updatebyid(empid, newemp);
	}
	@GetMapping("/findempbyid")
	public Employee findempbyid(int empid)
	{
		return service.findempbyid(empid);
	}
	@GetMapping("/findbyfirstname")
	public List<Employee> findbyfirstname(@RequestParam String fname)
	{
		return service.findbyfirstname(fname);
	}
	@GetMapping("/findbylastname")
	public List<Employee>findbylastname(@RequestParam String lname)
	{
		return service.findbylastname(lname);
	}
	@GetMapping("/findbydesignation")
	public List<Employee>findbydesignation(@RequestParam String desig)
	{
		return service.findbydesignation(desig);
	}
	@GetMapping("/findbydepartment")
	public List<Employee>findbydepartment(@RequestParam String dept)
	{
		return service.findbydepartment(dept);
	}
}