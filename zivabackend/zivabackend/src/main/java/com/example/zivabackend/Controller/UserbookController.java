package com.example.zivabackend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zivabackend.Model.Userbook;
import com.example.zivabackend.Service.UserbookService;

@RestController
@RequestMapping("/userbooking")

public class UserbookController {
    @Autowired
    public UserbookService userbookservice;
    @PostMapping
    public Userbook createuserbook(@RequestBody Userbook bookinginfo)
    {
        return userbookservice.createuserbook(bookinginfo);
    }
    @GetMapping
    public List<Userbook> getuserbook()
    {
        return userbookservice.getuserbook();

    }
    @GetMapping("/{id}")
    public Userbook getuserbookbyid(@PathVariable int id)
    {
        return userbookservice.getuserbookbyid(id);
    }
    @PutMapping("/{id}")
    public Userbook updateuserbook(@PathVariable int id, @RequestBody Userbook ubnewinfo)
    {
        return userbookservice.updateuserbook(id, ubnewinfo);
    }
    @DeleteMapping("/{id}")
    public void deletebookingbyid(@PathVariable int id)
    {
        userbookservice.deletebookingbyid(id);
    }

    
}

